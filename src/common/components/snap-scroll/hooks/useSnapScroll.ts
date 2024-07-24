import { useEffect, useRef, useState } from "react";
import createIntersectingObserver from "../Services/createIntersectingObserver";

export default function useSnapScroll() {
    const snapscrollRef = useRef<HTMLDivElement | null>(null);
    const [isAnimationEnd, setAnimationEnd] = useState(false);
    const [isScrolling, setScrolling] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLastItemIntersecting, setLastItemIntersecting] = useState(false);

    // observe end of scroll items animation
    useEffect(() => {
        const lastSnapScrollItem = snapscrollRef.current?.lastChild;
        lastSnapScrollItem!.addEventListener("animationend", () =>
            setAnimationEnd(() => true)
        );

        return lastSnapScrollItem!.removeEventListener("animationend", () =>
            setAnimationEnd(() => true)
        );
    }, []);

    // observe whether last scroll item is intersecting
    useEffect(() => {
        const lastSnapScrollItem = snapscrollRef.current
            ?.lastChild as HTMLElement;

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            if (entries[0].isIntersecting) {
                setLastItemIntersecting(() => true);
            } else {
                setLastItemIntersecting(() => false);
            }
        };

        const observerOption = {
            threshold: 1.0,
            rootMargin: "0px -10px 0px 0px",
        };

        const observer = createIntersectingObserver({
            callback: observerCallback,
            options: observerOption,
        });

        observer.observe(lastSnapScrollItem!);

        return () => {
            observer.disconnect();
        };
    });

    // set closest item from scroll as current
    const updateScrollState = () => {
        setScrolling(() => true);
        setCurrentIndex(() => calculateNesrestElementIndex());
        setScrolling(() => false);
    };

    // scroll to right 1 item
    const scrollRight = () => {
        if (isScrolling || !isAnimationEnd || isLastItemIntersecting) return;
        snapScrollItems()[currentIndex + 1].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
        });
    };

    //scroll to left 1 item
    const scrollLeft = () => {
        if (!isAnimationEnd || isScrolling || !currentIndex) return;
        snapScrollItems()[currentIndex - 1].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
        });
    };

    function calculateNesrestElementIndex() {
        const elements = Array.from(
            snapscrollRef.current!.children
        ) as HTMLDivElement[];
        let result = 0;
        let distance = 9999;
        elements.forEach((element, index) => {
            const distanceNow = Math.abs(
                snapscrollRef.current!.scrollLeft -
                    element.offsetLeft +
                    element.offsetWidth / 2
            );
            if (distanceNow < distance) {
                distance = distanceNow;
                result = index;
            }
        });

        return result;
    }

    function snapScrollItems() {
        return Array.from(snapscrollRef.current!.children) as HTMLDivElement[];
    }

    return {
        snapscrollRef,
        states: {
            currentIndex,
            isAnimationEnd,
            isLastItemIntersecting,
        },
        eventListeners: {
            updateScrollState,
            scrollLeft,
            scrollRight,
        },
    };
}

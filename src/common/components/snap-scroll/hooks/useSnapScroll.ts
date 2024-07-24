import { useEffect, useRef, useState } from "react";
import createIntersectingObserver from "../Services/createIntersectingObserver";

export default function useSnapScroll() {
    const snapScrollRef = useRef<HTMLDivElement | null>(null);
    const [isAnimationEnd, setAnimationEnd] = useState(false);
    const [isScrolling, setScrolling] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isIntersecting, setIntersecting] = useState(false);
    const [isLastItemIntersecting, setLastItemIntersecting] = useState(false);

    // observe whether scroller is intersecting
    useEffect(() => {
        const scrollIntersectingCallback = (
            entries: IntersectionObserverEntry[]
        ) => {
            if (entries[0].isIntersecting) setIntersecting(() => true);
        };

        const observerOption = {
            threshold: 0.6,
        };

        const observer = createIntersectingObserver({
            callback: scrollIntersectingCallback,
            options: observerOption,
        });

        observer.observe(snapScrollRef.current!);

        return () => {
            observer.disconnect();
        };
    });

    // observe end of scroll items animation
    useEffect(() => {
        const lastSnapScrollItem = snapScrollRef.current?.lastChild;
        lastSnapScrollItem!.addEventListener("animationend", () =>
            setAnimationEnd(() => true)
        );

        return lastSnapScrollItem!.removeEventListener("animationend", () =>
            setAnimationEnd(() => true)
        );
    }, []);

    // observe whether last scroll item is intersecting
    useEffect(() => {
        const lastSnapScrollItem = snapScrollRef.current
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
            snapScrollRef.current!.children
        ) as HTMLDivElement[];
        let result = 0;
        let distance = 9999;
        elements.forEach((element, index) => {
            const distanceNow = Math.abs(
                snapScrollRef.current!.scrollLeft -
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
        return Array.from(snapScrollRef.current!.children) as HTMLDivElement[];
    }

    return {
        snapScrollRef,
        states: {
            currentIndex,
            isAnimationEnd,
            isLastItemIntersecting,
            isIntersecting,
        },
        eventListeners: {
            updateScrollState,
            scrollLeft,
            scrollRight,
        },
    };
}

import { useEffect, useState } from "react";
import createIntersectingObserver from "../Services/createIntersectingObserver";

export default function useSnapScroll({
    snapscrollContainerRef,
    snapscrollRef,
}: {
    snapscrollContainerRef: React.RefObject<HTMLDivElement>;
    snapscrollRef: React.RefObject<HTMLDivElement>;
}) {
    const [isAnimationEnd, setAnimationEnd] = useState(false);
    const [isScrolling, setScrolling] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLastItemIntersecting, setLastItemIntersecting] = useState(false);

    // observe end of scroll items animation
    useEffect(() => {
        if (!snapscrollRef.current) return;

        const lastSnapScrollItem = snapscrollRef.current.lastChild;
        lastSnapScrollItem?.addEventListener("animationend", setAnimationIsEnd);

        return () => {
            lastSnapScrollItem?.removeEventListener(
                "animationend",
                setAnimationIsEnd
            );
        };

        function setAnimationIsEnd() {
            setAnimationEnd(() => true);
        }
    }, [snapscrollRef]);

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

    // disable/activate scroll button
    useEffect(() => {
        if (!snapscrollContainerRef.current) return;

        const [leftBtn, rightBtn] =
            snapscrollContainerRef.current.querySelectorAll(
                ".snap-scroll-btn__icon"
            );

        if (currentIndex === 0 || !isAnimationEnd) {
            disableButton(leftBtn);
        } else {
            activateButton(leftBtn);
        }

        if (isLastItemIntersecting || !isAnimationEnd) {
            disableButton(rightBtn);
        } else {
            activateButton(rightBtn);
        }

        function disableButton(btn: Element) {
            btn.classList.add("snap-scroll-btn__icon-disabled");
        }

        function activateButton(btn: Element) {
            btn.classList.remove("snap-scroll-btn__icon-disabled");
        }
    }, [
        snapscrollContainerRef,
        currentIndex,
        isAnimationEnd,
        isLastItemIntersecting,
    ]);

    // set closest item from scroll as current
    const updateScrollState = () => {
        setScrolling(() => true);
        setCurrentIndex(() => calculateNesrestElementIndex());
        setScrolling(() => false);

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

    function snapScrollItems() {
        return Array.from(snapscrollRef.current!.children) as HTMLDivElement[];
    }

    return {
        scrollHandler: {
            updateScrollState,
            scrollLeft,
            scrollRight,
        },
    };
}

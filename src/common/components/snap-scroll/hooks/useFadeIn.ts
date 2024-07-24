import { useEffect, useRef, useState } from "react";
import createIntersectingObserver from "../Services/createIntersectingObserver";

export default function useFadeIn(scrollerState: {
    currentIndex: number;
    isAnimationEnd: boolean;
    isLastItemIntersecting: boolean;
}) {
    const snapscrollContainerRef = useRef<HTMLDivElement>(null);
    const [isIntersecting, setIntersecting] = useState(false);

    const fadeInScrollItems = () => {
        snapscrollContainerRef
            .current!.querySelectorAll(".snap-scroll-item-container")
            .forEach((aItemContainer) => {
                aItemContainer.classList.add("fade-in-animation");
            });
    };

    const fadeInButtons = () => {
        snapscrollContainerRef
            .current!.querySelectorAll(".snap-scroll-btn")
            .forEach((aItemContainer) => {
                aItemContainer.classList.add("fade-in-animation");
            });
    };

    useEffect(() => {
        if (!snapscrollContainerRef.current) return;

        const scrollIntersectingCallback = (
            entries: IntersectionObserverEntry[]
        ) => {
            if (entries[0].isIntersecting) setIntersecting(() => true);
        };

        const observer = createIntersectingObserver({
            callback: scrollIntersectingCallback,
            options: {
                threshold: 0.6,
            },
        });

        observer.observe(snapscrollContainerRef.current!);

        return () => {
            observer.disconnect();
        };
    });

    useEffect(() => {
        if (!snapscrollContainerRef.current) return;
        if (isIntersecting) {
            fadeInScrollItems();
            fadeInButtons();
        }
    }, [isIntersecting]);

    useEffect(() => {
        if (!snapscrollContainerRef.current) return;

        const [leftBtn, rightBtn] =
            snapscrollContainerRef.current.querySelectorAll(".snap-scroll-btn");

        if (scrollerState.currentIndex === 0 || !scrollerState.isAnimationEnd) {
            disableButton(leftBtn);
        } else {
            activateButton(leftBtn);
        }

        if (
            scrollerState.isLastItemIntersecting ||
            !scrollerState.isAnimationEnd
        ) {
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
        scrollerState.currentIndex,
        scrollerState.isAnimationEnd,
        scrollerState.isLastItemIntersecting,
    ]);

    return { snapscrollContainerRef };
}

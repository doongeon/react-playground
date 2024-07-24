import { useEffect, useRef, useState } from "react";
import createIntersectingObserver from "../Services/createIntersectingObserver";

export default function useFadeIn() {
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

    return { snapscrollContainerRef };
}

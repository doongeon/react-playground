import { useEffect, useState } from "react";
import createIntersectingObserver from "../Services/createIntersectingObserver";

export default function useFadeIn({
    snapscrollContainerRef,
}: {
    snapscrollContainerRef: React.RefObject<HTMLDivElement>;
}) {
    const [isIntersecting, setIntersecting] = useState(false);

    // observe whether philosophysection is intersecting
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

        function fadeInScrollItems() {
            snapscrollContainerRef
                .current!.querySelectorAll(".snap-scroll-item-container")
                .forEach((aItemContainer) => {
                    aItemContainer.classList.add("fade-in-animation");
                });
        }

        function fadeInButtons() {
            snapscrollContainerRef
                .current!.querySelectorAll(".snap-scroll-btn")
                .forEach((aItemContainer) => {
                    aItemContainer.classList.add("fade-in-animation");
                });
        }
    }, [snapscrollContainerRef, isIntersecting]);
}

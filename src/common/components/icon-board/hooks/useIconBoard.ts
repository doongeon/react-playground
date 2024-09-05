import { useEffect, useRef, useState } from "react";

export default function useIconBoard() {
    const iconBoardRef = useRef<HTMLDivElement | null>(null);
    const [isIconBoardIntersecting, setIsIconBoardIntersecting] =
        useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                if (entries[0].isIntersecting)
                    setIsIconBoardIntersecting(() => true);
            },
            { threshold: 0.6 }
        );

        observer.observe(iconBoardRef.current!);

        return () => {
            observer.disconnect();
        };
    });

    return {
        iconBoardRef,
        isIconBoardIntersecting,
    };
}

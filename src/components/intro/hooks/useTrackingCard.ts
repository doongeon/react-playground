import { useEffect, useRef, useState } from "react";

export default function useTrackingCard() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mouseEnter, setMouseEnter] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const detectMouseEnter = () => {
        setMouseEnter(() => true);
        document.addEventListener("mousemove", updateMousePosition);
    };

    const detectMouseLeave = () => {
        setMouseEnter(() => false);
        document.removeEventListener("mousemove", updateMousePosition);
    };

    useEffect(() => {
        if (!cardRef.current) return;

        if (mouseEnter) {
            const rectCenter = calculateCenter(
                cardRef.current.getBoundingClientRect()
            );
            const mouseOffset = calculateMouseOffset(rectCenter);
            cardRef.current.style.transform = getCssTransform(mouseOffset);
        } else {
            cardRef.current.style.transform = "";
        }

        function getCssTransform(mouseOffset: { x: number; y: number }) {
            return `perspective(5000px) rotateY(${
                mouseOffset.x
            }deg) rotateX(${-mouseOffset.y}deg)`;
        }

        function calculateCenter(rect: DOMRect) {
            const x = rect.left + rect.width / 2;
            const y = rect.y + rect.height / 2;
            return { x, y };
        }

        function calculateMouseOffset(rectCenter: { x: number; y: number }) {
            const x = ((mousePosition.x - rectCenter.x) / rectCenter.x) * 50;
            const y = ((mousePosition.y - rectCenter.y) / rectCenter.x) * 50;
            return { x, y };
        }
    }, [mouseEnter, mousePosition]);

    useEffect(() => {
        return () => {
            document.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return { cardRef, detectMouseEnter, detectMouseLeave };
}

import { useEffect, useRef, useState } from "react";

export default function useTrackingCard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseEnter, setMouseEnter] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseEnter = () => {
    setMouseEnter(() => true);
    document.addEventListener("mousemove", handleMouseMove);
  };

  const onMouseLeave = () => {
    setMouseEnter(() => false);
    document.removeEventListener("mousemove", handleMouseMove);
  };

  useEffect(() => {
    const card = cardRef.current;

    if (mouseEnter) {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const middleX = rect.left + rect.width / 2;
      const middleY = rect.y + rect.height / 2;
      const offsetX = ((mousePosition.x - middleX) / middleX) * 50;
      const offsetY = ((mousePosition.y - middleY) / middleX) * 50;

      if (card) {
        card.style.transform = `perspective(5000px) rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
      }
    } else {
      if (card) {
        card.style.transform = `perspective(5000px) rotateY(0) rotateX(0)`;
      }
    }
  }, [mouseEnter, mousePosition]);

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return { cardRef, onMouseEnter, onMouseLeave };
}

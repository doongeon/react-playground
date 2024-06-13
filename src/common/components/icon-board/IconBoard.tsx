import "./iconBoard.css";
import { IconBoardProps } from "./types";
import { useEffect, useRef, useState } from "react";

export default function IconBoard({ boardItems }: IconBoardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) setIsIntersecting(() => true);
      },
      { threshold: 0.6 }
    );

    observer.observe(ref.current!);

    return () => {
      observer.disconnect();
    };
  });

  return (
    <div className="icon-board" ref={ref}>
      {boardItems.map((boardItem, index) => {
        return (
          <div
            className={`icon-board-item ${
              isIntersecting ? "fade-in-animation" : ""
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
            id={`icon-board-item${index}`}
          >
            <div className="icon-board-item__image-container">
              <img className="icon-board-item__image" src={boardItem.avatar} />
            </div>
            <h2 className="icon-board-item__name">{boardItem.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

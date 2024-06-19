import "./iconBoard.css";
import { IconBoardProps } from "./types";
import { useEffect, useRef, useState } from "react";

export default function IconBoard({ boardItems }: IconBoardProps) {
  const { iconBoardRef, isIconBoardIntersecting } = useIconBoard();
  return (
    <div className="icon-board" ref={iconBoardRef}>
      {boardItems.map((boardItem, index) => {
        return (
          <div
          key={index}
            className={`icon-board-item ${
              isIconBoardIntersecting ? "fade-in-animation" : ""
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

function useIconBoard() {
  const iconBoardRef = useRef<HTMLDivElement | null>(null);
  const [isIconBoardIntersecting, setIsIconBoardIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) setIsIconBoardIntersecting(() => true);
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

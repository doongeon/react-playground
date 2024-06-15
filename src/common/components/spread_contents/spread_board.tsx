import { useEffect, useRef, useState } from "react";
import "./spread_board.css";
import { PlayCircleIcon } from "@heroicons/react/16/solid";

function getRandomDuration() {
  let randomNumber = 0;
  while (randomNumber < 0.3) {
    randomNumber = Math.random();
  }

  return randomNumber;
}

function getRandomPosition() {
  let position = Math.random() * 2 - 1;
  while (Math.abs(position) < 0.3) {
    position = Math.random() * 2 - 1;
  }
  return position;
}

export default function SpreadBoard() {
  const [isSpreadBoardIntersecting, setIsSpreadBoardIntersecting] =
    useState(false);
  const spreadContentsRef = useRef<HTMLDivElement | null>(null);
  const [restartAnimation, setRestartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) setIsSpreadBoardIntersecting(() => true);
      },
      { threshold: 0.4 }
    );

    observer.observe(spreadContentsRef.current!);
  });

  useEffect(() => {
    const spreadItems =
      spreadContentsRef.current!.querySelectorAll<HTMLDivElement>(
        ".spread_board__spread-item"
      );

    spreadItems?.forEach((spreadItem) => {
      spreadItem.style.setProperty("--x", getRandomPosition() + "");
      spreadItem.style.setProperty("--y", getRandomPosition() + "");
      spreadItem.style.setProperty("--n", getRandomDuration() + "");
    });
  }, [restartAnimation]);

  const handleRestartAnimation = () => {
    setRestartAnimation((prev) => !prev); // Toggle restartAnimation state
  };

  return (
    <div className="spread-board-container">
      <div ref={spreadContentsRef} className="spread-board">
        <div className="spread-board__center"></div>
        {[...Array(6)].map(() => {
          return (
            <div
              className={`spread_board__spread-item ${
                isSpreadBoardIntersecting && "spread"
              }`}
            />
          );
        })}
        <div>
          <button
            className="spread-board__restart-btn"
            onClick={handleRestartAnimation}
          >
            <PlayCircleIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

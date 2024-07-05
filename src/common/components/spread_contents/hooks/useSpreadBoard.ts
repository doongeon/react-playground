import { useRecoilValue, useSetRecoilState } from "recoil";
import { restartSpreadAtom, spreadBoardIntersectingAtom } from "../atom";
import { useEffect, useRef } from "react";
import { getRandomDuration, getRandomPosition } from "../services";

export default function useSpreadBoard() {
  const setSpreadBoardIntersecting = useSetRecoilState(
    spreadBoardIntersectingAtom
  );
  const spreadBoardRef = useRef<HTMLDivElement | null>(null);
  const restartAnimation = useRecoilValue(restartSpreadAtom);

  useEffect(() => {
    setSpreadBoardIntersecting(false)

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) setSpreadBoardIntersecting(true);
      },
      { threshold: 0.4 }
    );

    observer.observe(spreadBoardRef.current!);
  });

  useEffect(() => {
    const spreadItems =
      spreadBoardRef.current!.querySelectorAll<HTMLDivElement>(
        ".spread_board__spread-item"
      );

    spreadItems?.forEach((spreadItem) => {
      spreadItem.style.setProperty("--x", getRandomPosition() + "");
      spreadItem.style.setProperty("--y", getRandomPosition() + "");
      spreadItem.style.setProperty("--n", getRandomDuration() + "");
    });
  }, [restartAnimation]);

  return { spreadBoardRef };
}

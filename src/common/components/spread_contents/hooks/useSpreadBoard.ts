import { useRecoilValue, useSetRecoilState } from "recoil";
import { restartSpreadAtom, spreadBoardIntersectingAtom } from "../atom";
import { useEffect } from "react";
import { getRandomDuration, getRandomPosition } from "../services";

export default function useSpreadBoard({
    spreadBoardRef,
}: {
    spreadBoardRef: React.RefObject<HTMLDivElement>;
}) {
    const setSpreadBoardIntersecting = useSetRecoilState(
        spreadBoardIntersectingAtom
    );
    const restartAnimation = useRecoilValue(restartSpreadAtom);

    useEffect(() => {
        setSpreadBoardIntersecting(false);

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
    }, [spreadBoardRef, restartAnimation]);
}

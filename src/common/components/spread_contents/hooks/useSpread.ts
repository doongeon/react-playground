import { useRecoilValue } from "recoil";
import { restartSpreadAtom, spreadBoardIntersectingAtom } from "../atom";
import { useEffect } from "react";

interface useSpreadProps {
    spreadItemRef: React.RefObject<HTMLImageElement>;
    index: number;
}

export default function useSpread({ spreadItemRef, index }: useSpreadProps) {
    const spreadBoardIntersecting = useRecoilValue(spreadBoardIntersectingAtom);
    const restartAnimation = useRecoilValue(restartSpreadAtom);

    useEffect(() => {
        if (!spreadItemRef.current) return;

        // order spread
        if (spreadBoardIntersecting && !restartAnimation) {
            spreadItemRef.current.classList.add("spread" + (index + 1));
        } else {
            spreadItemRef.current.classList.remove("spread" + (index + 1));
        }

        // random spread
        if (spreadBoardIntersecting && restartAnimation) {
            spreadItemRef.current.classList.add("random-spread");
        } else {
            spreadItemRef.current.classList.remove("random-spread");
        }
    }, [spreadItemRef, index, restartAnimation, spreadBoardIntersecting]);
}

import { useRecoilValue } from "recoil";
import { spreadBoardIntersectingAtom } from "../atom";
import { useEffect } from "react";

interface useSpreadProps {
    spreadItemRef: React.RefObject<HTMLImageElement>;
    index: number;
}

export default function useSpread({ spreadItemRef, index }: useSpreadProps) {
    const spreadBoardIntersecting = useRecoilValue(spreadBoardIntersectingAtom);

    useEffect(() => {
        if (!spreadItemRef.current) return;

        // order spread
        if (spreadBoardIntersecting) {
            spreadItemRef.current.classList.add("spread" + (index + 1));
        } else {
            spreadItemRef.current.classList.remove("spread" + (index + 1));
        }
    }, [spreadItemRef, index, spreadBoardIntersecting]);
}

import { useSetRecoilState } from "recoil";
import { spreadBoardIntersectingAtom } from "../atom";
import { useEffect } from "react";

export default function useSpreadBoard({
    spreadBoardRef,
}: {
    spreadBoardRef: React.RefObject<HTMLDivElement>;
}) {
    const setSpreadBoardIntersecting = useSetRecoilState(
        spreadBoardIntersectingAtom
    );

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
}

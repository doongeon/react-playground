import { PlayCircleIcon } from "@heroicons/react/16/solid";
import { useSetRecoilState } from "recoil";
import { restartSpreadAtom } from "../atom";

export default function RestartBtn() {
    const setRestartAnimation = useSetRecoilState(restartSpreadAtom);
    const onClick = () => {
        setRestartAnimation((prev: boolean) => !prev); // Toggle restartAnimation state
    };

    return (
        <button className="spread-board__restart-btn" onClick={onClick}>
            <PlayCircleIcon />
        </button>
    );
}

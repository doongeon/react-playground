import "./styles/spread_board.css";
import useSpreadBoard from "./hooks/useSpreadBoard";
import SpreadItem from "./components/spread_Item";
import { useRef } from "react";

export interface t_spreadItem {
    img: string;
}

interface SpreadBoardProps {
    spreadItems: t_spreadItem[];
}

export default function SpreadBoard({ spreadItems }: SpreadBoardProps) {
    const spreadBoardRef = useRef<HTMLDivElement>(null);
    useSpreadBoard({ spreadBoardRef });

    return (
        <div className="spread-board-container">
            <div ref={spreadBoardRef} className="spread-board">
                <div className="spread-board__center">IDEA</div>
                {spreadItems.map((spreadItem, index) => (
                    <SpreadItem
                        key={index}
                        imageUrl={spreadItem.img}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}

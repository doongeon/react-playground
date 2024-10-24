import "./styles/spread_board.css";
import useSpreadBoard from "./hooks/useSpreadBoard";
import SpreadItem from "./components/spread_Item";
import { useRef } from "react";
import { Link } from "react-router-dom";

export interface t_spreadItem {
    img: string;
    gameId?: string;
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
                {spreadItems.map((spreadItem, index) =>
                    spreadItem.gameId ? (
                        <Link key={index} to={`/game/${spreadItem.gameId}`}>
                            <SpreadItem
                                imageUrl={spreadItem.img}
                                index={index}
                            />
                        </Link>
                    ) : (
                        <SpreadItem
                            key={index}
                            imageUrl={spreadItem.img}
                            index={index}
                        />
                    )
                )}
            </div>
        </div>
    );
}

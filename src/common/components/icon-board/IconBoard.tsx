import useIconBoard from "./hooks/useIconBoard";
import "./iconBoard.css";
import { IconBoardProps } from "./types";

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
                            <img
                                className="icon-board-item__image"
                                src={boardItem.avatar}
                            />
                        </div>
                        <h2 className="icon-board-item__name">
                            {boardItem.name}
                        </h2>
                    </div>
                );
            })}
        </div>
    );
}

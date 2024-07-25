import { HTMLAttributes, useRef } from "react";
import useSpread from "../hooks/useSpread";

interface SpreadBoardItemProps extends HTMLAttributes<HTMLImageElement> {
    imageUrl: string;
    index: number;
}

export default function SpreadItem({
    imageUrl,
    index,
    ...rest
}: SpreadBoardItemProps) {
    const spreadItemRef = useRef<HTMLImageElement>(null);
    useSpread({ spreadItemRef, index });

    return (
        <img
            ref={spreadItemRef}
            {...rest}
            className={"spread_board__spread-item"}
            src={imageUrl}
        />
    );
}

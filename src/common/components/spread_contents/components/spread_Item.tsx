import { useRecoilValue } from "recoil";
import { spreadBoardIntersectingAtom } from "../atom";
import { HTMLAttributes } from "react";

interface SpreadBoardItemProps extends HTMLAttributes<HTMLImageElement> {
  imageUrl: string;
}

export default function SpreadItem({
  imageUrl,
  ...rest
}: SpreadBoardItemProps) {
  const spreadBoardIntersecting = useRecoilValue(spreadBoardIntersectingAtom);

  return (
    <img
      {...rest}
      className={`spread_board__spread-item ${
        spreadBoardIntersecting && "spread"
      }`}
      src={imageUrl}
    />
  );
}

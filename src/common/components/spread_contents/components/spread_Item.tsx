import { useRecoilValue } from "recoil";
import { restartSpreadAtom, spreadBoardIntersectingAtom } from "../atom";
import { HTMLAttributes } from "react";

interface SpreadBoardItemProps extends HTMLAttributes<HTMLImageElement> {
  imageUrl: string;
  index: number;
}

export default function SpreadItem({
  imageUrl,
  index,
  ...rest
}: SpreadBoardItemProps) {
  const spreadBoardIntersecting = useRecoilValue(spreadBoardIntersectingAtom);
  const restartAnimation = useRecoilValue(restartSpreadAtom);

  return (
    <img
      {...rest}
      className={`spread_board__spread-item ${
        spreadBoardIntersecting && !restartAnimation && "spread" + (index + 1)
      } ${spreadBoardIntersecting && restartAnimation && "random-spread"}`}
      src={imageUrl}
    />
  );
}

import { forwardRef } from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../classes/Contants";

interface CanvasProps {}

const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>((props, ref) => {
  return (
    <canvas
      ref={ref}
      className="game-gui"
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
    />
  );
});

export default Canvas;

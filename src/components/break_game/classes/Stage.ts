import { Brick } from "./Brick";
import {
  BRICKS_PER_COLUMN,
  BRICKS_PER_ROW,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
} from "./Contants";
import { BRICK_COLOR } from "./Maps";

export class Stage {
  public ctx: CanvasRenderingContext2D;
  public map: number[][];
  public bricks: Brick[][] = [];
  public brickColumnCount: number;
  public brickRowCount: number;

  constructor(ctx: CanvasRenderingContext2D, map: number[][]) {
    this.ctx = ctx;
    this.map = map;
    this.brickRowCount = this.map.length;
    this.brickColumnCount = this.map[0].length;
    for (let i = 0; i < this.brickRowCount; i++) {
      this.bricks[i] = [];
      for (let j = 0; j < this.brickColumnCount; j++) {
        if (map[i][j] === 0) continue;

        this.bricks[i][j] = new Brick(
          this.ctx,
          (CANVAS_WIDTH / BRICKS_PER_ROW) * j -
            CANVAS_WIDTH / (BRICKS_PER_ROW + 0.5),
          (i * CANVAS_HEIGHT) / 3 / BRICKS_PER_COLUMN,
          {
            width: CANVAS_WIDTH / (BRICKS_PER_ROW + 0.5),
            height: CANVAS_HEIGHT / 3 / (BRICKS_PER_COLUMN + 0.5),
          },

          //@ts-ignore
          BRICK_COLOR[map[i][j]]
        );
      }
    }
  }

  public drawBricks() {
    for (let i = 0; i < this.brickRowCount; i++) {
      for (let j = 0; j < this.brickColumnCount; j++) {
        if (!this.bricks[i][j]) continue;
        if (this.bricks[i][j].cracked) continue;
        this.bricks[i][j].draw();
      }
    }
  }

  public getTotalBricks() {
    let total = 0;
    for (let i = 0; i < this.brickRowCount; i++) {
      for (let j = 0; j < this.brickColumnCount; j++) {
        if (!this.bricks[i][j]) continue;
        if (this.bricks[i][j].cracked) continue;

        total += 1;
      }
    }

    return total;
  }
}

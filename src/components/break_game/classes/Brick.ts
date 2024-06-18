export class Brick {
  private ctx: CanvasRenderingContext2D;
  public x: number;
  public y: number;
  public size: {
    width: number;
    height: number;
  };
  public color: string;
  public cracked = false;

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: { width: number; height: number },
    color: string
  ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  public draw() {
    // 벽돌 모서리를 부드럽게 그리기 위해 상대적인 좌표값 계산
    const borderRadius = 5;

    this.ctx.beginPath();
    this.ctx.moveTo(this.x + borderRadius, this.y); // 좌상단
    this.ctx.lineTo(this.x + this.size.width - borderRadius, this.y); // 우상단
    this.ctx.quadraticCurveTo(
      this.x + this.size.width,
      this.y,
      this.x + this.size.width,
      this.y + borderRadius
    ); // 우상단 모서리
    this.ctx.lineTo(
      this.x + this.size.width,
      this.y + this.size.height - borderRadius
    ); // 우하단
    this.ctx.quadraticCurveTo(
      this.x + this.size.width,
      this.y + this.size.height,
      this.x + this.size.width - borderRadius,
      this.y + this.size.height
    ); // 우하단 모서리
    this.ctx.lineTo(this.x + borderRadius, this.y + this.size.height); // 좌하단
    this.ctx.quadraticCurveTo(
      this.x,
      this.y + this.size.height,
      this.x,
      this.y + this.size.height - borderRadius
    ); // 좌하단 모서리
    this.ctx.lineTo(this.x, this.y + borderRadius); // 좌상단
    this.ctx.quadraticCurveTo(this.x, this.y, this.x + borderRadius, this.y); // 좌상단 모서리

    // 그림자 효과 추가
    this.ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    this.ctx.shadowBlur = 3;
    this.ctx.shadowOffsetX = 2;
    this.ctx.shadowOffsetY = 2;

    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();

    // 그림자 효과 초기화
    this.ctx.shadowColor = "transparent";
    this.ctx.shadowBlur = 0;
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 0;
  }
}

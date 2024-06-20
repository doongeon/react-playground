export class Controller {
  public rightPressed = false;
  public leftPressed = false;
  public spacePressed = false;

  constructor() {
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
    document.addEventListener("keydown", this.keyDownHandler);
    document.addEventListener("keyup", this.keyUpHandler);
  }

  private keyDownHandler(e: KeyboardEvent) {
    if (e.code === "ArrowRight") {
      this.rightPressed = true;
    }
    if (e.code === "ArrowLeft") {
      this.leftPressed = true;
    }
    if (e.code === "Space") {
      e.preventDefault();
      this.spacePressed = true;
    }
  }

  private keyUpHandler(e: KeyboardEvent) {
    if (e.code === "ArrowRight") {
      this.rightPressed = false;
    }
    if (e.code === "ArrowLeft") {
      this.leftPressed = false;
    }
    if (e.code === "Space") {
      this.spacePressed = false;
    }
  }

  public free() {
    document.removeEventListener("keydown", this.keyDownHandler);
    document.removeEventListener("keyup", this.keyUpHandler);
  }
}

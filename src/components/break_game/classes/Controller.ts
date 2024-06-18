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

  public keyDownHandler(e: KeyboardEvent) {
    if (e.keyCode === 39) {
      this.rightPressed = true;
    }
    if (e.keyCode === 37) {
      this.leftPressed = true;
    }
    if (e.keyCode === 32) {
      e.preventDefault();
      this.spacePressed = true;
    }
  }

  public keyUpHandler(e: KeyboardEvent) {
    if (e.keyCode === 39) {
      this.rightPressed = false;
    }
    if (e.keyCode === 37) {
      this.leftPressed = false;
    }
    if (e.keyCode === 32) {
      this.spacePressed = false;
    }
  }
}

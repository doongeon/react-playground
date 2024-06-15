import { getElementsByClassName } from "./getElementByClassName";

export class CssVaiableWriter {
  // write css variable on target class name
  #targetClassName: string;
  #cssVariable: string;

  constructor(targetClassName: string, cssVariable: string) {
    this.#targetClassName = targetClassName;
    this.#cssVariable = cssVariable;
  }

  writeIndex() {
    const elements = getElementsByClassName(this.#targetClassName);
    elements.map((element, index) => {
      element.style.setProperty(this.#cssVariable, index + "");
    });
  }
}

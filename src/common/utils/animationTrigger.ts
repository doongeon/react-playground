import { getElementsByClassName } from "./getElementByClassName";

class AnimationGlue {
  static addAnimation(animationClass: string, animatingClass: string) {
    const elements = getElementsByClassName(animatingClass);
    elements.map((element) => element.classList.add(animationClass));
  }
}

export class FadeInAnimationTrigger extends IntersectionObserver {
  static #threshold = 0.6;

  constructor(animatingClass: string) {
    const callback =
      FadeInAnimationTrigger.#getIntercectionObserverCallback(animatingClass);
    super(callback, { threshold: FadeInAnimationTrigger.#threshold });
  }

  static #addFadeInAnimation(animatingClass: string) {
    AnimationGlue.addAnimation("fade-in-animation", animatingClass);
  }

  static #getIntercectionObserverCallback(animatingClass: string) {
    return (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting)
        FadeInAnimationTrigger.#addFadeInAnimation(animatingClass);
    };
  }
}

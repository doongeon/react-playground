import { useRecoilState } from "recoil";
import { galleryModalOnAtom } from "../../util/atom";
import "./philosophy_modal.css";
import { useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";

export default function PhilosopyhModal() {
  const modal = useRef<HTMLDivElement | null>(null);

  const [isPhilosophyModalOn, setIsPhilosophyModalOn] =
    useRecoilState(galleryModalOnAtom);

  const onClickCloseModal = () => {
    setIsPhilosophyModalOn(() => false);
  };

  const addVisuallyVisible = () => {
    modal.current!.classList.add("visually-visible");
  };

  const removeVisuallyVisible = () => {
    modal.current!.classList.remove("visually-visible");
  };

  useEffect(() => {
    if (isPhilosophyModalOn) {
      addVisuallyVisible();
      document.body.style.overflow = "hidden";
    }
    document.body.style.overflow = "hidden";
    if (!isPhilosophyModalOn) {
      removeVisuallyVisible();
      document.body.style.overflow = "";
    }
  }, [isPhilosophyModalOn]);

  return (
    <div ref={modal} className="modal-wrap" onClick={onClickCloseModal}>
      <div
        className={`modal ${isPhilosophyModalOn ? "fade-in-animation" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__roof">
          <button className="modal__close-btn" onClick={onClickCloseModal}>
            <XMarkIcon />
          </button>
        </div>
        <div className="modal__image-container">
          <img
            className="modal__image"
            src="https://512pixels.net/wp-content/uploads/2020/06/11-0-Color-Day-thumbnails-768x768.jpg"
          />
        </div>
        <p className="modal__text-container">
          <h2 className="modal__title">단순한 코드</h2>
          <p className="modal__detail">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            reiciendis hic ab ratione totam, distinctio
          </p>
        </p>
      </div>
    </div>
  );
}

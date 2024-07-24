import "./philosophy_modal.css";
import { XMarkIcon } from "@heroicons/react/16/solid";
import usePhilosophyModal from "./hooks/usePhilosophyModal";

export default function PhilosopyhModal() {
    const { modalRef, onClickCloseModal } = usePhilosophyModal();
    return (
        <div ref={modalRef} className="modal-wrap" onClick={onClickCloseModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__roof">
                    <button
                        className="modal__close-btn"
                        onClick={onClickCloseModal}
                    >
                        <XMarkIcon />
                    </button>
                </div>
                <div className="modal__image-container">
                    <img
                        className="modal__image"
                        src="https://512pixels.net/wp-content/uploads/2020/06/11-0-Color-Day-thumbnails-768x768.jpg"
                    />
                </div>
                <div className="modal__text-container">
                    <h2 className="modal__title">단순한 코드</h2>
                    <span className="modal__detail">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ipsam reiciendis hic ab ratione totam, distinctio
                    </span>
                </div>
            </div>
        </div>
    );
}

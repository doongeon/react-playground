import { useRecoilState } from "recoil";
import { galleryModalOnAtom } from "../../util/atom";
import "./GalleryModal.css";
import { useEffect, useRef } from "react";

export default function GalleryModal() {
  const modal = useRef<HTMLDivElement | null>(null);

  const [galleryModalOn, setGalleryModalOn] =
    useRecoilState(galleryModalOnAtom);

  const turnOnfGalleryModal = () => {
    setGalleryModalOn(true);
  };

  const turnOffGalleryModal = () => {
    setGalleryModalOn((prevState) => false);
  };

  const addVisuallyVisible = () => {
    modal.current!.classList.add("visually-visible");
  };

  const removeVisuallyVisible = () => {
    modal.current!.classList.remove("visually-visible");
  };

  useEffect(() => {
    console.log(galleryModalOn);
    if (galleryModalOn) addVisuallyVisible();
    if (!galleryModalOn) removeVisuallyVisible();
  }, [galleryModalOn]);

  return (
    <div ref={modal} className="modal" id="modal-1">
      <div className="modal-container">
        <div className="modal-position-modifier">
          <div className="modal-wrapper">
            <div className="modal-content">
              <div className="modal-header">
                <button onClick={turnOffGalleryModal}>X</button>
              </div>
              <div className="modal-image-container">
                <div className="modal-image-position-modifier">
                  <img src="https://512pixels.net/wp-content/uploads/2020/06/11-0-Color-Day-thumbnails-768x768.jpg" />
                </div>
              </div>
              <div className="modal-text-container">
                <p className="modal-text-wrap">
                  <h2 className="modal-title">단순한 코드</h2>
                  <span>망치처럼 단순한 코드를 고민합니다.</span>
                  <span>망치처럼 단순한 코드를 고민합니다.</span>
                  <span>망치처럼 단순한 코드를 고민합니다.</span>
                  <span>망치처럼 단순한 코드를 고민합니다.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

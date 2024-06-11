import { useRecoilState } from "recoil";
import { galleryModalOnAtom } from "../../util/atom";
import { useEffect, useRef } from "react";
import { GalleryPhoto } from "./Gallery";
import "./GalleryItem.css";

interface GalleryItemProps {
  index: number;
  galleryPhoto: GalleryPhoto;
}

export default function GalleryItem({ index, galleryPhoto }: GalleryItemProps) {
  const galleryItem = useRef<HTMLDivElement | null>(null);
  const [galleryModalOn, setGalleryModalOn] =
    useRecoilState(galleryModalOnAtom);

  const turnOnfGalleryModalState = () => {
    setGalleryModalOn(true);
  };

  const setNthInClassName = () => {
    galleryItem.current!.style.setProperty("--n", index + "");
  };

  useEffect(() => {
    setNthInClassName();
  });

  return (
    <div
      ref={galleryItem}
      className="item-container"
      onClick={turnOnfGalleryModalState}
    >
      <div className="item-text-position-modifier">
        <div className="item-text-wrapper">
          <h3 className="item-title">{galleryPhoto.title}</h3>
          <p className="item-subtitle">
            <span>{galleryPhoto.quote}</span>
            <span>{galleryPhoto.source}</span>
          </p>
        </div>
      </div>
      <div className="item-image-position-modifier">
        <div className="item-image-container">
          <img className="item-image" src={galleryPhoto.photo} />
        </div>
      </div>
    </div>
  );
}

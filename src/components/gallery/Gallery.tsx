import GalleryModal from "../gallery-modal/GalleryModal";
import "./Gallery.css";
import GalleryItem from "./GalleryItem";
import { IMGAES } from "../../assets/image";
import { useEffect, useRef } from "react";
import { getElementsByClassName } from "../../common/utils/getElementByClassName";

export class GalleryPhoto {
  photo: string;
  title: string;
  quote: string;
  source: string;

  constructor(photo: string, title: string, quote: string, source: string) {
    this.photo = photo;
    this.title = title;
    this.quote = quote;
    this.source = source;
  }
}

const gallery: GalleryPhoto[] = IMGAES.map((image) => {
  return new GalleryPhoto(
    image,
    "망치처럼 단순하게",
    `"총은 단순해야해 망치처럼 말이지"`,
    "영화 AK-47"
  );
});

function addFadeInAnimationOnGalleryItem() {
  const itemContainers = getElementsByClassName("item-container");
  itemContainers.forEach((itemContainer) => {
    itemContainer.classList.add("fade-in-animation");
  });
}

export default function Gallery() {
  const galleryWrap = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) addFadeInAnimationOnGalleryItem();
    };
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.6 });
    observer.observe(galleryWrap.current as HTMLElement);

    return () => {
      observer.disconnect();
    };
  });

  return (
    <>
      <section ref={galleryWrap} className="gallery_wrap">
        <div className="gallery_title_wrap">
          <h2>그간의 기록</h2>
        </div>
        <div className="gallery">
          <div className="scroll-container">
            {gallery.map((galleryItem, index) => {
              return (
                <GalleryItem
                  key={index}
                  index={index}
                  galleryPhoto={galleryItem}
                />
              );
            })}
          </div>
        </div>
      </section>

      <GalleryModal />
    </>
  );
}

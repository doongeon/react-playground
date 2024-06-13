import { useEffect, useRef, useState } from "react";
import { GalleryPhoto } from "../../../components/gallery/Philosophy";
import { galleryModalOnAtom } from "../../../util/atom";
import { useRecoilState } from "recoil";
import "./snap-scroll.css";

interface SnapScrollProps {
  id: string;
  scrollItems: GalleryPhoto[];
}

export default function SnapScrollContainer({
  id,
  scrollItems,
}: SnapScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [galleryModalOn, setGalleryModalOn] =
    useRecoilState(galleryModalOnAtom);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) setIsIntersecting(() => true);
      },
      { threshold: 0.6 }
    );

    observer.observe(ref.current!);

    return () => {
      observer.disconnect();
    };
  });

  const turnOnGalleryModalState = () => {
    setGalleryModalOn(true);
  };

  return (
    <div className="snap-scroll-container" id={id} ref={ref}>
      <div className="snap-scroll">
        {scrollItems.map((scrollItem, index) => {
          return (
            <div
              key={index}
              className={`snap-scroll-item-container ${
                isIntersecting ? "fade-in-animation" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`snap-scroll-item`}
                onClick={turnOnGalleryModalState}
              >
                <div className="snap-scroll-item__text-wrapper">
                  <h3 className="snap-scroll-item__title">
                    {scrollItem.title}
                  </h3>
                  <p className="snap-scroll-item__subtitle">
                    <span>{scrollItem.quote}</span>
                    <span>{scrollItem.source}</span>
                  </p>
                </div>
                <div className="snap-scroll-item__image-container">
                  <img
                    className="snap-scroll-item__image gallery-item__image"
                    src={scrollItem.photo}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

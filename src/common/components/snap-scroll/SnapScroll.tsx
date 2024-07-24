import { GalleryPhoto } from "../../../components/philosophy/Philosophy";
import { galleryModalOnAtom } from "../../../utils/atom";
import { useSetRecoilState } from "recoil";
import "./snap-scroll.css";
import {
    ArrowLeftCircleIcon,
    ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";
import useSnapScroll from "./hooks/useSnapScroll";

interface SnapScrollProps {
    scrollItems: GalleryPhoto[];
}

export default function SnapScroll({ scrollItems }: SnapScrollProps) {
    const turnOnGalleryModalState = useGalleryModalOn();
    const { snapScrollRef, states, eventListeners } = useSnapScroll();

    return (
        <div className="snap-scroll-container">
            <div
                className="snap-scroll"
                ref={snapScrollRef}
                onScroll={eventListeners.updateScrollState}
            >
                {scrollItems.map((scrollItem, index) => {
                    return (
                        <div
                            key={index}
                            className={`snap-scroll-item-container ${
                                states.isIntersecting ? "fade-in-animation" : ""
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
            <div className={`snap-scroll-btn-container`}>
                <button
                    className={`snap-scroll-btn ${
                        states.isIntersecting ? "fade-in-animation" : ""
                    }`}
                    onClick={eventListeners.scrollLeft}
                >
                    <ArrowLeftCircleIcon
                        className={`snap-scroll-btn__icon ${
                            states.currentIndex === 0 || !states.isAnimationEnd
                                ? "snap-scroll-btn__icon-disabled"
                                : ""
                        }`}
                    />
                </button>
                <button
                    className={`snap-scroll-btn ${
                        states.isIntersecting ? "fade-in-animation" : ""
                    }`}
                    onClick={eventListeners.scrollRight}
                >
                    <ArrowRightCircleIcon
                        className={`snap-scroll-btn__icon ${
                            states.isLastItemIntersecting ||
                            !states.isAnimationEnd
                                ? "snap-scroll-btn__icon-disabled"
                                : ""
                        }`}
                    />
                </button>
            </div>
        </div>
    );
}

function useGalleryModalOn() {
    const setIsGalleryModalOn = useSetRecoilState(galleryModalOnAtom);

    function turnOnGalleryModalState() {
        setIsGalleryModalOn(true);
    }

    return turnOnGalleryModalState;
}

import {
    ArrowLeftCircleIcon,
    ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";
import { GalleryPhoto } from "../../../components/philosophy/Philosophy";
import useGalleryModalOn from "./hooks/useGalleryModalOn";
import useSnapScroll from "./hooks/useSnapScroll";
import useFadeIn from "./hooks/useFadeIn";
import "./snap-scroll.css";
import { useRef } from "react";

interface SnapScrollProps {
    scrollItems: GalleryPhoto[];
}

export default function Z_SnapScroll({ scrollItems }: SnapScrollProps) {
    const snapscrollContainerRef = useRef<HTMLDivElement>(null);
    const { snapscrollRef, scrollHandler } = useSnapScroll(
        snapscrollContainerRef
    );
    const turnOnGalleryModalState = useGalleryModalOn();
    useFadeIn({ snapscrollContainerRef });

    return (
        <div className="snap-scroll-container" ref={snapscrollContainerRef}>
            <div
                className="snap-scroll"
                ref={snapscrollRef}
                onScroll={scrollHandler.updateScrollState}
            >
                {scrollItems.map((scrollItem, index) => {
                    return (
                        <div
                            key={index}
                            className={`snap-scroll-item-container`}
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
                    className={`snap-scroll-btn`}
                    onClick={scrollHandler.scrollLeft}
                >
                    <ArrowLeftCircleIcon className={`snap-scroll-btn__icon`} />
                </button>
                <button
                    className={`snap-scroll-btn`}
                    onClick={scrollHandler.scrollRight}
                >
                    <ArrowRightCircleIcon className={`snap-scroll-btn__icon`} />
                </button>
            </div>
        </div>
    );
}

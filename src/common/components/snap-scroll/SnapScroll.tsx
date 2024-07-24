import {
    ArrowLeftCircleIcon,
    ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";
import { GalleryPhoto } from "../../../components/philosophy/Philosophy";
import useSnapScroll from "./hooks/useSnapScroll";
import useFadeIn from "./hooks/useFadeIn";
import "./snap-scroll.css";
import { useRef } from "react";
import SnapscrollItem from "./components/snapscroll_item";

interface SnapScrollProps {
    scrollItems: GalleryPhoto[];
}

export default function Z_SnapScroll({ scrollItems }: SnapScrollProps) {
    const snapscrollContainerRef = useRef<HTMLDivElement>(null);
    const { snapscrollRef, scrollHandler } = useSnapScroll(
        snapscrollContainerRef
    );
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
                        <SnapscrollItem
                            index={index}
                            key={index}
                            title={scrollItem.title}
                            quote={scrollItem.quote}
                            source={scrollItem.source}
                            photo={scrollItem.photo}
                        />
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

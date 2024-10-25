import "./snap-scroll.css";
import {
    ArrowLeftCircleIcon,
    ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";
import useSnapScroll from "./hooks/useSnapScroll";
import useFadeIn from "./hooks/useFadeIn";
import { useRef } from "react";
import SnapscrollItem from "./components/snapscroll_item";
import SnapscrollBtn from "./components/snapscroll_btn";

export interface t_snapScrollItem {
    title: string;
    source: string;
    img: string;
}

interface SnapScrollProps {
    scrollItems: t_snapScrollItem[];
}

export default function Z_SnapScroll({ scrollItems }: SnapScrollProps) {
    const snapscrollContainerRef = useRef<HTMLDivElement>(null);
    // const snapscrollRef = useRef<HTMLDivElement>(null);
    // const { scrollHandler } = useSnapScroll({
    //     snapscrollContainerRef,
    //     snapscrollRef,
    // });
    useFadeIn({ snapscrollContainerRef });

    return (
        <div className="snap-scroll-container" ref={snapscrollContainerRef}>
            <div
                className="snap-scroll"
                // ref={snapscrollRef}
                // onScroll={scrollHandler.updateScrollState}
            >
                {scrollItems.map((scrollItem, index) => {
                    return (
                        <SnapscrollItem
                            index={index}
                            key={index}
                            title={scrollItem.title}
                            source={scrollItem.source}
                            photo={scrollItem.img}
                        />
                    );
                })}
            </div>
            {/* <div className={`snap-scroll-btn-container`}>
                <SnapscrollBtn
                    key={"snap_scroll_btn_left"}
                    onClick={scrollHandler.scrollLeft}
                    children={
                        <ArrowLeftCircleIcon
                            className={`snap-scroll-btn__icon`}
                        />
                    }
                />
                <SnapscrollBtn
                    key={"snap_scroll_btn_right"}
                    onClick={scrollHandler.scrollRight}
                    children={
                        <ArrowRightCircleIcon
                            className={`snap-scroll-btn__icon`}
                        />
                    }
                />
            </div> */}
        </div>
    );
}

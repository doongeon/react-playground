import useGalleryModalOn from "../hooks/useGalleryModalOn";

interface SnapscrollItemProps {
    index: number;
    title: string;
    quote: string;
    source?: string;
    photo: string;
}

export default function SnapscrollItem({
    index,
    title,
    quote,
    source,
    photo,
}: SnapscrollItemProps) {
    const turnOnGalleryModalState = useGalleryModalOn();

    const getCssAnimationDelay = () => {
        return { animationDelay: `${index * 0.2}s` };
    };

    return (
        <div
            key={index}
            className={`snap-scroll-item-container`}
            style={getCssAnimationDelay()}
        >
            <div
                className={`snap-scroll-item`}
                onClick={turnOnGalleryModalState}
            >
                <div className="snap-scroll-item__text-wrapper">
                    <h3 className="snap-scroll-item__title">{title}</h3>
                    <p className="snap-scroll-item__subtitle">
                        <span>{quote}</span>
                        {source ? <span>{source}</span> : null}
                    </p>
                </div>
                <div className="snap-scroll-item__image-container">
                    <img
                        className="snap-scroll-item__image gallery-item__image"
                        src={photo}
                    />
                </div>
            </div>
        </div>
    );
}

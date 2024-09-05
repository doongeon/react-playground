import "./Introduction.css";
import MouseTrackingCard from "./components/mouse_tracking_card";
import useTrackingCard from "./hooks/useTrackingCard";
import TextContainer from "./components/text_container";

export default function Introduction() {
    const { cardRef, detectMouseEnter, detectMouseLeave } = useTrackingCard();

    return (
        <section
            className="intro-section"
            onMouseEnter={detectMouseEnter}
            onMouseLeave={detectMouseLeave}
        >
            <div className="intro-section__text-position-modifier">
                <TextContainer
                    title={"이끌림"}
                    sentence={"우리는 항상 무엇인가에 이끌립니다."}
                />
                <MouseTrackingCard cardRef={cardRef} />
                <TextContainer
                    sentence={
                        "상상하지 못했던,\n새롭고 즐거운 경험은 아니였을까요?"
                    }
                />
            </div>
        </section>
    );
}

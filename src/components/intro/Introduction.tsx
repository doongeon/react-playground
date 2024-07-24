import "./Introduction.css";
import MouseTrackingCard from "./components/mouse_tracking_card";
import useTrackingCard from "./hooks/useTrackingCard";
import TextContainer from "./components/text_container";

export default function Introduction() {
    const { cardRef, onMouseEnter, onMouseLeave } = useTrackingCard();

    return (
        <section
            className="intro-section"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="intro-section__text-position-modifier">
                <TextContainer
                    title={"이끌림"}
                    sentence={
                        "누군가 강요하지 않아도\n우리는 항상 무엇인가에 이끌립니다.\n무엇이 우리를 끌어당겼을까요?"
                    }
                />
                <MouseTrackingCard cardRef={cardRef} />
                <TextContainer
                    sentence={
                        "상상하지 못했던,\n새롭고 즐거운 경험은 아니였을까요?\n우리는 즐거운 경험을 만들어 갑니다."
                    }
                />
            </div>
        </section>
    );
}

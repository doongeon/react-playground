import "./Introduction.css";
import useTrackingCard from "./hooks/useTrackingCard";

export default function Introduction() {
  const { cardRef, onMouseEnter, onMouseLeave } = useTrackingCard();

  return (
    <section
      className="intro-section"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="intro-section__text-position-modifier">
        <div className="intro-section__text-container">
          <h2 className="intro-section__title">이끌림</h2>
          <span>누군가 강요하지 않아도</span>
          <span>우리는 항상 무엇인가에 이끌립니다.</span>
          <span>무엇이 우리를 끌어당겼을까요?</span>
        </div>
        <div ref={cardRef} className="tracking-card">
          <pre>
            <span className="tracking-card__red">int</span>{" "}
            <span className="tracking-card__blue">main</span>(
            <span className="tracking-card__red">string</span>[]{" "}
            <span className="tracking-card__yellow">args</span>) {"{\n"}{" "}
            <span className="tracking-card__blue">printf</span>(
            <span className="tracking-card__purple">"hello world!"</span>);
            {"\n}"}
          </pre>
        </div>
        <div className="intro-section__text-container">
          <span>상상하지 못했던,</span>
          <span>새롭고 즐거운 경험은 아니였을까요?</span>
          <span>우리는 즐거운 경험을 만들어 갑니다.</span>
        </div>
      </div>
    </section>
  );
}

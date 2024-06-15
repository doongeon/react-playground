import "./Intro.css";

export default function Intro() {
  return (
    <div className="intro-section-container">
      <section className="intro-section">
        <p className="intro-section__text-container">
          <h2 className="intro-section__title">이끌림</h2>
          <span>누군가 강요하지 않아도</span>
          <span>우리는 항상 무엇인가에 이끌립니다.</span>
          <span>무엇이 우리를 끌어당겼을까요?</span>
          <span>상상하지 못했던,</span>
          <span>새롭고 즐거운 경험은 아니였을까요?</span>
          <span>우리는 즐거운 경험을 만들어 갑니다.</span>
        </p>
        <div className="intro-section__image-container">
          <img
            className="intro-section__image"
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/9987336/f9daa0dce6fe4f4fbb21b5d20267ce1e/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/6.png?token-time=1720051200&token-hash=m6_dVeaErxod3TcSBJUCtZL0knyFhFyoPzwYEIjRqlM%3D"
          />
        </div>
      </section>
    </div>
  );
}

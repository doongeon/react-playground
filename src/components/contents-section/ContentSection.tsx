import SpreadBoard from "../../common/components/spread_contents/spread_board";
import "./ContentSection.css";

export default function ContentSection() {
  return (
    <div className="content-section">
      <div className="content-section__title-container">
        <div className="content-section__title">늘 새로운 컨탠츠</div>
      </div>
      <SpreadBoard />
    </div>
  );
}

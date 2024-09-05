import SpreadBoard from "../../common/components/spread_contents/spread_board";
import "./ContentSection.css";
import useSpreadItems from "./hooks/useSpreadItems";

export default function ContentSection() {
    const spreadItems = useSpreadItems();

    return (
        <div className="content-section">
            <div className="content-section__title-container">
                <div className="content-section__title">늘 새로운 컨텐츠</div>
            </div>
            <SpreadBoard spreadItems={spreadItems} />
        </div>
    );
}

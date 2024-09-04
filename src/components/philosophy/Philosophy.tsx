import "./Philosophy.css";
import SnapScroll from "../../common/components/snap-scroll/SnapScroll";
import PhilosopyhModal from "../philosophy-modal/philosophy_modal";
import useSnapScrollItems from "./hooks/useSnapScrollItems";

export default function Philosophy() {
    const scrollItems = useSnapScrollItems();

    return (
        <>
            <section className="philosophy-section">
                <div className="philosophy-section__title-container">
                    <h2 className="philosophy-section__title">그간의 기록</h2>
                </div>
                <SnapScroll scrollItems={scrollItems} />
            </section>

            <PhilosopyhModal />
        </>
    );
}

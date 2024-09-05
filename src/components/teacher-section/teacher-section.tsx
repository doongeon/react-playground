import IconBoard from "../../common/components/icon-board/IconBoard";
import useBoardItems from "./hooks/useBoardItems";
import "./teacher-section.css";

export default function TeacherSection() {
    const boardItems = useBoardItems();
    return (
        <section className="teacher-section">
            <div className="teacher-section__title-container">
                <h2 className="teacher-section__title">special thanks to</h2>
            </div>
            <IconBoard boardItems={boardItems} />
        </section>
    );
}

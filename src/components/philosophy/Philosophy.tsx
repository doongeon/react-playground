import { IMGAES } from "../../assets/image";
import "./Philosophy.css";
import SnapScroll from "../../common/components/snap-scroll/SnapScroll";
import PhilosopyhModal from "../philosophy-modal/philosophy_modal";

export class GalleryPhoto {
    photo: string;
    title: string;
    quote: string;
    source: string;

    constructor(photo: string, title: string, quote: string, source: string) {
        this.photo = photo;
        this.title = title;
        this.quote = quote;
        this.source = source;
    }
}

const gallery: GalleryPhoto[] = IMGAES.map((image) => {
    return new GalleryPhoto(
        image,
        "망치처럼 단순하게",
        `"총은 단순해야해 망치처럼 말이지"`,
        "영화 AK-47"
    );
});

export default function Philosophy() {
    return (
        <>
            <section className="philosophy-section">
                <div className="philosophy-section__title-container">
                    <h2 className="philosophy-section__title">그간의 기록</h2>
                </div>
                <SnapScroll scrollItems={gallery} />
            </section>

            <PhilosopyhModal />
        </>
    );
}

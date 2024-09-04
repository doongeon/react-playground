import { t_snapScrollItem } from "../../../common/components/snap-scroll/SnapScroll";
import { philosopies } from "../Model/Philosophy";

export default function useSnapScrollItems(): t_snapScrollItem[] {
    return philosopies.map((philosophy) => ({
        title: philosophy.title,
        source: philosophy.source,
        img: philosophy.img,
    }));
}

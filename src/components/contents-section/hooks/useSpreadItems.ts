import { t_spreadItem } from "../../../common/components/spread_contents/spread_board";
import { contents } from "../model/contents";

export default function useSpreadItems(): t_spreadItem[] {
    return contents;
}

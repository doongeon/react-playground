import { t_iconBoardItem } from "../../../common/components/icon-board/types";
import { teachers } from "../model/teachers";

export default function useBoardItems(): t_iconBoardItem[] {
    return teachers.map((teacher) => ({
        name: teacher.name,
        avatar: teacher.img,
    }));
}

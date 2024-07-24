import { useSetRecoilState } from "recoil";
import { galleryModalOnAtom } from "../../../../utils/atom";

export default function useGalleryModalOn() {
    const setIsGalleryModalOn = useSetRecoilState(galleryModalOnAtom);

    function turnOnGalleryModalState() {
        setIsGalleryModalOn(true);
    }

    return turnOnGalleryModalState;
}

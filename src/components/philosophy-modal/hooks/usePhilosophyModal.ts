import { useEffect, useRef } from "react";
import { galleryModalOnAtom } from "../../../utils/atom";
import { useRecoilState } from "recoil";

export default function usePhilosophyModal() {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isPhilosophyModalOn, setIsPhilosophyModalOn] =
        useRecoilState(galleryModalOnAtom);

    const onClickCloseModal = () => {
        setIsPhilosophyModalOn(() => false);
    };

    const addVisuallyVisible = () => {
        modalRef.current!.classList.add("visually-visible");
    };

    const removeVisuallyVisible = () => {
        modalRef.current!.classList.remove("visually-visible");
    };

    const addFadeInAnimation = () => {
        modalRef
            .current!.querySelector(".modal")
            ?.classList.add("fade-in-animation");
    };

    const removeFadeInAnimation = () => {
        modalRef
            .current!.querySelector(".modal")
            ?.classList.remove("fade-in-animation");
    };

    useEffect(() => {
        if (!modalRef.current) return;

        if (isPhilosophyModalOn) {
            addVisuallyVisible();
            addFadeInAnimation();
            document.body.style.overflow = "hidden";
        }

        if (!isPhilosophyModalOn) {
            removeVisuallyVisible();
            removeFadeInAnimation();
            document.body.style.overflow = "";
        }
    }, [isPhilosophyModalOn]);

    return {
        modalRef,
        onClickCloseModal,
    };
}

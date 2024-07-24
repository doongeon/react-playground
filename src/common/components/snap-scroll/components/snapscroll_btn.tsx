import { forwardRef, ReactNode } from "react";

interface SnapscrollBtnProps {
    onClick: () => void;
    children?: ReactNode;
}

const SnapscrollBtn = forwardRef<HTMLButtonElement, SnapscrollBtnProps>(
    ({ onClick, children }, ref) => {
        return (
            <button ref={ref} className={`snap-scroll-btn`} onClick={onClick}>
                {children}
            </button>
        );
    }
);

export default SnapscrollBtn;

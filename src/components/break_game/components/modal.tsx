import { useRecoilValue } from "recoil";
import { gameModalMsgAtom } from "../../../utils/game_atom";

interface ModalProps {
  button: React.ReactNode;
}

export default function Modal({ button }: ModalProps) {
  const message = useRecoilValue(gameModalMsgAtom);

  return (
    <div className="game-modal">
      <div className="game-modal__msg">{message}</div>
      <div className="game-modal__btn-wrap">{button}</div>
    </div>
  );
}

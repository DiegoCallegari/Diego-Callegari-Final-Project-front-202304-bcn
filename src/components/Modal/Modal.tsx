import { useAppDispatch, useAppSelector } from "../../store";
import { hideModalActionCreatorhide } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

export interface ModalProps {
  title: string;
  text: string;
  isError: boolean;
}

const Modal = (): React.ReactElement => {
  const { title, text, isError } = useAppSelector((state) => state.ui.modal);

  const dispatch = useAppDispatch();
  const handleOnClose = () => {
    dispatch(hideModalActionCreatorhide());
  };

  return (
    <ModalStyled aria-label="feedback modal">
      <div
        className={`modal-feedback modal-feedback${
          isError ? "--error" : "--success"
        }`}
      >
        <section className="modal-feedback__describe">
          <h2 className="modal-feedback__title">{title}</h2>
          <span className="modal-feedback__text">{text}</span>
        </section>
        <Button
          className="error-close"
          accessibility="close"
          onClick={handleOnClose}
        >
          <img
            width={25}
            height={25}
            src="/icons/close.svg"
            alt="close"
            className="error-close__button-icono"
          />
        </Button>
      </div>
    </ModalStyled>
  );
};

export default Modal;

import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  title: string;
  text: string;
  isError: boolean;
}

const Modal = ({ title, text, isError }: ModalProps): React.ReactElement => {
  return (
    <ModalStyled className="modal-feedback" aria-label="feedback modal">
      <div
        className={`modal-feedback__title${
          isError ? "modal-title--error" : ""
        }`}
      ></div>
      <h2 className="modal-feedback__name">{title}</h2>
      <span className="modal-feedback__text">{text}</span>
      <Button
        className="modal-feedback__error-close"
        accessibility="close"
        onClick={() => {
          ("");
        }}
      ></Button>
    </ModalStyled>
  );
};

export default Modal;

import styled from "styled-components";

const ModalStyled = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(255 255 255 / 50%);

  .modal-feedback {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 250px;
    min-height: 100px;
    border: 1px solid ${(props) => props.theme.colors.redLight};
    border-radius: 15px;
    background-color: ${(props) => props.theme.colors.clean};
    padding: 10px;

    &__describe {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &__title {
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: ${(props) => props.theme.fontSizes.medium};
      font-weight: ${(props) => props.theme.fontWeigth.bold};
    }

    &__text {
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: ${(props) => props.theme.fontSizes.small};
      text-align: center;
    }

    &__title--error {
      background-color: red;
    }
  }

  .error-close {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 1px solid ${(props) => props.theme.colors.dark};

    &__button {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default ModalStyled;

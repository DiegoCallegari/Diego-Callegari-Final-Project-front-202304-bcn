import styled from "styled-components";

const ModalStyled = styled.section`
  width: 250px;
  min-height: 100px;
  background-color: ${(props) => props.theme.colors.clean};
  border: 1px solid ${(props) => props.theme.colors.redLight};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;

  .modal-feedback {
    &__describe {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__name {
      font-size: ${(props) => props.theme.fontSizes.medium};
    }

    &__text {
      font-size: ${(props) => props.theme.fontSizes.small};
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

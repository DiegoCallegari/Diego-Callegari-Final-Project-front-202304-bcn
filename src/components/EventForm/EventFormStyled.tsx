import styled from "styled-components";

const EventFormStyled = styled.form`
  background-color: ${(props) => props.theme.colors.clean};
  font-family: ${(props) => props.theme.fonts.primary};
  width: 270px;
  min-height: 350px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 30px;

  .add-form {
    &__label {
      font-size: ${(props) => props.theme.fontSizes.medium};
      color: ${(props) => props.theme.colors.dark};
      font-weight: ${(props) => props.theme.fontWeigth.bold};

      &:focus {
        outline: ${(props) => props.theme.colors.redLight};
        border-bottom: solid 1px ${(props) => props.theme.colors.redLight};
      }
    }

    &__when {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 10px;
      color: ${(props) => props.theme.colors.dark};
    }

    &__where {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 10px;
    }

    &__input {
      font-size: ${(props) => props.theme.fontSizes.small};
      color: ${(props) => props.theme.colors.dark};
      font-weight: ${(props) => props.theme.fontWeigth.light};
      border-bottom: 1px solid ${(props) => props.theme.colors.dark};
      padding: 5px;
      width: 240px;

      &:focus {
        outline: ${(props) => props.theme.colors.redLight};
        border-bottom: solid 1px ${(props) => props.theme.colors.redLight};
      }
    }

    &__date {
      font-size: ${(props) => props.theme.fontSizes.small};

      &:focus {
        outline: ${(props) => props.theme.colors.redLight};
        border-bottom: solid 1px ${(props) => props.theme.colors.redLight};
      }
    }

    &__description {
      margin-top: 10px;
      min-width: 240px;
      height: 100px;
      font-size: ${(props) => props.theme.fontSizes.small};
      font-family: inherit;
    }
  }

  .add-button {
    box-sizing: border-box;
    width: 100px;
    height: 40px;
    background: ${(props) => props.theme.colors.secondaryClean};
    border: 1px solid ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.dark};
    border-radius: 20px;

    :disabled {
      background-color: ${(props) => props.theme.colors.clean};
      border: 1px solid ${(props) => props.theme.colors.terciaryClean};
      color: ${(props) => props.theme.colors.terciaryClean};
    }
  }
`;

export default EventFormStyled;

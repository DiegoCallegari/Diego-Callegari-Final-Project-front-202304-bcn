import styled from "styled-components";

const CardStyled = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.clean};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);

  .card-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    justify-content: space-between;
    border-radius: 3%;
  }

  .card-describe {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 10px;
    border-radius: 0 5px 5px 0;

    &__button-control {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
  }

  .card-describe__title {
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeigth.bold};
    font-size: ${(props) => props.theme.fontSizes.high};
  }

  .card-describe__subtitle {
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeigth.regular};
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  .button-control {
    display: flex;
    flex-direction: row;
  }
`;

export default CardStyled;

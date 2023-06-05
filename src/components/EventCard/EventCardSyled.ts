import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .card-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  .card-describe {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 120px;
    min-height: 70px;
    padding: 10px;
    border-radius: 0 5px 5px 0;
    background-color: ${(props) => props.theme.colors.clean};
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
`;

export default CardStyled;

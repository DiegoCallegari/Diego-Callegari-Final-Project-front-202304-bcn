import styled from "styled-components";

const EventsListPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-width: 320px;
  gap: 25px;

  .page-title {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid ${(props) => props.theme.colors.redLight};
    background-color: ${(props) => props.theme.colors.clean};
    color: ${(props) => props.theme.colors.softDark};
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fonts.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.5px;
  }

  .linea-control {
    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    margin-right: 0;
    gap: 20px;
  }

  .linea-1 {
    border-left: 3px solid ${(props) => props.theme.colors.redLight};
    height: 400px;
    display: flex;
  }

  .linea-2 {
    border-left: 3px solid ${(props) => props.theme.colors.redLight};
    height: 400px;
    display: flex;
  }

  .linea-3 {
    border-left: 3px solid ${(props) => props.theme.colors.redLight};
    height: 400px;
    display: flex;
  }

  .linea-4 {
    border-left: 3px solid ${(props) => props.theme.colors.redLight};
    height: 400px;
    display: flex;
  }
`;

export default EventsListPageStyled;

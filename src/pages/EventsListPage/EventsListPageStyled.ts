import styled from "styled-components";

const EventsListPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 320px;
  gap: 5px;
  padding-bottom: 70px;

  .page-title {
    width: 100%;
    height: 40px;
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
`;

export default EventsListPageStyled;

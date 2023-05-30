import styled from "styled-components";

const NavigationStyled = styled.nav`
  width: 320px;
  height: 65px;
  background-color: ${(props) => props.theme.colors.dark};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px 0px 25px;
  width: 100%;
  min-width: 320px;
  position: fixed;
  bottom: 0;

  .navigation-icon {
    color: ${(props) => props.theme.colors.clean};
  }
`;

export default NavigationStyled;

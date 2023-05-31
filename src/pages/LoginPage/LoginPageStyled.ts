import styled from "styled-components";

const LoginPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .page-title {
    width: 100%;
    min-width: 320px;
    height: 30px;
    top: 90px;
    border-bottom: 1px solid ${(props) => props.theme.colors.redLight};
    background-color: ${(props) => props.theme.colors.clean};
    color: ${(props) => props.theme.colors.softDark};
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fonts.primary};
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default LoginPageStyled;

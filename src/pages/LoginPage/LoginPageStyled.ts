import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .page-title {
    min-width: 320px;
    height: 30px;
    background-color: ${(props) => props.theme.colors.clean};
    color: ${(props) => props.theme.colors.softDark};
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fonts.primary};
    position: fixed;
    top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default LoginPageStyled;

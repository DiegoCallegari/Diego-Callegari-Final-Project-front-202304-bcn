import styled from "styled-components";

const LoginFormStyled = styled.form`
  background-color: ${(props) => props.theme.colors.clean};
  font-family: ${(props) => props.theme.fonts.primary};
  width: 270px;
  height: 350px;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
  gap: 60px;

  .label-form {
    font-size: ${(props) => props.theme.fontSizes.high};
    color: ${(props) => props.theme.colors.dark};
    font-weight: ${(props) => props.theme.fontWeigth.bold};
  }

  .input-form {
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

  .login-button {
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

export default LoginFormStyled;

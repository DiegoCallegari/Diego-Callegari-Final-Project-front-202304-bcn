import styled from "styled-components";

const LoginFormStyled = styled.form`
  background-color: ${(props) => props.theme.colors.clean};
  width: 270px;
  height: 400px;
  border-radius: 5% 5% 0% 0%;
  position: fixed;
  bottom: 65px;
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  gap: 60px;

  .control-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .label-form {
    font-size: ${(props) => props.theme.fontSizes.high};
    color: ${(props) => props.theme.colors.dark};
    font-weight: ${(props) => props.theme.fontWeigth.bold};
  }

  .input-form {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.redLight};
    font-weight: ${(props) => props.theme.fontWeigth.light};
    border-bottom: 1px solid ${(props) => props.theme.colors.dark};
    padding: 5px;
  }

  .login-button {
    box-sizing: border-box;
    width: 100px;
    height: 40px;
    background: ${(props) => props.theme.colors.secondaryClean};
    border: 1px solid ${(props) => props.theme.colors.softDark};
    color: ${(props) => props.theme.colors.softDark};
    border-radius: 20px;
  }

  .control-button {
    display: flex;
    justify-content: center;
  }
`;

export default LoginFormStyled;

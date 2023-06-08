import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 30px;
  color: ${(props) => props.theme.colors.red};
`;

export default NotFoundPageStyled;

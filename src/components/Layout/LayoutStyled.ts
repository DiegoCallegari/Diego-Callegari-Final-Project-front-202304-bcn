import styled from "styled-components";

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.secondaryClean};
`;

export default LayoutStyled;

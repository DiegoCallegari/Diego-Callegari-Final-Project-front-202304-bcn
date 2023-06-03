import styled from "styled-components";

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondaryClean};
  min-height: 100vh;
  max-width: 100%;
  font-family: ${(props) => props.theme.fonts.primary};
`;

export default LayoutStyled;

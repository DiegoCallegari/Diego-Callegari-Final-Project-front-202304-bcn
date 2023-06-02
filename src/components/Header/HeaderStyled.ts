import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.colors.dark};
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  top: 0;
  min-width: 320px;
  width: 100%;

  .header-title {
    color: ${(props) => props.theme.colors.clean};
    font-size: ${(props) => props.theme.fontSizes.super};
    font-family: ${(props) => props.theme.fonts.secondary};
  }
`;

export default HeaderStyled;

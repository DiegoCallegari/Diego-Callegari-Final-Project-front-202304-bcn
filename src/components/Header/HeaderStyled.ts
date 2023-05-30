import styled from "styled-components";

const HeaderStyled = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  width: 100%;
  min-width: 320px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;

  .header-title {
    color: ${(props) => props.theme.colors.clean};
    font-size: ${(props) => props.theme.fontSizes.super};
    font-family: ${(props) => props.theme.fonts.secondary};
  }
`;

export default HeaderStyled;

import styled from "styled-components";

const ModalStyled = styled.section`
  width: 250px;
  min-height: 100px;
  background-color: ${(props) => props.theme.colors.clean};
  border: 1px solid ${(props) => props.theme.colors.redLight};
  border-radius: 20px;
`;

export default ModalStyled;

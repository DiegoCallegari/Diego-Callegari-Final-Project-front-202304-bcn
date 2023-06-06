import styled from "styled-components";

const LoaderStyled = styled.div`
  .custom-loader {
    width: 50px;
    height: 50px;
    display: grid;
    border-radius: 50%;
    mask: radial-gradient(farthest-side, #0000 40%, #000 41%);
    background: linear-gradient(0deg, #131e1c80 50%, #131e1cff 0) center/4px
        100%,
      linear-gradient(90deg, #131e1c40 50%, #131e1cbf 0) center/100% 4px;
    background-repeat: no-repeat;
    animation: s3 1s infinite steps(12);
  }
  .custom-loader::before,
  .custom-loader::after {
    content: "";
    grid-area: 1/1;
    border-radius: 50%;
    background: inherit;
    opacity: 0.915;
    transform: rotate(30deg);
  }
  .custom-loader::after {
    opacity: 0.83;
    transform: rotate(60deg);
  }

  @keyframes s3 {
    100% {
      transform: rotate(1turn);
    }
  }
`;

export default LoaderStyled;

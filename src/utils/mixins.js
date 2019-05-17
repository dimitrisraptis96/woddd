import { css, keyframes } from "styled-components";

const jelly = keyframes`
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
`;

export const jellyMixin = css`
  cursor: pointer;
  animation: ${jelly} 0.5s;
`;

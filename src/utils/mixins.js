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

export const spacingVerticalMixin = css`
  && > * {
    margin-bottom: 1rem;
    margin-bottom: ${props => props.spacing}rem;
  }
  && > *:last-child {
    margin-bottom: 0;
  }
`;

export const spacingHorizontalMixin = css`
  > * {
    margin-right: 1rem;
    margin-right: ${props => props.spacing}rem;
  }
  > *:last-child {
    margin-right: 0;
  }
`;

export const oneLineText = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

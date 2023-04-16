import { css } from "@emotion/react";

export const enter = ({ ready }) => css`
  position: relative;
  left: ${ready ? '0px' : '64px'};
  opacity: ${ready ? 1 : 0};
  transition: left 0.6s, opacity 1s;
`

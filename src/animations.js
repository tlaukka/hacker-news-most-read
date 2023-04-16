import { css, keyframes } from "@emotion/react";

const fadeInFrames = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

export const enter = ({ ready }) => css`
  position: relative;
  left: ${ready ? '0px' : '64px'};
  opacity: ${ready ? 1 : 0};
  transition: left 0.6s, opacity 1s;
`

export const fadeIn = css`
  animation: ${fadeInFrames} 1s;
`

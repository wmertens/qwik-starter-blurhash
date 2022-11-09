import { globalStyle, style } from '@vanilla-extract/css';
import { styled, css } from 'qwik-styled-ve';

export const loading = style(css`
  opacity: 0 !important;
`);

export const Wrapper = styled.div(css`
  width: 100%;
  // Starts a new stacking context
  contain: strict;
  // For IE11
  z-index:0 ;
  position: relative;
  overflow: hidden;
  aspect-ratio: var(--ratio, 3/2);
  background-color: var(--avg);
`);

globalStyle(
  `${Wrapper.className} canvas`,
  css`
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
  `
);

globalStyle(
  `${Wrapper.className} img`,
  css`
    z-index: -1;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 1;
    will-change: opacity;
    // 2s to show the effect
    transition: opacity 2s;
  `
);

export const Canvas = styled.canvas(
  css`
    width: 100%;
    aspect-ratio: var(--ratio, 3/2);
  `
);

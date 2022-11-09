import { globalStyle, style } from '@vanilla-extract/css';
import { styled, css } from 'qwik-styled-ve';

export const loading = style(css`
  opacity: 0 !important;
`);

export const Wrapper = styled.div(css`
  width: 100%;
  position: relative;
  overflow: hidden;
  aspect-ratio: var(--ratio, 3/2);
  background-color: var(--avg);
`);

globalStyle(
  `${Wrapper.className} img`,
  css`
    z-index: 0;
    position: relative;
    width: 100%;
    opacity: 1;
    transition: opacity 2s;
  `
);
globalStyle(
  `${Wrapper.className} canvas`,
  css`
    z-index: 0;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  `
);

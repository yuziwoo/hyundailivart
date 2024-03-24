import { keyframes } from 'styled-components';

const color = {
  BLACK: '#000',
  WHITE: '#fff',
  LOGO_GREEN: '#3E8B75',
  LOGO_BROWN: '#C68C35',
  GRAY2: '#EFEFEF',
  GRAY3: '#D3D3D3',
  GRAY5: '#B9B9B9',
  GRAY7: '#8D8D8D',

  BACKGROUND: '#1D1D1D',
  BASIC: '#FFF',

  BG_GREEN: '#87B06D',
  BG_FOOTER: '#333333',
};

const gradient = {};

const zIndex = {
  HEADER: 2000,
  FOOTER: 3000,
  MODAL: 5000,
};

const animation = {
  comeRight: keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }`,
  fallRight: keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }`,

  fadeIn: keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`,
  fadeUp: keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }`,
};

const lineHeight = {
  BASIC: 1.2,

  NONE: 1,
};

const size = {};

const font = {
  FAMILY_DEFAULT: `'Inter', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'sans-serif'`,
  SIZE_DEFAULT: `15px`,
};

const padding = {};

const transition = {
  EASE_IN: 'cubic-bezier(0.16, 0.84, 0.44, 1)',
  EASE_OUT: 'cubic-bezier(0.23, 0.98, 0.32, 1)',
  EASE_INOUT: 'cubic-bezier(0.75, 0, 0.15, 1)',
};

export const theme = {
  color,
  gradient,
  zIndex,
  animation,
  lineHeight,
  font,
  size,
  padding,
  transition,
} as const;

export type Theme = typeof theme;

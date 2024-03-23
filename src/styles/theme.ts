const color = {
  BLACK: '#000',
  WHITE: '#fff',
};

const gradient = {};

const zIndex = {
  HEADER: 2000,
  FOOTER: 3000,
  MODAL: 5000,
};

const animation = {};

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

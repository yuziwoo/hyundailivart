import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const Component = styled.div`
  width: 100%;
`;

const animationPath1 = keyframes`
from {
  fill: ${theme.color.WHITE};
}
10% {
  fill: ${theme.color.WHITE};
}
20% {
  fill: ${theme.color.LOGO_GREEN};
}
30% {
  fill: ${theme.color.WHITE};
}
to {
  fill: ${theme.color.WHITE};
}`;

const animationPath2 = keyframes`
from {
  fill: ${theme.color.WHITE};
}
15% {
  fill: ${theme.color.WHITE};
}
25% {
  fill: ${theme.color.LOGO_GREEN};
}
35% {
  fill: ${theme.color.WHITE};
}
to {
  fill: ${theme.color.WHITE};
}`;

const animationPath3 = keyframes`
from {
  fill: ${theme.color.WHITE};
}
20% {
  fill: ${theme.color.WHITE};
}
30% {
  fill: ${theme.color.LOGO_GREEN};
}
50% {
  fill: ${theme.color.LOGO_GREEN};
}
60% {
  fill: ${theme.color.WHITE};
}
to {
  fill: ${theme.color.WHITE};
}`;

const animationPath4 = keyframes`
from {
  fill: ${theme.color.WHITE};
}
20% {
  fill: ${theme.color.WHITE};
}
30% {
  fill: ${theme.color.LOGO_BROWN};
}
50% {
  fill: ${theme.color.LOGO_BROWN};
}
60% {
  fill: ${theme.color.WHITE};
}
to {
  fill: ${theme.color.WHITE};
}`;

const animationPath5 = keyframes`
from {
  fill: ${theme.color.WHITE};
}
15% {
  fill: ${theme.color.WHITE};
}
25% {
  fill: ${theme.color.LOGO_BROWN};
}
35% {
  fill: ${theme.color.WHITE};
}
to {
  fill: ${theme.color.WHITE};
}`;

const animationPath6 = keyframes`
from {
  fill: ${theme.color.WHITE};
}
10% {
  fill: ${theme.color.WHITE};
}
20% {
  fill: ${theme.color.LOGO_BROWN};
}
30% {
  fill: ${theme.color.WHITE};
}
to {
  fill: ${theme.color.WHITE};
}`;


const Svg = styled.svg`
  width: 100%;

  & path {
    fill: ${theme.color.WHITE};
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  & path:nth-child(1) {
    animation-name: ${animationPath1};
  }
  & path:nth-child(2) {
    animation-name: ${animationPath2};
  }
  & path:nth-child(3) {
    animation-name: ${animationPath3};
  }
  & path:nth-child(4) {
    animation-name: ${animationPath4};
  }
  & path:nth-child(5) {
    animation-name: ${animationPath5};
  }
  & path:nth-child(6) {
    animation-name: ${animationPath6};
  }
`;

export const ComponentStyle = {
  Component,
  Svg,
};

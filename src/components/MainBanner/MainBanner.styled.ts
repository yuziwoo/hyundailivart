import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Component = styled.div`
  position: relative;

  & .swiper {
    width: 100%;
    padding-left: 14.5833%;
    padding-bottom: 66px;
    user-select: none;
  }

  & .swiper .swiper-pagination {
    top: auto;
    bottom: 0;
    z-index: 1;
    cursor: default;
  }

  & .swiper .swiper-pagination span {
    font-size: 16px;
    font-weight: 500;
    line-height: 36px;
  }

  & .swiper .swiper-button-prev,
  & .swiper .swiper-button-next {
    top: auto;
    bottom: 0;
    height: 36px;
    z-index: 10;
  }

  & .swiper .swiper-button-prev {
    left: 50%;
    right: auto;
    transform: translateX(-60px);
  }

  & .swiper .swiper-button-next {
    left: auto;
    right: 50%;
    transform: translateX(60px);
  }

  & .swiper .swiper-button-prev::after,
  & .swiper .swiper-button-next::after {
    color: white;
    font-size: 16px;
  }

  @media screen and (max-width: 1080px) {
    & .swiper {
      padding-left: 0;
      padding-bottom: 52px;
    }

    & .swiper .swiper-pagination span {
      font-size: 14px;
      line-height: 24px;
    }

    & .swiper .swiper-button-prev,
    & .swiper .swiper-button-next {
      height: 24px;
    }

    & .swiper .swiper-button-prev::after,
    & .swiper .swiper-button-next::after {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 720px) {
    & .swiper {
      padding-left: 0;
      padding-bottom: 36px;
    }

    & .swiper .swiper-pagination span {
      font-size: 12px;
      line-height: 20px;
    }

    & .swiper .swiper-button-prev,
    & .swiper .swiper-button-next {
      height: 20px;
    }

    & .swiper .swiper-button-prev::after,
    & .swiper .swiper-button-next::after {
      font-size: 12px;
    }
  }
`;

const Slide = styled.div`
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 6.6%;
`;

const Title = styled.h1<{ $color: string }>`
  text-align: center;
  font-size: 34px;
  font-weight: 600;
  color: ${({ $color }) => $color};
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.85s ${theme.transition.EASE_OUT};

  .swiper-slide-active &,
  .swiper-slide-prev & {
    opacity: 1;
    transform: translateY(0);
  }

  @media screen and (min-width: 730px) {
    .swiper-slide-next & {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 1480px) {
    font-size: 28px;
  }

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }

  @media screen and (max-width: 340px) {
    font-size: 20px;
  }
`;

const Description = styled.p<{ $color: string }>`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: ${({ $color }) => $color};
  padding-top: 10px;
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.85s 0.2s ${theme.transition.EASE_OUT};

  .swiper-slide-active &,
  .swiper-slide-prev & {
    opacity: 1;
    transform: translateY(0);
  }

  @media screen and (min-width: 730px) {
    .swiper-slide-next & {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 1480px) {
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
    padding-top: 7px;
  }
`;

export const ComponentStyle = {
  Component,
  Slide,
  Text,
  Title,
  Description,
};

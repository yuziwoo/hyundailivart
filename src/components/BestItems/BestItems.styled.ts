import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Component = styled.div``;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  line-height: 1;
  text-align: center;

  @media screen and (max-width: 500px) {
    text-align: left;
    padding: 0 10px;
    font-size: 36px;
  }
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;

  @media screen and (max-width: 500px) {
    justify-content: flex-start;
    padding: 20px 10px 0;
  }
`;

const CategoryNameWrap = styled.div`
  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }
`;

const CategoryName = styled.p<{ $isActive: boolean }>`
  font-size: 15px;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  padding-bottom: 13px;
  cursor: pointer;
  transition: opacity 0.3s ${theme.transition.EASE_OUT};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.7)};
  color: ${theme.color.WHITE};

  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: ${theme.color.BASIC};
    content: '';
    transition: transform 0.3s ${theme.transition.EASE_OUT};
    animation-name: ${({ $isActive }) =>
      $isActive ? theme.animation.comeRight : theme.animation.fallRight};
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: ${theme.transition.EASE_OUT};
  }

  @media screen and (max-width: 500px) {
    font-size: 13px;
    padding-bottom: 8px;
    margin-right: 12px;

    &::after {
      height: 1px;
    }
  }
`;

const ProductsWrap = styled.div`
  padding: 60px 5px 0;
  width: 100%;
  max-width: 1370px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    padding: 24px 5px 0;
  }
`;

const Product = styled.div`
  width: calc(20% - 10px);
  margin: 0 5px;
  opacity: 0;

  @media screen and (max-width: 1240px) {
    width: calc(25% - 10px);
  }
  @media screen and (max-width: 1000px) {
    width: calc(33.33% - 10px);
  }
  @media screen and (max-width: 860px) {
    width: calc(50% - 10px);
  }

  animation: ${theme.animation.fadeUp} 0.6s 1 forwards ${theme.transition.EASE_INOUT};

  &:nth-child(2n) {
    animation-delay: 0.1s;
  }
`;

const IncreaseButtonWrap = styled.div`
  width: calc(100% - 40px);
  max-width: 600px;
  margin: 10px auto;
`;

const IncreaseButton = styled.div`
  width: 100%;
  background: ${theme.color.WHITE};
  padding: 16px 0;
  border-radius: 5px;

  @media screen and (max-width: 500px) {
    padding: 14px 0;
  }
`;

const IncreaseButtonText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${theme.color.BLACK};

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const ComponentStyle = {
  Component,
  Title,
  Category,
  CategoryNameWrap,
  CategoryName,
  ProductsWrap,
  Product,
  IncreaseButton,
  IncreaseButtonText,
  IncreaseButtonWrap,
};

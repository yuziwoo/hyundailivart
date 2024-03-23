import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Component = styled.div``;

const Title = styled.h1`
  width: 100%;
  max-width: 1370px;
  margin: auto;
  position: relative;
  font-size: 42px;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    text-align: left;
    padding: 0 10px;
    font-size: 36px;
  }
`;

const PlusButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.color.WHITE};
  width: 50px;
  height: 50px;
  cursor: pointer;

  &::before,
  &::after {
    display: block;
    content: '';
    background: ${theme.color.WHITE};
    width: 1px;
    height: 1px;
    position: absolute;
  }

  &::before {
    width: 18px;
  }

  &::after {
    height: 18px;
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

const CategoryName = styled.p<{ $isActive: boolean }>`
  font-size: 15px;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  padding-bottom: 13px;
  margin-right: 16px;
  cursor: pointer;
  transition: opacity 0.3s ${theme.transition.EASE_OUT};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.7)};

  &:last-child {
    margin-right: 0;
  }

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
  width: calc(25% - 10px);
  margin: 0 5px;
  opacity: 0;

  @media screen and (max-width: 1240px) {
    width: calc(33.33% - 10px);
  }
  @media screen and (max-width: 1000px) {
    width: calc(50% - 10px);
  }
  @media screen and (max-width: 860px) {
    width: calc(50% - 10px);
  }

  animation: ${theme.animation.fadeUp} 0.6s 1 forwards ${theme.transition.EASE_INOUT};

  &:nth-child(2n) {
    animation-delay: 0.1s;
  }
`;

export const ComponentStyle = {
  Component,
  Title,
  PlusButton,
  Category,
  CategoryName,
  ProductsWrap,
  Product,
};

import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Component = styled.div`
  width: 100%;
  max-width: 1380px;
  padding: 0 10px;
  margin: auto;

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;

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
    justify-content: flex-start;
    text-align: left;
    padding: 0 10px;
    font-size: 28px;
  }

  @media screen and (max-width: 340px) {
    font-size: 22px;
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

  @media screen and (max-width: 860px) {
    width: 24px;
    height: 24px;

    &::before {
      width: 12px;
    }

    &::after {
      height: 12px;
    }
  }
`;

const ConciergeWrap = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    padding-top: 25px;
  }
`;

const Thumb = styled.div`
  background-size: cover;
  background-position: center center;
  position: relative;
  padding-bottom: 100%;
`;

const Info = styled.div`
  @media screen and (max-width: 500px) {
    padding: 0 10px;
  }
`;

const Line = styled.div`
  width: 50%;
  height: 5px;
  background: ${theme.color.WHITE};
  margin: 30px 0;
  transition: transform 0.45s ${theme.transition.EASE_INOUT};
  transform-origin: left center;

  @media screen and (max-width: 500px) {
    height: 2px;
    margin: 20px 0;
  }
`;

const Concierge = styled.div`
  cursor: pointer;
  width: 30.8%;

  &:hover ${Line} {
    transform: scaleX(2);
  }

  @media screen and (max-width: 1080px) {
    width: calc(50% - 5px);
    padding-bottom: 60px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    padding-bottom: 40px;
  }
`;

const ConciergeTitle = styled.h4`
  font-size: 24px;
  font-weight: 500;
  color: ${theme.color.WHITE};
  text-align: left;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  padding-top: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: ${theme.color.GRAY2};
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

export const ComponentStyle = {
  Component,
  Title,
  PlusButton,
  ConciergeWrap,
  Concierge,
  Thumb,
  Info,
  Line,
  ConciergeTitle,
  Description,
};

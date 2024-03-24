import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Thumb = styled.div`
  background-size: cover;
  background-position: center center;
  position: relative;
  padding-bottom: 100%;
`;

const Event = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
`;

const Sale = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.color.WHITE};
  padding: 9px 12px;
  background: ${theme.color.BG_GREEN};
  display: inline-block;

  @media screen and (max-width: 500px) {
    font-size: 12px;
    padding: 6px 8px;
  }
`;

const Info = styled.div`
  padding-top: 20px;

  @media screen and (max-width: 500px) {
    padding-top: 12px;
  }
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${theme.color.WHITE};

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

const Component = styled.div`
  width: 100%;
  cursor: pointer;
  margin-bottom: 44px;
  text-align: left;

  @media screen and (max-width: 500px) {
    margin-bottom: 28px;
  }

  &:hover ${Name} {
    text-decoration: underline;
  }
`;

const Brand = styled.p`
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${theme.color.GRAY5};
  padding-top: 5px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const FinalPrice = styled.p`
  font-size: 18px;
  font-weight: 500;
  padding-top: 15px;
  color: ${theme.color.WHITE};

  @media screen and (max-width: 500px) {
    font-size: 15px;
    padding-top: 11px;
  }
`;

export const ComponentStyle = {
  Component,
  Thumb,
  Event,
  Sale,
  Info,
  Name,
  Brand,
  FinalPrice,
};

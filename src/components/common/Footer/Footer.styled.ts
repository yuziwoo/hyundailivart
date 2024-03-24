import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.footer`
  width: 100%;
  background: ${theme.color.BG_FOOTER};
  padding: 0 10px;
`;

const TopPart = styled.div`
  width: 100%;
  max-width: 1360px;
  display: flex;
  justify-content: space-between;
  margin: auto;

  @media screen and (max-width: 680px) {
    flex-direction: column-reverse;
  }
`;

const LeftPart = styled.div``;

const Pages = styled.div`
  margin: 37px 0 45px;

  @media screen and (max-width: 680px) {
    margin: 20px 0;
  }
`;

const Page = styled.p`
  padding-right: 16px;
  margin-top: 8px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  color: ${theme.color.GRAY5};
  transition: color 0.2s;
  display: inline-block;

  &:hover {
    color: ${theme.color.WHITE};
  }

  &:last-child {
    padding-right: 0;
  }

  & strong {
    font-weight: 600;
  }

  @media screen and (max-width: 680px) {
    font-size: 12px;
    padding-right: 12px;

    &:last-child {
      padding-right: 0;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #4b4b4b;
`;

const SNSAndPagesAndCall = styled.div`
  @media screen and (max-width: 860px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 10px;
  }
`;

const PagesAndSNS = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 860px) {
    flex-direction: column;
  }

  @media screen and (max-width: 680px) {
    margin-top: 20px;
  }
`;

const Pages2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
`;

const Page2 = styled.p`
  padding-right: 16px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  color: ${theme.color.GRAY7};
  transition: color 0.2s;
  margin-top: 8px;

  &:hover {
    color: ${theme.color.WHITE};
  }

  &:last-child {
    padding-right: 0;
  }

  & strong {
    font-weight: 600;
  }

  @media screen and (max-width: 680px) {
    font-size: 12px;
    padding-right: 12px;
    margin-top: 6px;

    &:last-child {
      padding-right: 0;
    }
  }
`;

const SNS = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: nowrap;

  @media screen and (max-width: 860px) {
    margin-top: 20px;
  }
`;

const SNSIcon = styled.div`
  width: 34px;
  cursor: pointer;
  margin-right: 12px;

  & img {
    width: 100%;
  }

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 680px) {
    width: 28px;
    margin-right: 8px;
  }
`;

const Call = styled.h2`
  font-size: 24px;
  color: ${theme.color.WHITE};
  font-weight: 400;
  margin-top: 30px;

  & span {
    font-size: 18px;
  }

  @media screen and (max-width: 680px) {
    font-size: 20px;
    margin-top: 20px;
  }
`;

const ContactList = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
`;

const Contacts = styled.p`
  padding-right: 16px;
  font-weight: 400;
  font-size: 14px;
  color: ${theme.color.GRAY7};
  margin-top: 8px;

  &:last-child {
    padding-right: 0;
  }

  @media screen and (max-width: 680px) {
    font-size: 12px;
    margin-top: 6px;
  }
`;

const BrandInfo = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
  max-width: 860px;
`;

const BrandInfoBlock = styled.div`
  margin-right: 20px;
  margin-top: 6px;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 680px) {
    margin-right: 12px;
  }
`;

const BrandInfoTitle = styled.strong`
  padding-right: 10px;
  font-weight: 400;
  font-size: 14px;
  color: ${theme.color.GRAY5};

  &:last-child {
    padding-right: 0;
  }

  @media screen and (max-width: 680px) {
    font-size: 12px;
    padding-right: 8px;
  }
`;

const BrandInfoDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${theme.color.GRAY7};

  @media screen and (max-width: 680px) {
    font-size: 12px;
  }
`;

const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-left: 20px;

  @media screen and (max-width: 680px) {
    flex-direction: column-reverse;
    margin-left: 0;
    align-items: flex-start;
  }
`;

const FamilySite = styled.p`
  margin: 45px 0;
  font-weight: 400;
  font-size: 14px;
  color: ${theme.color.GRAY5};
  cursor: pointer;
  transition: color 0.2s;
  text-align: right;

  &:hover {
    color: ${theme.color.WHITE};
  }

  @media screen and (max-width: 680px) {
    margin: 20px 0 0;
    font-size: 12px;
  }
`;

const Logo = styled.div`
  margin-top: 30px;
  width: 145px;

  display: flex;
  justify-content: flex-end;

  & svg {
    width: 100%;
  }

  @media screen and (max-width: 680px) {
    width: 120px;
    align-self: center;
  }
`;

const MobileQR = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: 40px;

  @media screen and (max-width: 680px) {
    display: none;
  }
`;

const QRText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${theme.color.GRAY5};
  text-align: right;
  padding-right: 10px;

  & strong {
    color: ${theme.color.WHITE};
    font-weight: 600;
  }
`;

const QRImg = styled.img`
  width: 80px;
`;

const BottomPart = styled.div`
  padding: 40px 0 45px;
  width: 100%;
  max-width: 1360px;
  margin: auto;

  @media screen and (max-width: 680px) {
    padding: 20px 0 40px;
  }
`;

const Copyright = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${theme.color.GRAY7};

  @media screen and (max-width: 680px) {
    font-size: 12px;
  }
`;

export const ComponentStyle = {
  Component,
  TopPart,
  LeftPart,
  Pages,
  Page,
  Line,
  SNSAndPagesAndCall,
  PagesAndSNS,
  Pages2,
  Page2,
  SNS,
  SNSIcon,
  Call,
  ContactList,
  Contacts,
  BrandInfo,
  BrandInfoBlock,
  BrandInfoTitle,
  BrandInfoDescription,
  RightPart,
  FamilySite,
  Logo,
  MobileQR,
  QRText,
  QRImg,
  BottomPart,
  Copyright,
};

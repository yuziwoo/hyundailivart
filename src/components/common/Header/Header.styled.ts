import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.header`
  position: fixed;
  z-index: ${theme.zIndex.HEADER};
  left: 0;
  top: 0;
  width: 100%;
  background: ${theme.color.BACKGROUND};
`;

const Main = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px 48px;
  z-index: 1;

  @media screen and (max-width: 1280px) {
    padding: 24px 24px 32px;
  }

  @media screen and (max-width: 640px) {
    padding: 16px;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Logo = styled.div`
  width: 145px;

  @media screen and (max-width: 1280px) {
    width: 120px;
  }
`;

const LogoText = styled.p`
  margin-left: 16px;
  font-size: 24px;
  font-weight: 400;
  color: ${theme.color.WHITE};

  @media screen and (max-width: 1280px) {
    font-size: 18px;
    margin-left: 8px;
  }
`;

const AdminNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const AdminNavLink = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.color.WHITE};
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 1280px) {
    font-size: 14px;
    margin-right: 12px;
  }
`;

const IconMob = styled.div`
  display: none;

  @media screen and (max-width: 1080px) {
    display: flex;
  }
`;

const ButtonHamburger = styled.div`
  width: 18px;
  height: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-left: 16px;

  & span {
    background: ${theme.color.WHITE};
    width: 100%;
    height: 1px;
  }
`;

const ButtonSearch = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 18px;
  cursor: pointer;

  @media screen and (max-width: 780px) {
    display: flex;
  }
`;

const Search = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 0;
  border-bottom: 2px solid ${theme.color.WHITE};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 1280px) {
    padding: 6px 0;
    border-bottom: 1px solid ${theme.color.WHITE};
  }

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

const Select = styled.div`
  position: relative;
`;

const SelectText = styled.div`
  padding: 10px 15px 10px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 16px;

  @media screen and (max-width: 1280px) {
    padding: 8px 12px 8px 8px;
    font-size: 13px;
  }
`;

const SelectArrow = styled.div`
  width: 16px;
  margin-left: 10px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1280px) {
    width: 14px;
    margin-left: 8px;
  }
`;

const SelectList = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 100%;
  background: ${theme.color.WHITE};
  width: 85%;
  padding: 6px 0;
  border-radius: 10px;

  @media screen and (max-width: 1280px) {
    padding: 5px 0;
    border-radius: 8px;
  }
`;

const SelectListButton = styled.div`
  padding: 8px 0;
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    padding: 7px 0;
  }
`;

const SelectListText = styled.p`
  text-align: center;
  color: ${theme.color.BLACK};
  font-size: 14px;
  font-weight: 500;

  @media screen and (max-width: 1280px) {
    font-size: 13px;
  }
`;

const SearchInput = styled.input`
  color: ${theme.color.WHITE};
  font-size: 16px;
  width: 280px;

  @media screen and (max-width: 1280px) {
    font-size: 14px;
    width: 200px;
  }
`;

const SearchIcon = styled.div`
  cursor: pointer;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1280px) {
    width: 18px;
  }
`;

export const ComponentStyle = {
  Component,
  Main,
  LogoWrap,
  Logo,
  LogoText,
  AdminNav,
  AdminNavLink,
  IconMob,
  ButtonHamburger,
  ButtonSearch,
  Search,
  Select,
  SelectText,
  SelectArrow,
  SelectList,
  SelectListButton,
  SelectListText,
  SearchInput,
  SearchIcon,
};

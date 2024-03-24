import styled from 'styled-components';

const Component = styled.div`
  width: 100%;
  padding: 24px 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1280px) {
    padding: 20px 24px 32px;
  }

  @media screen and (max-width: 640px) {
    padding: 12px 16px 24px;
    justify-content: flex-start;
  }
`;

const PageNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-wrap: nowrap;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 640px) {
    justify-content: flex-start;
  }
`;

const PageNavLink = styled.p<{ $isActive: boolean; $color: string }>`
  padding: 16px ${({ $isActive }) => ($isActive ? '22px' : '0')};
  opacity: ${({ $isActive }) => ($isActive ? '1' : '0.6')};
  transition: all 0.3s;
  margin-right: 16px;
  cursor: pointer;
  color: ${({ $color }) => $color};
  position: relative;
  font-size: 14px;
  text-wrap: nowrap;
  white-space: nowrap;

  &:last-child {
    margin-right: 0;
  }

  &::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: 2px solid ${({ $color }) => $color};
    display: block;
    opacity: ${({ $isActive }) => ($isActive ? '1' : '0')};
    transition: opacity 0.3s;
  }

  @media screen and (max-width: 1280px) {
    padding: 14px ${({ $isActive }) => ($isActive ? '18px' : '0')};
    margin-right: 12px;

    &::after {
      border-radius: 26px;
    }
  }

  @media screen and (max-width: 640px) {
    padding: 10px ${({ $isActive }) => ($isActive ? '16px' : '0')};
    margin-right: 10px;
    font-size: 12px;

    &::after {
      border-radius: 24px;
    }
  }
`;

export const ComponentStyle = {
  Component,
  PageNav,
  PageNavLink,
};

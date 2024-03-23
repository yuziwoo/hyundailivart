import styled from 'styled-components';

const Page = styled.main``;

const MainBanner = styled.section`
  width: 100%;
  padding-top: 40px;

  @media screen and (max-width: 720px) {
    padding-top: 0;
  }
`;

export const PageStyle = {
  Page,
  MainBanner,
};

import styled from 'styled-components';

const Page = styled.main``;

const MainBanner = styled.section`
  width: 100%;
  padding: 40px 0;

  @media screen and (max-width: 720px) {
    padding: 0 0 20px;
  }
`;

export const PageStyle = {
  Page,
  MainBanner,
};

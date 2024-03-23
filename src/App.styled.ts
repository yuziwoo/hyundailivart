import styled from 'styled-components';

const Page = styled.main``;

const MainBanner = styled.section`
  width: 100%;
  padding-top: 40px;

  @media screen and (max-width: 720px) {
    padding-top: 0;
  }
`;

const BestItems = styled.section`
  padding-top: 120px;

  @media screen and (max-width: 500px) {
    padding-top: 60px;
  }
`;

const RecommendedItems = styled.section`
  padding-top: 120px;

  @media screen and (max-width: 500px) {
    padding-top: 80px;
  }
`;

export const PageStyle = {
  Page,
  MainBanner,
  BestItems,
  RecommendedItems,
};

import styled from 'styled-components';

const Page = styled.main`
  padding-bottom: 120px;
`;

const MainBanner = styled.section`
  width: 100%;
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

const Concierge = styled.section`
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
  Concierge,
};

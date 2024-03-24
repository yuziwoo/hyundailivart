import { PageStyle as S } from './App.styled';
import { useMainBanner } from './hooks/mainBanner/useMainBanner';
import MainBanner from './components/MainBanner/MainBanner';
import BestItems from './components/BestItems/BestItems';
import { useBestItems } from './hooks/bestItems/useBestItems';
import { useRecommendedItems } from './hooks/recommendedItems/useRecommendedItems';
import RecommendedItems from './components/RecommendedItems/RecommendedItems';
import { useConcierge } from './hooks/concierge/useConcierge';
import Concierge from './components/Concierge/Concierge';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';

function App() {
  const { mainBannerQuery } = useMainBanner();
  const { bestItemsQuery } = useBestItems();
  const { recommendedItemsQuery } = useRecommendedItems();
  const { conciergeQuery } = useConcierge();

  return (
    <>
      <Header />
      <S.Page className="App">
        <S.MainBanner>
          <MainBanner data={mainBannerQuery.data} />
        </S.MainBanner>

        <S.BestItems>
          <BestItems itemGroups={bestItemsQuery.data} />
        </S.BestItems>

        {Array.isArray(recommendedItemsQuery.data) &&
          recommendedItemsQuery.data.map(({ sectionTitle, list }, index) => (
            <S.RecommendedItems key={index}>
              <RecommendedItems sectionTitle={sectionTitle} itemGroups={list} />
            </S.RecommendedItems>
          ))}

        <S.Concierge>
          <Concierge data={conciergeQuery.data} />
        </S.Concierge>
      </S.Page>
      <Footer />
    </>
  );
}

export default App;

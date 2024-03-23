import { PageStyle as S } from './App.styled';
import { useMainBanner } from './hooks/mainBanner/useMainBanner';
import MainBanner from './components/MainBanner/MainBanner';
import BestItems from './components/BestItems/BestItems';
import { useBestItems } from './hooks/bestItems/useBestItems';
import { useRecommendedItems } from './hooks/recommendedItems/useRecommendedItems';
import RecommendedItems from './components/RecommendedItems/RecommendedItems';

function App() {
  const { mainBannerQuery } = useMainBanner();
  const { bestItemsQuery } = useBestItems();
  const { recommendedItemsQuery } = useRecommendedItems();

  return (
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
    </S.Page>
  );
}

export default App;

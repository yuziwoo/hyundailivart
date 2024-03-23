import { PageStyle as S } from './App.styled';
import { useMainBanner } from './hooks/mainBanner/useMainBanner';
import MainBanner from './components/MainBanner/MainBanner';
import BestItems from './components/BestItems/BestItems';
import { useBestItems } from './hooks/bestItems/useBestItems';

function App() {
  const { mainBannerQuery } = useMainBanner();
  const { bestItemsQuery } = useBestItems();

  return (
    <S.Page className="App">
      <S.MainBanner>
        <MainBanner data={mainBannerQuery.data} />
      </S.MainBanner>

      <S.BestItems>
        <BestItems itemGroups={bestItemsQuery.data} />
      </S.BestItems>
    </S.Page>
  );
}

export default App;

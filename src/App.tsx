import { PageStyle as S } from './App.styled';
import { useMainBanner } from './hooks/useMainBanner';
import MainBanner from './components/MainBanner/MainBanner';

function App() {
  const { mainBannerQuery } = useMainBanner();

  return (
    <S.Page className="App">
      <S.MainBanner>
        <MainBanner data={mainBannerQuery.data} />
      </S.MainBanner>


      <S.BestItems>
        
      </S.BestItems>
    </S.Page>
  );
}

export default App;

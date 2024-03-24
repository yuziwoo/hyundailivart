import { useCallback, useState } from 'react';
import { ComponentStyle as S } from './Header.styled';
import RelatedHeaderHeight from './RelatedHeaderHeight/RelatedHeaderHeight';
import Logo from '../../Logo/Logo';
import { elementId } from '../../../constants/elementId';
import HeaderBackground from './HeaderBackground/HeaderBackground';
import IconArrowDown from '../../icon/IconArrowDown/IconArrowDown';
import IconSearch from '../../icon/IconSearch/IconSearch';
import { theme } from '../../../styles/theme';
import HeaderSubNav from './HeaderSubNav/HeaderSubNav';

const Header = () => {
  const adminNav = ['로그인', '회원가입', '마이스토어 소식', '장바구니', '고객센터'];
  const [searchCategory, setSearchCategory] = useState('통합검색');
  const [searchCategoryVisible, setSearchCategoryVisible] = useState(false);

  const handleClickSearchCategory = useCallback(() => {
    setSearchCategoryVisible((prevState) => !prevState);
  }, []);

  const handleChangeSearchCategory = useCallback((newCategory: string) => {
    setSearchCategory(newCategory);
    setSearchCategoryVisible(false);
  }, []);

  return (
    <>
      <RelatedHeaderHeight />
      <HeaderSubNav />

      <S.Component id={elementId.HEADER}>
        <S.Main>
          <S.LogoWrap>
            <S.Logo>
              <Logo />
            </S.Logo>

            <S.LogoText>세계가구</S.LogoText>
          </S.LogoWrap>

          <S.AdminNav>
            {adminNav.map((nav) => (
              <S.AdminNavLink key={nav}>{nav}</S.AdminNavLink>
            ))}
          </S.AdminNav>

          <S.Search>
            <S.Select>
              <S.SelectText onClick={handleClickSearchCategory}>
                {searchCategory}
                <S.SelectArrow>
                  <IconArrowDown />
                </S.SelectArrow>
              </S.SelectText>
              <S.SelectList $isVisible={searchCategoryVisible}>
                <S.SelectListButton
                  onClick={() => {
                    handleChangeSearchCategory('통합검색');
                  }}
                >
                  <S.SelectListText>통합검색</S.SelectListText>
                </S.SelectListButton>
                <S.SelectListButton
                  onClick={() => {
                    handleChangeSearchCategory('세계가구');
                  }}
                >
                  <S.SelectListText>세계가구</S.SelectListText>
                </S.SelectListButton>
              </S.SelectList>
            </S.Select>
            <S.SearchInput placeholder="검색어를 입력하세요" />
            <S.SearchIcon>
              <IconSearch color={theme.color.WHITE} />
            </S.SearchIcon>
          </S.Search>

          <S.IconMob>
            <S.ButtonSearch>
              <IconSearch color={theme.color.WHITE} />
            </S.ButtonSearch>
            <S.ButtonHamburger>
              <span></span>
              <span></span>
              <span></span>
            </S.ButtonHamburger>
          </S.IconMob>
        </S.Main>

        <HeaderBackground />
      </S.Component>
    </>
  );
};

export default Header;

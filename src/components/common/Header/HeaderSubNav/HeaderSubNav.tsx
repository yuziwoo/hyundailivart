import { theme } from '../../../../styles/theme';
import { ComponentStyle as S } from './HeaderSubNav.styled';
import { useCallback, useState } from 'react';

const HeaderSubNav = () => {
  const subNav = [
    {
      title: 'HOME',
    },
    {
      title: 'CONCIERGE',
    },
    {
      title: 'WORLD MAP',
    },
    {
      title: 'BUY CHANCE',
      color: '#9DADFF',
    },
    {
      title: 'BRAND',
    },
    {
      title: 'EVENT',
    },
    {
      title: 'DESIGNER',
    },
  ];

  const [activeSubNav, setActiveSubNav] = useState(0);

  const handleClickSubNav = useCallback((index: number) => {
    setActiveSubNav(index);
  }, []);

  return (
    <S.Component>
      <S.PageNav>
        {subNav.map(({ title, color = theme.color.WHITE }, index) => (
          <S.PageNavLink
            $isActive={index === activeSubNav}
            key={title}
            $color={color}
            onClick={() => {
              handleClickSubNav(index);
            }}
          >
            {title}
          </S.PageNavLink>
        ))}
      </S.PageNav>
    </S.Component>
  );
};

export default HeaderSubNav;

import {
  HeaderContainer,
  LimiterConatiner,
  Logo,
  Catalog,
  Actions,
  NavigationLink,
} from './Header.styled';
import sprite from '../../images/sprite.svg';
import { SearchBar } from './SearchBar/SearchBar';
import { Menu } from './menu/Menu';
import { useState } from 'react';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HeaderContainer>
      <LimiterConatiner>
        <Logo to={'/'}>Brand Logo</Logo>
        <Catalog to={'/catalog'} title="На стрінку Товарів">
          Каталог
        </Catalog>
        <SearchBar />
        <Actions>
          <NavigationLink to={'/favorites'} title="На сторінку Обраних">
            <svg width={24} height={24}>
              <use href={`${sprite}#favorite`} />
            </svg>
          </NavigationLink>
          <NavigationLink to={'/cart'} title="До Кошика">
            <svg width={24} height={24}>
              <use href={`${sprite}#cart`} />
            </svg>
          </NavigationLink>
          <button type="button" title="Меню" onClick={() => setShowMenu(true)}>
            <svg width={18} height={12}>
              <use href={`${sprite}#burger-menu`} />
            </svg>
          </button>
        </Actions>
        {showMenu && <Menu onClickHandle={setShowMenu} />}
      </LimiterConatiner>
    </HeaderContainer>
  );
};

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

export const Header = () => {
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
          <button type="button" title="Меню">
            <svg width={18} height={12}>
              <use href={`${sprite}#burger-menu`} />
            </svg>
          </button>
        </Actions>
      </LimiterConatiner>
    </HeaderContainer>
  );
};

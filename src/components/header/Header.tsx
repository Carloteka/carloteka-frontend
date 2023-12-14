import {
  HeaderContainer,
  LimiterConatiner,
  Logo,
  Catalog,
  Search,
  Actions,
  NavigationLink,
} from './Header.styled';
import sprite from '../../images/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <LimiterConatiner>
        <Logo to={'/'}>BrandLogo</Logo>
        <Catalog to={'/catalog'} title="На стрінку Товарів">
          Каталог
        </Catalog>
        <Search>
          <input type={'search'} placeholder="Пошук товарів" />
          <button
            type="submit"
            onClick={() => {
              return false;
            }}
          >
            <svg width={24} height={24}>
              <use href={`${sprite}#search`} />
            </svg>
          </button>
        </Search>
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

import {
  HeaderContainer,
  LimiterConatiner,
  Logo,
  Catalog,
  Actions,
  NavigationLink,
  BurgerMenuBtn,
  CartPreviewBtn,
} from './Header.styled';
import sprite from '../../images/sprite.svg';
import { SearchBar } from './SearchBar/SearchBar';
import { Menu } from './menu/Menu';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Layout';

export const Header = () => {
  const { amountInCart } = useContext(CartContext);

  const [showMenu, setShowMenu] = useState(false);
  const [inCart, setInCart] = useState<string[]>([]);

  let goodsInCart: string[] = [];

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      goodsInCart = JSON.parse(localStorage.getItem('cart') as string);
    }
    if (inCart.length === goodsInCart.length) {
      return;
    }
    setInCart(goodsInCart);
  }, [setInCart, inCart, goodsInCart]);

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
            {inCart?.length > 0 && (
              <CartPreviewBtn type="button">{amountInCart}</CartPreviewBtn>
            )}
            <svg width={24} height={24}>
              <use href={`${sprite}#cart`} />
            </svg>
          </NavigationLink>
          <BurgerMenuBtn
            type="button"
            title="Меню"
            onClick={() => setShowMenu(true)}
          >
            <svg width={18} height={12}>
              <use href={`${sprite}#burger-menu`} />
            </svg>
          </BurgerMenuBtn>
        </Actions>
        {showMenu && <Menu onClickHandle={setShowMenu} />}
      </LimiterConatiner>
    </HeaderContainer>
  );
};

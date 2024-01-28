import {
  HeaderContainer,
  LimiterConatiner,
  Logo,
  Catalog,
  Actions,
  NavigationLink,
  CartMenuBtn,
  BurgerMenuBtn,
  CartCounter,
} from './Header.styled';
import sprite from '../../images/sprite.svg';
import { SearchBar } from './SearchBar/SearchBar';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Layout';

interface HeaderProps {
  setShowMenu: (arg0: boolean) => void;
  setShowCartMenu: (arg0: boolean) => void;
}

export const Header = ({ setShowCartMenu, setShowMenu }: HeaderProps) => {
  const { amountInCart } = useContext(CartContext);

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

  function openMenu() {
    document.body.style.overflowY = 'hidden';
  }
  function openCartMenu() {
    openMenu();
    setShowCartMenu(true);
  }

  return (
    <HeaderContainer>
      <LimiterConatiner>
        <Logo to={'/'}>Brand Logo</Logo>
        <Catalog to={'/catalog'} title="На сторінку Товарів">
          Каталог
        </Catalog>
        <SearchBar />
        <Actions>
          <NavigationLink to={'/favorites'} title="На сторінку Обраних">
            <svg width={24} height={24}>
              <use href={`${sprite}#favorite`} />
            </svg>
          </NavigationLink>
          <CartMenuBtn
            onClick={() => inCart?.length > 0 && openCartMenu()}
            title={inCart?.length > 0 ? 'Меню Кошика' : 'Кошик пустий'}
          >
            <svg width={24} height={24}>
              <use href={`${sprite}#cart`} />
            </svg>
            {inCart?.length > 0 && <CartCounter>{amountInCart}</CartCounter>}
          </CartMenuBtn>

          <BurgerMenuBtn
            type="button"
            title="Меню"
            onClick={() => {
              openMenu();
              setShowMenu(true);
            }}
          >
            <svg width={18} height={12}>
              <use href={`${sprite}#burger-menu`} />
            </svg>
          </BurgerMenuBtn>
        </Actions>
      </LimiterConatiner>
    </HeaderContainer>
  );
};

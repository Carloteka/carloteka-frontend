import { Suspense, createContext, useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { MenuCart } from './header/menu/MenuCart';
import { Menu } from './header/menu/Menu';

export const CartContext = createContext({
  amountInCart: 0,
  setAmountInCart: (state) => {
    state;
  },
});

const Layout = () => {
  let cartArray = [];

  if (localStorage.getItem('cart')) {
    cartArray = JSON.parse(localStorage.getItem('cart'));
  } else {
    localStorage.setItem('cart', JSON.stringify(cartArray));
  }

  const [amountInCart, setAmountInCart] = useState(cartArray?.length);

  const value = useMemo(
    () => ({ amountInCart, setAmountInCart }),
    [amountInCart],
  );

  const [showMenu, setShowMenu] = useState(false);
  const [showCartMenu, setShowCartMenu] = useState(false);

  function onClose() {
    document.body.style.overflowY = 'auto';
    setShowMenu(false);
    setShowCartMenu(false);
  }

  return (
    <CartContext.Provider value={value}>
      <>
        <Header setShowCartMenu={setShowCartMenu} setShowMenu={setShowMenu} />
        <main>
          <Menu
            onClickHandle={onClose}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />

          <MenuCart onClickHandle={onClose} showCartMenu={showCartMenu} />

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>

        <Footer />
      </>
    </CartContext.Provider>
  );
};

export default Layout;

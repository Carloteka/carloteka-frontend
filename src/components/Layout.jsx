import { Suspense, createContext, useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

export const CartContext = createContext({
  amountInCart: 0,
  setAmountInCart: () => {},
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

  return (
    <CartContext.Provider value={value}>
      {useMemo(
        () => (
          <>
            <Header />
            <main>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </main>

            <Footer />
          </>
        ),
        [],
      )}
    </CartContext.Provider>
  );
};

export default Layout;

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default Layout;

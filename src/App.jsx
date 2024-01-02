import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<AboutUs />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

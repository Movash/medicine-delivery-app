import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { lazy } from 'react';
const ShopsPage = lazy(() => import('pages/ShopsPage/ShopsPage'));
const ShoppingCartPage = lazy(() =>
  import('pages/ShoppingCartPage/ShoppingCartPage')
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShopsPage />} />
          <Route path="shoppingCart" element={<ShoppingCartPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

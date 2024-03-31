import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/Layout/Layout';
const ShopsPage = lazy(() => import('pages/ShopsPage/ShopsPage'));
const ShoppingCartPage = lazy(() =>
  import('pages/ShoppingCartPage/ShoppingCartPage')
);
const HistoryPage = lazy(() => import('pages/HistoryPage/HistoryPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShopsPage />} />
          <Route path="shoppingCart" element={<ShoppingCartPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

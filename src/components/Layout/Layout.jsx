import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from 'components/Header/Header';
import Loader from '../Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;

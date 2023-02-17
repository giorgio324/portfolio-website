import React from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

'use client'

import SingOutBtn from '@/components/SingOutBtn';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaRegUser, FaHistory } from 'react-icons/fa';
import { TbLogout2, TbHistory } from 'react-icons/tb';
import FormProfile from './profileUser/FormProfile';

const Profile = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('Profile');

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderComponent = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className={`h-screen bg-slate-100 ${isMobileView ? 'flex flex-col mt-[90px]' : 'flex'}`}>
      {isMobileView ? (
        <>
          <div className='w-full py-3 bg-slate-50 shadow-md shadow-primary2 flex items-center justify-between px-10'>
            <Link href='' className='flex items-center gap-2 text-xl text-text-secondary3' onClick={() => renderComponent('Profile')}>
              <FaRegUser />
            </Link>
            <Link href='' className='flex items-center gap-2 text-xl text-text-secondary3' onClick={() => renderComponent('Favorites')}>
              <FaRegHeart />
            </Link>
            <Link href='' className='flex items-center gap-2 text-xl text-text-secondary3' onClick={() => renderComponent('History')}>
              <FaHistory />
            </Link>
          </div>
          <div className='flex items-center gap-2 justify-center absolute bottom-0 w-full text-secondary2 font-semibold'>
            <TbLogout2 />
            <SingOutBtn />
          </div>
        </>
      ) : (
        <div className='w-1/4 py-16 h-full left-0 bg-slate-50 shadow-md shadow-primary2 flex flex-col justify-between items-center'>
          <div className='flex flex-col gap-5 items-start mt-[90px] text-lg text-text-secondary3'>
            <Link href='' className='flex items-center gap-2' onClick={() => renderComponent('Profile')}>
              <FaRegUser />
              <p>Cuenta</p>
            </Link>
            <Link href='' className='flex items-center gap-2' onClick={() => renderComponent('Favorites')}>
              <FaRegHeart />
              <p>Me gusta</p>
            </Link>
            <Link href='' className='flex items-center gap-2' onClick={() => renderComponent('History')}>
              <TbHistory />
              <p>Historial</p>
            </Link>
          </div>
          <div className='flex items-center gap-2 justify-center text-secondary2 font-semibold'>
            <TbLogout2 />
            <SingOutBtn />
          </div>
        </div>
      )}
      <div className='flex items-center gap-2 w-3/4 pt-[90px]'>
        {selectedComponent === 'Profile' && <FormProfile />}
        {selectedComponent === 'Favorites' && <FavoritesComponent />}
        {selectedComponent === 'History' && <HistoryComponent />}
      </div>
    </div>
  );
};

const FavoritesComponent = () => {
  return <div>Componente de Favoritos</div>;
};

const HistoryComponent = () => {
  return <div>Componente de Historial</div>;
};

export default Profile;

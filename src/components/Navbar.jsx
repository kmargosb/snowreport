'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaUserCircle, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import logoPage from '../../public/logoPage.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const offset = window.scrollY;

      offset > 70 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 z-50 w-full bg-white shadow-md flex justify-between items-center px-10 py-2 transition-all duration-500 ${scrolled && 'py-1'}`}>
      <div>
        {!scrolled ? (
          <Link href="/" className='flex flex-col justify-center items-center' onClick={handleCloseMenu}>
            <Image src={logoPage} alt="Logo" width={50} height={50} />
            <p>SNOWREPORT</p>
          </Link>
        ) : (
          <Link href='/'>
            <p>SNOWREPORT</p>
          </Link>
        )}
      </div>
      <div className={`hidden md:flex gap-3 ${scrolled && 'gap-2'}`}>
        <Link href="/stations2" onClick={handleCloseMenu}>
          Estaciones
        </Link>
        <Link href="/weather" onClick={handleCloseMenu}>
          Tiempo
        </Link>
        <Link href="/blog" onClick={handleCloseMenu}>
          Blog
        </Link>
      </div>
      <div className={`hidden md:flex gap-4 ${scrolled && 'gap-2'}`}>
        <Link href='/favorites' onClick={handleCloseMenu}>
          <FaRegHeart className='size-6' />
        </Link>
        <Link href='/profile' onClick={handleCloseMenu}>
          <FaUserCircle className='size-6' />
        </Link>
      </div>
      <div className='md:hidden flex items-center'>
        {isOpen ? (
          <FaTimes className="text-xl text-gray-800 cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
          <FaBars className="text-xl text-gray-800 cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white">
          <div className="flex flex-col items-center py-4">
            <Link href="/stations" className="py-2" onClick={handleCloseMenu}>
              Estaciones
            </Link>
            <Link href="/weather" className="py-2" onClick={handleCloseMenu}>
              Tiempo
            </Link>
            <Link href="/blog" className="py-2" onClick={handleCloseMenu}>
              Blog
            </Link>
            <Link href='/favorites' className="py-2" onClick={handleCloseMenu}>
              Favoritos
            </Link>
            <Link href='/profile' className="py-2" onClick={handleCloseMenu}>
              Perfil
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

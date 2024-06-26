'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUserCircle, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { TbSnowflake } from "react-icons/tb";

const Navbar = () => {
  const pathname = usePathname();
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
    <nav className={`fixed top-0 z-50 w-full bg-white shadow-md shadow-primary2 flex gap-4 justify-between items-center px-10 py-2 transition-all  ${scrolled && 'py-1'}`}>
      <div>
        {!scrolled ? (
          <Link href="/" className='flex flex-col justify-center items-center ' onClick={handleCloseMenu}>
            <TbSnowflake className='size-[50px] text-primary hover:text-primary2 transition-all duration-800'/>
            <p className='text-text-secondary3 hover:text-primary2 transition-all duration-00'>SNOW<span className='text-primary font-bold hover:text-primary2 transition-all duration-800'>REPORT</span></p>
          </Link>
        ) : (
          <Link href='/'>
            <p className='text-primary hover:text-primary2 transition-all duration-800'>SNOWREPORT</p>
          </Link>
        )}
      </div>
      <div className={`hidden md:flex gap-3 ${scrolled && 'gap-2'} text-text-secondary3 ml-auto`}>
        <Link href="/stations" onClick={handleCloseMenu}>
          <p className={`hover:text-primary2 transition-all duration-800 ${pathname === '/stations' ? 'text-primary2' : ''}`}>Estaciones</p>
        </Link>
        <Link href="/weather" onClick={handleCloseMenu}>
          <p className={`hover:text-primary2 transition-all duration-800 ${pathname === '/weather' ? 'text-primary2' : ''}`}>Tiempo</p>
        </Link>
      </div>
      <div className={`hidden md:flex gap-4 ${scrolled && 'gap-2'}`}>
        {/* <Link href='/favorites' onClick={handleCloseMenu}>
          <FaRegHeart className='size-6 text-text-secondary3 hover:text-primary2' />
        </Link> */}
        <Link href='/profile' onClick={handleCloseMenu}>
          <FaUserCircle className='size-6 text-text-secondary3 hover:text-primary2' />
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md shadow-primary2">
          <div className="flex flex-col items-center py-4">
            <Link href="/stations" className="py-2" onClick={handleCloseMenu}>
              Estaciones
            </Link>
            <Link href="/weather" className="py-2" onClick={handleCloseMenu}>
              Tiempo
            </Link>
            {/* <Link href='/favorites' className="py-2" onClick={handleCloseMenu}>
              Favoritos
            </Link> */}
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

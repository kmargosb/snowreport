import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logoPage from '../../public/logoPage.png'
import { FaUserCircle, FaRegHeart } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-10 py-2'>
      <div>
        <Link href="/" className='flex flex-col justify-center items-center'>
          <Image src={logoPage} alt="Logo" width={50} height={50} />
          <p>SNOWREPORT</p>
        </Link>
      </div>
      <div className='flex gap-3'>
        <Link href="/stations">
          Estaciones
        </Link>
        <Link href="/weather">
          Tiempo
        </Link>
        <Link href="/blog">
          Blog
        </Link>
      </div>
      <div className='flex gap-4'>
        <Link href='/favorites'>
          <FaRegHeart className='size-6' />
        </Link>
        <Link href='/login'>
          <FaUserCircle className='size-6' />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

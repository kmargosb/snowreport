import React from 'react'
import Link from 'next/link';
import { FaRegCopyright } from "react-icons/fa";
import 
{
    SlSocialInstagram,
    SlSocialFacebook,
    SlSocialYoutube,
    SlSocialTwitter
} from "react-icons/sl";

const Footer = () => {
    return (
        <div className='flex w-full justify-center items-center flex-col py-10'>
            <div className='flex items-center gap-2 text-text-secondary3'>
                <FaRegCopyright />
                <p>SNOWREPORT.es - 2024</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='text-primary flex gap-8 px-2 py-2 max-sm:flex-col max-sm:gap-2 '>
                    <Link href='' className='hover:text-primary2 transition-all duration-800'>Contacto</Link>
                    <Link href='' className='hover:text-primary2 transition-all duration-800'>Avgiso legal</Link>
                    <Link href='' className='hover:text-primary2 transition-all duration-800'>Política de privacidad</Link>
                    <Link href='' className='hover:text-primary2 transition-all duration-800'>Política de cookies</Link>
                </div>
                <p className='text-text-secondary3'>Siguenos en nuestras redes</p>
                <div className='flex gap-8'>
                    <SlSocialInstagram className='cursor-pointer size-6 text-secondary2' />
                    <SlSocialFacebook className='cursor-pointer size-6 text-secondary2' />
                    <SlSocialYoutube className='cursor-pointer size-6 text-secondary2' />
                    <SlSocialTwitter className='cursor-pointer size-6 text-secondary2' />
                </div>
            </div>
        </div>
    )
}

export default Footer
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
        <div className='flex w-screen justify-center items-center flex-col'>
            <div className='flex items-center gap-2'>
                <FaRegCopyright />
                <p>SNOWREPORT.es - 2024</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='text-blue-700 flex gap-8'>
                    <Link href=''>Contacto</Link>
                    <Link href=''>Avgiso legal</Link>
                    <Link href=''>Política de privacidad</Link>
                    <Link href=''>Política de cookies</Link>
                </div>
                <p>Siguenos en nuestras redes</p>
                <div className='flex gap-8'>
                    <SlSocialInstagram className='cursor-pointer size-6' />
                    <SlSocialFacebook className='cursor-pointer size-6' />
                    <SlSocialYoutube className='cursor-pointer size-6' />
                    <SlSocialTwitter className='cursor-pointer size-6' />
                </div>
            </div>
        </div>
    )
}

export default Footer
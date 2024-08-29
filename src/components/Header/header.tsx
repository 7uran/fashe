"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaSnapchatGhost, FaYoutube } from "react-icons/fa";
import { items } from './NavItems';

const Header = () => {
    const pathname = usePathname();

    return (
        <header className='shadow-md'>
            <div>
                <div className='py-3 px-12 bg-[#F5F5F5] text-gray-500 flex items-center justify-between'>
                    <div className='flex items-center gap-4 text-lg'>
                        <FaFacebookF className='hover:text-main transition duration-500 cursor-pointer' />
                        <FaInstagram className='hover:text-main transition duration-500 cursor-pointer' />
                        <FaPinterestP className='hover:text-main transition duration-500 cursor-pointer' />
                        <FaSnapchatGhost className='hover:text-main transition duration-500 cursor-pointer' />
                        <FaYoutube className='hover:text-main transition duration-500 cursor-pointer' />
                    </div>
                    <div>
                        <p className='text-xs'>Free shipping for standard order over $100</p>
                    </div>
                    <div>
                        <p className='text-xs'>fashe@example.com</p>
                    </div>
                </div>
                <div className='py-6 px-12 flex items-center justify-between'>
                    <div>
                        <img src='https://preview.colorlib.com/theme/fashe/images/icons/logo.png' alt="Logo" />
                    </div>
                    <div>
                        <ul className='flex items-center gap-6 text-base'>
                            {items.map((item) => {

                                const isActive = pathname === item.path;
                                console.log(isActive);

                                return (
                                    <Link href={item.path}>
                                        <li key={item.path} className={`group cursor-pointer ${isActive ? 'text-main' : ''}`}>


                                            <p>{item.name}</p>
                                            <div className={`border-b-[1px] border-black  w-full h-1 opacity-0 group-hover:opacity-100 transition duration-500`}></div>
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='flex gap-9'>
                        <div>
                            <img src='https://preview.colorlib.com/theme/fashe/images/icons/icon-header-01.png.webp' alt="Icon 1" />
                        </div>
                        <div >
                            <img src='https://preview.colorlib.com/theme/fashe/images/icons/icon-header-02.png.webp' alt="Icon 2" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

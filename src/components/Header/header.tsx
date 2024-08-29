"use client"
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaPinterestP, FaSnapchatGhost, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { auth, db } from "../../app/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Cookies from "js-cookie";
import { items } from "../../mockdb";

const Header = () => {
    const pathname = usePathname();
    const [dropdown, setDropdown] = useState(false);

    const handleDropdownOpen = () => {
        setDropdown(!dropdown);
    };
    const isAdmin = Cookies.get('isAdmin') === 'true';
    const deleteToken = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        document.cookie = "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        window.location.href = "/login";
    };


    return (
        <header className="shadow-md">
            <div>
                <div className="py-3 px-12 bg-[#F5F5F5] text-gray-500 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-lg">
                        <FaFacebookF className="hover:text-main transition duration-500 cursor-pointer" />
                        <FaInstagram className="hover:text-main transition duration-500 cursor-pointer" />
                        <FaPinterestP className="hover:text-main transition duration-500 cursor-pointer" />
                        <FaSnapchatGhost className="hover:text-main transition duration-500 cursor-pointer" />
                        <FaYoutube className="hover:text-main transition duration-500 cursor-pointer" />
                    </div>
                    <div>
                        <p className="text-xs">Free shipping for standard order over $100</p>
                    </div>
                    <div>
                        <p className="text-xs">fashe@example.com</p>
                    </div>
                </div>
                <div className="py-6 px-12 flex items-center justify-between">
                    <div>
                        <img src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png" alt="Logo" />
                    </div>
                    <div>
                        <ul className="flex items-center gap-6 text-base">
                            {items.map((item) => (
                                (item.path === "Dashboard" && !isAdmin ? null : <li key={item.path} className={`group cursor-pointer ${pathname === item.path ? "text-main" : ""}`}>
                                    <Link href={item.path}>
                                        <p>{item.name}</p>
                                        <div className={`border-b-[1px] border-black w-full h-1 opacity-0 group-hover:opacity-100 transition duration-500`}></div>
                                    </Link>
                                </li>)
                            ))}
                        </ul>
                    </div>
                    <div className="flex gap-9">
                        <div className="relative">
                            <div className="relative inline-block text-left">
                                <div>
                                    <button onClick={handleDropdownOpen}>
                                        <img src="https://preview.colorlib.com/theme/fashe/images/icons/icon-header-01.png.webp" />
                                    </button>
                                </div>
                                {dropdown && (
                                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                        <div className="py-1" role="none">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                                            <form method="POST" action="#" role="none">
                                                <button onClick={deleteToken} type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <img src="https://preview.colorlib.com/theme/fashe/images/icons/icon-header-02.png.webp" alt="Icon 2" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

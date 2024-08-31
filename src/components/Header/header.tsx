import React, { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SocialMedias from "../SocialMedias/socialMedias";
import BasketDropdown from "../BasketDropdown/basketDropdown";
import { navItems } from "../../mockdb";

const Header = () => {
    const pathname = usePathname();
    const [dropdown, setDropdown] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const [basketItems, setBasketItems] = useState([]);

    const handleDropdownOpen = () => {
        setDropdown(!dropdown);
    };

    const toggleBasketDropdown = () => {
        if (!isBasketOpen) {
            const savedItems = JSON.parse(localStorage.getItem('cart') || '[]');
            setBasketItems(savedItems);
        }
        setIsBasketOpen(!isBasketOpen);
    };

    const closeBasketDropdown = () => {
        setIsBasketOpen(false);
    };

    const handleClickOutside = useCallback((event) => {
        const basketButton = document.querySelector('.basket-button');
        const basketDropdown = document.querySelector('.basket-dropdown');
        if (
            basketButton && !basketButton.contains(event.target) &&
            basketDropdown && !basketDropdown.contains(event.target)
        ) {
            closeBasketDropdown();
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const updateBasketItems = () => {
            if (isBasketOpen) {
                const savedItems = JSON.parse(localStorage.getItem('cart') || '[]');
                setBasketItems(savedItems);
            }
        };

        window.addEventListener('storage', updateBasketItems);

        return () => {
            window.removeEventListener('storage', updateBasketItems);
        };
    }, [isBasketOpen]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    const userEmail = Cookies.get('userEmail');


    const isAdmin = Cookies.get('isAdmin') === 'true';

    const deleteToken = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        document.cookie = "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        window.location.href = "/login";
    };

    return (
        <header className="shadow-md">
            <div className={` ${isScrolled ? "translate-y-[-43px]" : ""} transition-transform duration-150 fixed z-[50] w-full top-0`}>
                <div className="py-3 px-12 bg-[#F5F5F5] text-gray-500 hidden md:flex items-center justify-between">
                    <SocialMedias />
                    <div>
                        <p className="text-xs">Free shipping for standard order over $100</p>
                    </div>
                    <div>
                        <p className="text-xs">fashe@example.com</p>
                    </div>
                </div>
                <div className='py-6 px-12 flex items-center justify-between bg-white shadow-md'>
                    <div>
                        <Link href="/home">
                            <img src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png" alt="Logo" />
                        </Link>

                    </div>
                    <div>
                        <ul className="md:flex hidden items-center gap-6 text-base">
                            {navItems.map((item) => (
                                <li key={item.path} className={`group cursor-pointer ${pathname === item.path ? "text-main" : "text-black"}`}>
                                    <Link href={item.path}>
                                        <p>{item.name}</p>
                                        <div className={`border-b-[1px] border-black w-full h-1 opacity-0 group-hover:opacity-100 transition duration-500`}></div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex gap-9">
                        <div className="relative">
                            <div className="relative inline-block text-left">
                                <div>
                                    <button onClick={handleDropdownOpen}>
                                        <img src="https://preview.colorlib.com/theme/fashe/images/icons/icon-header-01.png" alt="Profile" />
                                    </button>
                                </div>
                                <div className={`absolute right-0 z-10 mt-2 w-[200px] origin-top-right bg-white shadow-lg rounded-md ${dropdown ? 'block' : 'hidden'}`}>
                                    <div className='p-6'>
                                        {userEmail ? (
                                            <div className='text-gray-800 text-xs mb-2 cursor-pointer'>{userEmail}</div>
                                        ) : null}
                                        <Link href="/profile">
                                            <div className='text-gray-800 text-xs mb-2 cursor-pointer'>Profile</div>
                                        </Link>
                                        <div className='text-gray-800 text-xs cursor-pointer' onClick={deleteToken}>Log Out</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative basket-button">
                            <button onClick={toggleBasketDropdown}>
                                <img src="https://preview.colorlib.com/theme/fashe/images/icons/icon-header-02.png" alt="Basket" />
                            </button>
                            {isBasketOpen && (
                                <div className="absolute right-0 z-10 mt-2 w-[338px] origin-top-right bg-white shadow-lg rounded-md basket-dropdown">
                                    <BasketDropdown isOpen={isBasketOpen} onClose={closeBasketDropdown} items={basketItems} setItems={setBasketItems} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

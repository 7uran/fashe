import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP, FaSnapchatGhost, FaYoutube } from "react-icons/fa";
const SocialMedias = () => {
    return (
        <div className="flex items-center gap-4 text-lg text-gray-500 ">
            <FaFacebookF className="hover:text-main transition duration-500 cursor-pointer" />
            <FaInstagram className="hover:text-main transition duration-500 cursor-pointer" />
            <FaPinterestP className="hover:text-main transition duration-500 cursor-pointer" />
            <FaSnapchatGhost className="hover:text-main transition duration-500 cursor-pointer" />
            <FaYoutube className="hover:text-main transition duration-500 cursor-pointer" />
        </div>
    )
}

export default SocialMedias
import React from 'react'
import { GoHeart } from "react-icons/go";
import { SocialMediaCardProps } from '../../types/types';

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ img }) => {
    return (
        <div className=' group cursor-pointer bg-black relative flex  justify-center overflow-hidden'>
            <div className=' group-hover:opacity-10 transition duration-500'>
                <img src={img} />
            </div >
            <div className='absolute flex gap-2 flex-col bottom-10 transition duration-500 text-gray-300 text-sm  w-56 translate-y-[250px] group-hover:translate-y-0'>
                <p>
                    Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                </p>
                <span className='text-xs text-gray-400'>
                    Photo by @nancyward</span>
            </div>
            <div className='absolute left-10 top-10 text-white translate-y-[-70px] group-hover:translate-y-0 duration-500 transition'>
                <p className='flex gap-2 items-center'><GoHeart /> 39
                </p>
            </div>
        </div >
    )
}
export default SocialMediaCard
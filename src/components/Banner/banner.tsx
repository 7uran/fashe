import React from 'react'
import { BannerProps } from '../../types/types'

const Banner: React.FC<BannerProps> = ({img,title}) => {
    return (
        <div className='relative flex justify-center items-center w-full h-[264px]'>
            <img className='relative h-[264px] object-cover w-full' src={img} alt='Blog Header' />
            <h1 className='uppercase absolute text-5xl z-[1] text-white font-bold'>{title}</h1>
        </div>
    )
}

export default Banner
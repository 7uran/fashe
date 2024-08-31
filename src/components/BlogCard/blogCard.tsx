import React from 'react'
import { BlogCardProps } from '../../types/types'

const BlogCard: React.FC<BlogCardProps> = ({ img, title, content }) => {
    return (
        <div className='flex flex-col gap-2  w-[370px] group '>
            <div className='w-[370px] h-[276px] overflow-hidden cursor-pointer '>
                <img className='group-hover:scale-110 transition duration-500' src={img} />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold transition cursor-pointer group hover:text-main'>{title}</h1>
                <p className='text-sm font-light flex gap-1'>
                    <span className='text-gray-400'>By</span>Nancy Ward
                    <span className='text-gray-400'>on</span>
                    July 22, 2017
                </p>
                <p className='text-sm text-gray-400'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default BlogCard
import Link from 'next/link';
import React from 'react';
import { MdArrowRightAlt } from "react-icons/md";
import { BlogPageCardProps } from '../../types/types';

const BlogPageCard: React.FC<BlogPageCardProps> = ({ img, title, date, content, slug }) => {
    return (
        <div className='w-[822px] flex flex-col gap-8'>
            <div className='group overflow-hidden relative flex items-end cursor-pointer'>
                <img className='group-hover:scale-110 transition duration-500 w-[822px]' src={img} alt={title} />
                <div className='absolute z-[1] bottom-8 uppercase bg-black text-white py-1 px-2'>
                    {date}
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl font-semibold hover:text-main transition cursor-pointer'>{title}</h1>
                <span className='text-gray-500 text-sm'>By Admin | Cooking, Food | 8 Comments</span>
                <p className='text-gray-500 text-base'>
                    {content}
                </p>
                <Link href={`/blog/${slug}`} className='flex items-center gap-2 hover:text-main transition'>
                    Continue Reading <MdArrowRightAlt />
                </Link>
            </div>
        </div>
    );
}

export default BlogPageCard;

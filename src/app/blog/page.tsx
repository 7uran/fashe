"use client"
import React, { useEffect, useState } from 'react';
import BlogPageCard from '../../components/BlogPageCard/blogPageCard';
import { BlogPageCardItems } from '../../mockdb';
import { BlogPost } from '../../types/types';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";




const BlogPage = () => {

    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        setBlogPosts(BlogPageCardItems);
    }, []);

    return (
        <div className="mt-[120px]">
            <div className='relative flex justify-center items-center w-full h-[264px]'>
                <img className='relative h-[264px] object-cover w-full' src='https://preview.colorlib.com/theme/fashe/images/heading-pages-05.jpg' alt='Blog Header' />
                <h1 className='uppercase absolute text-5xl z-[1] text-white font-bold'>blog</h1>
            </div>
            <section>
                <div className="py-10 mt-10 max-w-[1176px] mx-auto flex gap-20   ">
                    <div className='flex flex-col gap-8  w-fit'>
                        {blogPosts.map((post, index) => (
                            <BlogPageCard
                                key={index}
                                img={post.img}
                                title={post.title}
                                date={post.date}
                                content={post.content}
                                slug={post.slug}
                            />
                        ))}
                    </div>
                    <div className='w-full'>
                        <div className='flex items-center relative justify-end'>
                            <input className='outline-none text-sm border rounded-full p-4 w-full' placeholder='Search' type='text' />
                            <HiMiniMagnifyingGlass className="absolute right-3 hover:text-main transition cursor-pointer" />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default BlogPage;

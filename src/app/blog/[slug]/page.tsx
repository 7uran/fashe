import React from 'react';
import { BlogPageCardItems, FeaturedCardItems } from '../../../mockdb';
import BlogSlug from '../../../components/BlogSlug/blogSlug';
import { BlogPost } from '../../../types/types';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import FeaturedProductsCard from '../../../components/FeaturedProductsCard/featuredProductsCard';
import Tag from '../../../components/Tag/tag';



const fetchPost = (slug: string): BlogPost | undefined => {
    return BlogPageCardItems.find(post => post.slug === slug);
};

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
    const post = fetchPost(params.slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className='mt-[120px] max-w-[1176px] flex flex-wrap justify-between mx-auto py-10'>
            <div>
                <BlogSlug
                    img={post.img}
                    title={post.title}
                    date={post.date}
                    content={post.content}
                />
            </div>

            <div className=' flex w-[274px]  flex-col gap-12'>
                <div className='flex items-center relative justify-end'>
                    <input className='outline-none text-sm border rounded-full p-4 w-full' placeholder='Search' type='text' />
                    <HiMiniMagnifyingGlass className="absolute right-3 hover:text-main transition cursor-pointer" />
                </div>
                <div className='flex flex-col gap-16'>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h2 className='text-xl font-extrabold'>Categories</h2>
                        </div>
                        <div className='border-t-[1px]'>
                            {['Fashion', 'Beauty', 'Street Style', 'Life Style', 'DIY & Crafts'].map((category, index) => (
                                <p key={index} className='border-b-[1px] py-2 text-gray-500 font-light cursor-pointer hover:text-main transition'>
                                    {category}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h2 className='text-xl font-extrabold'>Featured Products</h2>
                        </div>
                        <div>
                            {FeaturedCardItems.map((item, index) => (
                                <FeaturedProductsCard
                                    key={index}
                                    img={item.img}
                                    title={item.title}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h2 className='text-xl font-extrabold'>Archive</h2>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex justify-between text-gray-400'><p className='hover:text-main transition cursor-pointer'>July 2018</p><p>(9)</p></div>
                            <div className='flex justify-between text-gray-400'><p className='hover:text-main transition cursor-pointer'>June 2018</p><p>(39)</p></div>
                            <div className='flex justify-between text-gray-400'><p className='hover:text-main transition cursor-pointer'>May 2018</p><p>(29)</p></div>
                            <div className='flex justify-between text-gray-400'><p className='hover:text-main transition cursor-pointer'>April 2018</p><p>(35)</p></div>
                            <div className='flex justify-between text-gray-400'><p className='hover:text-main transition cursor-pointer'>March 2018</p><p>(22)</p></div>
                            <div className='flex justify-between text-gray-400'><p className='hover:text-main transition cursor-pointer'>February 2018</p><p>(32)</p></div>
                            <div className='flex justify-between text-gray-400'><p className='hover:text-main transition cursor-pointer'>January 2018</p><p>(21)</p></div>
                            <div className='flex justify-between text-gray-400'><p className='hover:text-main transition cursor-pointer'>December 2017</p><p>(26)</p></div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h2 className='text-xl font-extrabold'>Tags</h2>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <Tag title="Fashion" />
                            <Tag title="Lifestyle" />
                            <Tag title="Denim" />
                            <Tag title="Streetstyle" />
                            <Tag title="Crafts" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function generateStaticParams() {
    return BlogPageCardItems.map(post => ({
        slug: post.slug,
    }));
}

export default BlogPostPage;

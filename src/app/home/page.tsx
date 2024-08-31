"use client"
import { useEffect, useState } from "react";
import ItemCard from "../../components/ItemCard/itemCard";
import CategoryCard from "../../components/CategoryCard/categoryCard";
import SaleCard from "../../components/SaleCard/saleCard";
import Slider from "../../components/Slider/slider";
import Spinner from "../../components/Spinner/spinner";
import fetchPosts from "../../services/api";
import { Post } from "../../types/types";
import urlFor from "../../services/image";
import LargeItemCard from "../../components/LargeItemCard/largeItemCard";
import LargeItemCardWithCountdown from "../../components/LargeItemCardWithCountdown/largeItemCardWithCountdown";
import BlogCard from "../../components/BlogCard/blogCard";
import { blogItems, SocialMediaItems } from "../../mockdb";
import SocialMediaCard from "../../components/SocialMediaCard/socialMediaCard";


export default function HomePage() {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const result = await fetchPosts();
                console.log("Fetched data:", result);
                setData(result);
            } catch (error) {
                console.error("Fetch error:", error.message);
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (<div className="mt-28">
        <section >
            <Slider />
        </section>
        <section className="py-10">
            <div className="flex justify-center flex-wrap gap-7">
                <div className="flex flex-col gap-7">
                    <CategoryCard isSmall={false} type="dresses" img="https://preview.colorlib.com/theme/fashe/images/banner-02.jpg" />
                    <CategoryCard isSmall={true} type="sunglasses" img="https://preview.colorlib.com/theme/fashe/images/banner-05.jpg" />
                </div>
                <div className="flex flex-col gap-7">
                    <CategoryCard isSmall={true} type="watches" img="https://preview.colorlib.com/theme/fashe/images/banner-03.jpg.webp" />
                    <CategoryCard isSmall={false} type="footerwear" img="https://preview.colorlib.com/theme/fashe/images/banner-07.jpg.webp" />
                </div>
                <div className="flex flex-col gap-7">
                    <CategoryCard isSmall={false} type="bags" img="https://preview.colorlib.com/theme/fashe/images/banner-04.jpg" />
                    <SaleCard />
                </div>
            </div>
        </section>
        <section >
            <div className="py-10 mt-10 max-w-[1176px] mx-auto">
                <div className="flex justify-center flex-col items-center gap-10">
                    <div><h1 className="text-3xl font-bold" >FEATURED PRODUCTS</h1></div>
                    <div className="flex flex-wrap w-full justify-center gap-8 ">
                        {
                            data && data.map((item, index) => (
                                <ItemCard
                                    id={index}
                                    key={index}
                                    img={urlFor(item.mainImage).url()}
                                    title={item.title}
                                    price={item.price}
                                    label={item.type}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-[#F2F2F2]">
            <div className="py-10 mt-10 max-w-[1176px] mx-auto flex justify-between flex-wrap">
                <LargeItemCard />
                <LargeItemCardWithCountdown />
            </div>
        </section>
        <section>
            <div className="py-10 mt-10 max-w-[1176px] mx-auto flex flex-col gap-10">
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold uppercase">Our Blog</h1>
                </div>
                <div className="flex justify-center md:justify-between items-center flex-wrap">
                    {
                        blogItems.map((item, index) => (
                            <BlogCard key={index}
                                img={item.img}
                                title={item.title}
                                content={item.content}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
        <section>
            <div className="py-10 mt-10">
                <div className="flex justify-center uppercase font-bold text-2xl md:text-3xl"><h1>@ follow us on Instagram</h1></div>
                <div className="flex">
                    {
                        SocialMediaItems.map((item, index) => (
                            <SocialMediaCard key={index} img={item.img} />
                        ))
                    }
                </div>
            </div>
        </section>
        <section>
            <div className="py-10 mt-10 flex">
                <div className=" flex flex-col w-full items-center  justify-center">
                    <h1 className="text-lg text-gray-600">Free Delivery Worldwide</h1>
                    <span className="text-sm hover:text-main transition cursor-pointer text-gray-400 text-"><em>Click here for more info  </em></span>
                </div>
                <div className=" flex flex-col w-full items-center border-x-[1px] h-[81px] justify-center">
                    <h1 className="text-lg text-gray-600">30 Days Return</h1>
                    <span className="text-sm  transition text-gray-400 text-"><em>Simply return it within 30 days for an exchange.</em></span>
                </div>
                <div className=" flex flex-col w-full items-center  justify-center">
                    <h1 className="text-lg text-gray-600">Store Opening</h1>
                    <span className="text-sm  transition text-gray-400 text-"><em>Shop open from Monday to Sunday</em></span>
                </div>
            </div>
        </section>
    </div>)
}

"use client"
import React, { useEffect, useState } from 'react';
import { Product } from '../../types/types';
import { IoCloseSharp } from "react-icons/io5";
import { loadStripe } from '@stripe/stripe-js';
import Banner from '../../components/Banner/banner';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '');

const FeaturePage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const storedProducts = localStorage.getItem('cart');
        const parsedProducts: Product[] = storedProducts ? JSON.parse(storedProducts) : [];
        setProducts(parsedProducts);
    }, []);

    const updateQuantity = (index: number, newQuantity: number) => {
        const updatedProducts = [...products];
        updatedProducts[index].quantity = newQuantity;
        setProducts(updatedProducts);
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
    };

    const increaseQuantity = (index: number) => {
        const updatedQuantity = products[index].quantity + 1;
        updateQuantity(index, updatedQuantity);
    };

    const decreaseQuantity = (index: number) => {
        const updatedQuantity = Math.max(products[index].quantity - 1, 0);
        updateQuantity(index, updatedQuantity);
    };

    const deleteProduct = (index: number) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
    };



    return (
        <div className='mt-[120px]'>
            <Banner img={"https://preview.colorlib.com/theme/fashe/images/heading-pages-01.jpg"} title={"cart"} />
            <div className='max-w-[1176px] mx-auto py-20 flex flex-col gap-10'>
                <div>
                    {products.length === 0 ? (
                        <p className='text-center text-xl font-semibold'>No items here</p>
                    ) : (
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-gray-300"></th>
                                    <th className="py-2 px-4 border-b border-gray-300">Product</th>
                                    <th className="py-2 px-4 border-b border-gray-300">Price</th>
                                    <th className="py-2 px-4 border-b border-gray-300">Quantity</th>
                                    <th className="py-2 px-4 border-b border-gray-300">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr className='border' key={index}>
                                        <td className="p-10 border-b border-gray-300">
                                            <div onClick={() => deleteProduct(index)} className='delete bg-black group w-fit relative flex items-center justify-center text-white text-xl'>
                                                <img src={product.img} alt={product.title} className="duration-500 group-hover:opacity-35 transition cursor-pointer h-[120px] object-cover" />
                                                <IoCloseSharp
                                                    className='absolute opacity-0 group-hover:opacity-100 duration-500 cursor-pointer'
                                                />
                                            </div>
                                        </td>
                                        <td className="p-10 border-b border-gray-300">{product.title}</td>
                                        <td className="py-2 border-b border-gray-300">${product.price.toFixed(2)}</td>
                                        <td className="py-2 border-b border-gray-300">
                                            <div className='flex items-center justify-center border rounded-sm w-fit'>
                                                <button
                                                    className="bg-gray-200 w-[48px] h-[48px] rounded-sm"
                                                    onClick={() => decreaseQuantity(index)}
                                                >
                                                    -
                                                </button>
                                                <span className="px-4">{product.quantity}</span>
                                                <button
                                                    className="bg-gray-200 w-[48px] h-[48px] rounded-sm"
                                                    onClick={() => increaseQuantity(index)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="py-2 border-b border-gray-300">${(product.price * product.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <div className='flex justify-end'>
                    <button
                        className='w-fit uppercase h-fit rounded-full text-white bottom-4 bg-black px-10 py-3 group-hover shadow-sm hover:bg-main hover:text-white transition'

                    >
                        checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FeaturePage;

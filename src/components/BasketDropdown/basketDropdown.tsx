import React, { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

const BasketDropdown = ({ isOpen, onClose, items, setItems }) => {
    if (!isOpen) return null;

    const handleDelete = (id) => {

        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);


        localStorage.setItem('cart', JSON.stringify(updatedItems));
    };

    return (
        <div className="absolute right-0 z-50 mt-2 w-[338px] bg-white shadow-lg rounded-md">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-xl text-gray-600"
            >
                &times;
            </button>
            <div className="p-6">
                {items.length === 0 ? (
                    <p className="text-center text-gray-500">No items here</p>
                ) : (
                    <div>
                        <div className="flex flex-col gap-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex items-center">
                                    <img src={item.img} alt={item.title} className="w-16 h-16 object-cover" />
                                    <div className="flex flex-col ml-4">
                                        <span className="hover:text-main transition duration-300 cursor-pointer">{item.title}</span>
                                        <span className="text-xs text-gray-400">{item.quantity} x ${item.price}.00 </span>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="ml-auto text-red-500 hover:text-red-700 transition duration-300"
                                    >
                                        <IoTrashOutline />

                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-between mt-4'>
                            <button className='w-[142px] text-sm uppercase h-fit text-nowrap rounded-full text-white bottom-4 bg-black px-6 py-3 group-hover shadow-sm hover:bg-main hover:text-white transition'>
                                View Cart
                            </button>
                            <button className='w-[142px] text-sm uppercase h-fit rounded-full text-white bottom-4 bg-black px-6 py-3 group-hover shadow-sm hover:bg-main hover:text-white transition'>
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BasketDropdown;

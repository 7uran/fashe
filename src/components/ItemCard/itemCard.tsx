import React from 'react';
import { IoHeartOutline } from "react-icons/io5";
import { ItemCardProps } from '../../types/types';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const addToCart = (item) => {
  
  
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });

  }
  localStorage.setItem('cart', JSON.stringify(cart));

 
  Swal.fire({
    title: item.title,
    text: "is added to cart !",
    icon: "success"
  });
  

};

const ItemCard: React.FC<ItemCardProps> = ({ img, title, price, label, id }) => {
  const handleAddToCart = () => {
    addToCart({ id, img, title, price });
  };

  return (
    <div className='flex flex-col gap-5'>
      <div className='w-[270px] h-[360px] relative group overflow-hidden'>
        <div className={`absolute top-4 left-4 z-[1] ${label?.toLowerCase() === "new" ? "bg-[#66A8A6]" : label?.toLowerCase() === "sale" ? "bg-main" : "hidden"} text-white text-xs px-3 py-1 rounded-full`}>
          {label}
        </div>
        <div className='absolute z-[1] right-4 top-4 text-white text-2xl opacity-0 group-hover:opacity-100 transition'>
          <IoHeartOutline />
        </div>
        <div className='bg-black'>
          <img className='group-hover:opacity-75 transition duration-300' src={img} alt={title} />
        </div>
        <div className='flex w-full justify-center bottom-5 absolute'>
          <button
            onClick={handleAddToCart}
            className='h-fit rounded-full group-hover:opacity-100 group-hover:translate-y-0 translate-y-[60px] duration-300 opacity-0 text-white bottom-4 bg-black px-8 py-2 group-hover shadow-sm hover:bg-main hover:text-white transition'>
            ADD TO CART
          </button>
        </div>
      </div>
      <div>
        <h2 className='hover:text-main transition cursor-pointer'>
          {title}
        </h2>
        <p>${price}.00</p>
      </div>
    </div>
  );
};

export default ItemCard;

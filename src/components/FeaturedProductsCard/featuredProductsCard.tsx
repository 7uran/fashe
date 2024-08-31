import React from 'react'

const FeaturedProductsCard = ({ img, title, price }) => {
    return (
        <div className='flex gap-5 py-4 '>
            <div>
                <img className='w-[90px] h-[120px]' src={img} />
            </div>
            <div className='w-36 py-2'>
                <h1 className='hover:text-main transition cursor-pointer text-sm'>{title}</h1>
                <span className='text-xs text-gray-400'>${price}.00</span>
            </div>
        </div>
    )
}

export default FeaturedProductsCard
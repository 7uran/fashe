import React from 'react'
import { CategoryCardProps } from '../../types/types';

const CategoryCard: React.FC<CategoryCardProps> = ({ img, type, isSmall }) => {
    return (
        <div className={`w-[371px] border relative group overflow-hidden ${isSmall ? "h-[339px]" : "h-[478px]"}`}>
            <img className='group-hover:scale-110 transition duration-500' src={img} alt={type} />
            <div className='w-full h-full top-0 absolute flex justify-center'>
                <button className='absolute bottom-4 bg-white w-[171px] py-2 group-hover:shadow-sm hover:bg-main hover:text-white transition opacity-90'>
                    {type.toUpperCase()}
                </button>
            </div>
        </div>
    )
}

export default CategoryCard;
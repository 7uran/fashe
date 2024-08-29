import React from 'react'

const CategoryCard = () => {
    return (
        <div className='w-[371px] h-[478px] border relative group overflow-hidden '>
            <img className='group-hover:scale-105 transition' src='https://preview.colorlib.com/theme/fashe/images/banner-02.jpg' />
            <div className=' w-full h-full top-0 absolute flex justify-center'>
                <button className='absolute bottom-4 bg-white px-12 py-2 group-hover shadow-sm hover:bg-main hover:text-white transition opacity-90'>DRESSES</button>
            </div>

        </div>
    )
}

export default CategoryCard
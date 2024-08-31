import Link from 'next/link'
import React from 'react'

const LargeItemCard = () => {
    return (
        <div className='w-[570px] h-[426px] group overflow-hidden flex items-center justify-center'>
            <div className='relative'>
                <img className='group-hover:scale-110 w-full h-[426px] object-cover transition duration-500' src='https://preview.colorlib.com/theme/fashe/images/banner-08.jpg' />
            </div>
            <div className=' absolute text-white text-center flex flex-col gap-5 '>
                <div>
                    <h2 className='text-3xl font-bold tracking-wider'>The Beauty</h2>
                    <h1 className='text-5xl font-extrabold tracking-wider'>LOOKBOOK</h1>
                </div>
                <div>
                    <Link href="#" className='hover:underline tracking-wider'>VIEW COLLECTION</Link>
                </div>

            </div>
        </div>
    )
}

export default LargeItemCard
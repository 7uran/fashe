import React from 'react'

const SaleCard = () => {
    return (
        <div className="w-[371px] border group overflow-hidden flex items-center justify-center gap-2 flex-col h-[339px] bg-[#F2F2F2]">
            <div className='text-center flex flex-col gap-3 '>
                <h1 className='text-3xl px-10'>SIGN UP & GET 20% OFF</h1>
                <p className='px-12 text-gray-400 text-base'>Be the frist to know about the latest fashion news and get exclu-sive offer</p>
            </div>
            <div className=' w-full  top-0  flex justify-center'>
                <button className=' h-fit rounded-full text-white bottom-4 bg-black px-16 py-3 group-hover shadow-sm hover:bg-main hover:text-white transition '>
                    SIGN UP
                </button>
            </div>
        </div>
    )
}

export default SaleCard
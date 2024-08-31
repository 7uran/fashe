import React from 'react'
import SocialMedias from '../SocialMedias/socialMedias'

const Footer = () => {
  return (
    <footer className='bg-[#F0F0F0] hidden md:block'>
      <div className=' px-12 mx-auto flex flex-col '>
        <div className='py-16 flex w-full justify-between'>
          <div className='flex flex-col gap-5 w-[450px]'>
            <p className='text-base font-bold'>GET IN TOUCH</p>
            <span className='text-sm text-gray-600'>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</span>
            <SocialMedias />
          </div>
          <div className='flex flex-col gap-5'>
            <p className='text-base font-bold uppercase'>Categories</p>
            <ul className=' text-sm flex flex-col gap-2 text-gray-600'>
              <li className='hover:text-main transition cursor-pointer'>Men</li>
              <li className='hover:text-main transition cursor-pointer'>Women</li>
              <li className='hover:text-main transition cursor-pointer'>Dresses</li>
              <li className='hover:text-main transition cursor-pointer'>Sunglasses</li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='text-base font-bold uppercase'>Links</p>
            <ul className=' text-sm flex flex-col gap-2 text-gray-600'>
              <li className='hover:text-main transition cursor-pointer'>Search</li>
              <li className='hover:text-main transition cursor-pointer'>About Us</li>
              <li className='hover:text-main transition cursor-pointer'>Contact Us</li>
              <li className='hover:text-main transition cursor-pointer'>Returns</li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='text-base font-bold uppercase'>Help</p>
            <ul className=' text-sm flex flex-col gap-2 text-gray-600'>
              <li className='hover:text-main transition cursor-pointer'>Track Order</li>
              <li className='hover:text-main transition cursor-pointer'>Returns</li>
              <li className='hover:text-main transition cursor-pointer'>Shipping</li>
              <li className='hover:text-main transition cursor-pointer'>FAQs</li>
            </ul>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='text-base font-bold uppercase'>Newsletter</p>
            <div>
              <input placeholder='email@example.com' className=' w-[400px] text-sm p-2 focus:border-b-main outline-none border-b-2 bg-transparent' />
            </div>
            <button className='w-fit uppercase h-fit rounded-full text-white bottom-4 bg-black px-10 py-3 group-hover shadow-sm hover:bg-main hover:text-white transition '>
              subscribe
            </button>

          </div>
        </div>
        <div className='flex items-center justify-center flex-col gap-3 py-10 '>
          <div className='flex gap-1'>
            <img src='https://preview.colorlib.com/theme/fashe/images/icons/paypal.png' />
            <img src='https://preview.colorlib.com/theme/fashe/images/icons/visa.png' />
            <img src='https://preview.colorlib.com/theme/fashe/images/icons/mastercard.png' />
            <img src='https://preview.colorlib.com/theme/fashe/images/icons/express.png' />
            <img src='https://preview.colorlib.com/theme/fashe/images/icons/discover.png' />
          </div>
          <div className='text-sm text-gray-400'>
            <p>Copyright © 2017 Colorlib. All rights reserved.</p>
          </div>
        </div>



      </div>
    </footer>
  )
}

export default Footer
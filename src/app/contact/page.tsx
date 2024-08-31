import React from 'react';

const ContactPage = () => {
    return (
        <div className='flex mt-[120px] gap-14 flex-wrap max-w-[1176px] mx-auto py-20 '>
            <div className=''>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1277.921737788894!2d49.853850796186165!3d40.37722254581139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d077c61fef3%3A0xfa4594c97092ca01!2sAF%20Business%20House!5e0!3m2!1str!2saz!4v1725142011552!5m2!1str!2saz"
                    width="100%"
                    height="500"
                    className='md:w-[550px]'
                    style={{ border: '0' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>

            </div>
            <div className=' flex flex-col gap-6 w-full md:w-[48%]'>
                <div className='text-[25px]'><h1>Send us your message</h1></div>
                <div className='flex flex-col items-start gap-5'>
                    <input placeholder='Full name' className=' border outline-none w-full px-4 py-3 placeholder-gray-500 text-sm' />
                    <input placeholder='Phone Number' className=' border outline-none w-full px-4 py-3 placeholder-gray-500 text-sm' />
                    <input placeholder='Email Address' className=' border outline-none w-full px-4 py-3 placeholder-gray-500 text-sm' />
                    <textarea placeholder='Message' className='h-32 border outline-none w-full px-4 py-3 placeholder-gray-500 text-sm' />
                    <button className='w-fit uppercase h-fit rounded-full text-white bottom-4 bg-black px-14 py-3 group-hover shadow-sm hover:bg-main hover:text-white transition '>
                        send
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;

import React from 'react'
import Banner from '../../components/Banner/banner'

const AboutPage = () => {
    return (
        <div className="mt-[120px] ">
            <Banner img={"https://preview.colorlib.com/theme/fashe/images/heading-pages-06.jpg"} title={"about"} />
            <div className='py-16 max-w-[1176px] justify-center mx-auto flex flex-row gap-8 flex-wrap '>
                <div className='overflow-hidden w-[370px] '>
                    <img className='w-[370px] hover:scale-110 transition duration-500' src='https://preview.colorlib.com/theme/fashe/images/banner-14.jpg' />
                </div>
                <div className='md:w-[65%]  flex flex-col justify-between'>
                    <h1 className='text-2xl'>Our story</h1>
                    <p className='text-[15px] text-gray-500 leading-7 '>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                    <div className='text-[15px] border-l-2 pl-4 gap-3 flex flex-col'>
                        <p className=' text-gray-500 leading-7'>
                            Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                        </p>
                        <p className='text-xs'>- Steve Job’s</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AboutPage
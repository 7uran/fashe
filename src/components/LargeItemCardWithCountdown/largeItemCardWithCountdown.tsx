import React, { useState, useEffect } from 'react';

const LargeItemCardWithCountdown = () => {
    const initialTime = 69 * 24 * 60 * 60 + 12 * 60 * 60 + 59 * 60;
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    const formatTime = (time) => {
        const days = Math.floor(time / (24 * 60 * 60));
        const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((time % (60 * 60)) / 60);
        const seconds = time % 60;

        return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = formatTime(timeLeft);

    return (
        <div className='w-[570px] h-[426px] group overflow-hidden flex justify-center items-end'>
            <div className='relative'>
                <img className='group-hover:scale-110 w-full h-[426px] object-cover transition duration-500' src='https://preview.colorlib.com/theme/fashe/images/shop-item-09.jpg' />
            </div>
            <div className='absolute text-center flex flex-col gap-5'>
                <div>
                    <p>Gafas sol Hawkers one</p>
                    <p>
                        <span className='line-through'>$29.50</span>
                        <span className='text-main'>$15.90</span>
                    </p>
                </div>
                <div className='p-4 flex gap-4'>
                    <div className='border border-[#F2F2F2] w-[58px] h-[58px] flex items-center justify-center'>
                        <div className='flex flex-col'>
                            <span>{days}</span>
                            <span className='text-gray-400'>days</span>
                        </div>
                    </div>
                    <div className='border border-[#F2F2F2] w-[58px] h-[58px] flex items-center justify-center'>
                        <div className='flex flex-col'>
                            <span>{hours}</span>
                            <span className='text-gray-400'>hrs</span>
                        </div>
                    </div>
                    <div className='border border-[#F2F2F2] w-[58px] h-[58px] flex items-center justify-center'>
                        <div className='flex flex-col'>
                            <span>{minutes}</span>
                            <span className='text-gray-400'>mins</span>
                        </div>
                    </div>
                    <div className='border border-[#F2F2F2] w-[58px] h-[58px] flex items-center justify-center'>
                        <div className='flex flex-col'>
                            <span>{seconds}</span>
                            <span className='text-gray-400'>secs</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LargeItemCardWithCountdown;

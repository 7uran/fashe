import React from 'react'

const Tag = ({ title }) => {
    return (
        <div className='rounded-full border w-fit text-sm px-3 py-1 text-gray-400 hover:border-main hover:text-main cursor-pointer transition'>
            {title}
        </div>
    )
}

export default Tag
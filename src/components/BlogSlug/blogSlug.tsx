import React from 'react'

const BlogSlug = ({ img, title, date, content }) => {
    return (
        <div className='md:w-[822px] md:px-0 px-2  flex flex-col gap-8'>
            <div className='group overflow-hidden relative flex items-end cursor-pointer'>
                <img className='group-hover:scale-110 transition duration-500 w-full md:w-[822px]' src={img} alt={title} />
                <div className='absolute z-[1] bottom-8 uppercase bg-black text-white py-1 px-2'>
                    {date}
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl font-semibold hover:text-main transition cursor-pointer'>{title}</h1>
                <span className='text-gray-500 text-sm'>By Admin | Cooking, Food | 8 Comments</span>
                <p className='text-gray-500 text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit amet tempor magna. Donec eros sem, porta eget leo et, varius eleifend mauris. Donec eu leo congue, faucibus quam eu, viverra mauris. Nulla consectetur lorem mi, at scelerisque metus hendrerit vitae. Proin vel magna vel neque porta ultricies non eget mauris. Suspendisse potenti.

                    Aliquam faucibus scelerisque placerat. Vestibulum vel libero eu nulla varius pretium eget eu magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean dictum faucibus felis, ac vestibulum risus mollis in. Phasellus neque dolor, euismod vitae auctor eget, dignissim a felis. Etiam malesuada elit a nibh aliquam, placerat ultricies nibh dictum. Nam ut egestas velit. Pellentesque viverra tincidunt tellus. Etiam cursus, ligula id vehicula cursus, turpis mauris facilisis massa, eget tincidunt est purus et odio. Nam quis luctus libero, non posuere velit. Ut eu varius diam, eu euismod elit. Donec efficitur, neque eu consectetur consectetur, dui sem consectetur felis, vitae rutrum risus urna vel arcu. Aliquam semper ullamcorper laoreet. Sed arcu lectus, fermentum imperdiet purus eu, ornare ornare libero
                </p>
            </div>
        </div>
    )
}

export default BlogSlug
import React from 'react';

const BlogCard = ({ data }) => {
  return (
    <div className='max-w-[95%] lg:max-w-[1023.75px] h-auto lg:h-[300px] flex flex-col lg:flex-row justify-between p-5 rounded-md border border-gray-400 mx-auto my-5'>
      {/* content */}
      <div className='flex flex-col justify-center gap-4'>
        <p className='text-sm text-gray-700'>{data.date}</p>
        <h1 className='text-2xl lg:text-3xl font-bold text-gray-900 leading-tight'>{data.heading}</h1>
        <p className='text-gray-600 text-base lg:text-sm leading-snug'>{data.paragraph}</p>
        <div className='flex items-center gap-2'>
          <button className='rounded-full border border-gray-400 text-gray-400 px-3 py-2 hover:bg-gray-400 hover:text-white transition-colors'>{data.button_text}</button>
          <span className='w-2 h-2 bg-gray-400 rounded-full'></span>
          <p className='text-gray-400 text-sm'>{data.time}</p>
        </div>
      </div>

      {/* image */}
      <div className='mt-4 lg:mt-0 lg:ml-4 flex-shrink-0'>
        <img src={data.image} alt="Blog" className='w-full lg:w-[250px] h-[250px] rounded-md object-cover' />
      </div>
    </div>
  );
};

export default BlogCard;

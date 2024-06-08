import React from 'react';

const Services = () => {
  return (
    <div className='bg-slate-900 min-h-screen py-12 px-4 md:px-0'>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        <div className='shadow-lg p-6 bg-white rounded'>
          <img src='istockphoto-1146517111-612x612.jpg' alt='Service 1' className='w-full h-auto rounded mb-4' />
          <h1 className='text-3xl mb-4 font-semibold text-gray-800'>Service Title 1</h1>
          <p className='font-normal text-gray-700'>Description of service 1</p>
        </div>

        <div className='shadow-lg p-6 bg-white rounded'>
          <img src='download (1).jfif' alt='Service 2' className='w-full h-auto rounded mb-4' />
          <h1 className='text-3xl mb-4 font-semibold text-gray-800'>Service Title 2</h1>
          <p className='font-normal text-gray-700'>Description of service 2</p>
        </div>

        <div className='shadow-lg p-6 bg-white rounded'>
          <img src='download.jfif' alt='Service 3' className='w-full h-auto rounded mb-4' />
          <h1 className='text-3xl mb-4 font-semibold text-gray-800'>Service Title 3</h1>
          <p className='font-normal text-gray-700'>Description of service 3</p>
        </div>
      </div>
    </div>
  );
}

export default Services;

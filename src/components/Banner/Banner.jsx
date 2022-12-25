import React from 'react';
import laptopImg from '../../images//laptop.png'

const Banner = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between items-center py-32'>
        <div className=' w-1/2 pr-8'>
          <h2 className='font-bold text-5xl mb-10'>We have best Laptop</h2>
          <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iure temporibus suscipit eos, explicabo voluptatem esse asperiores? Quibusdam repudiandae quis quaerat fugiat alias.</p>
          <button className='bg-red-400 hover:bg-red-600 px-8 py-3 text-white rounded-sm transition-all'>Learn More</button>
        </div>
        <div className='w-1/2 text-center pl-8'>
          <img src={laptopImg} alt="computer" className='inline-block w-4/5' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
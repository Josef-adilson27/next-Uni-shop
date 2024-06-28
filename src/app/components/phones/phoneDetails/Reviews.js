import React from 'react';
import Image from 'next/image';

const Reviews = () => {
    return (
        <div className='ff min-h-[300px] rounded-[15px] bg-white flex flex-col  p-4 items-center justify-between max-md:text-left'>
            <Image
            className='w-[100px]'
             width={200}
             height={200}
             alt=''
             src={'/cosmos.png'}
            />
            
            <h1 className='text-3xl max-md:text-2xl' >There are no reviews yet, be the first.</h1>
            <div className='flex flex-col justify-center text-[14px]'>
            <p>Tell others about the advantages and disadvantages of the product.</p>
            <p>Your review will help other buyers make a choice.</p>
          
            </div>
            <div className='w-full'>
             <button className=" rounded-[10px] w-[130px] h-[40px] text-buttonsPrimaryText bg-orange-400">Add review</button>
            </div>
        </div>
    );
}

export default Reviews;

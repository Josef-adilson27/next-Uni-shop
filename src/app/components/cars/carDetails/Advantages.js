import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { HiOutlineArrowRight } from "react-icons/hi";



const Advantages = () => {
    return (
        <div className="">
        <div className="mb-3 w-full ">
         <h1 className="text-[36px] font-medium max-sm:text-[26px]">Advantages of buying in Stavropol</h1>
         <div className="flex items-center gap-2 font-medium">
          <Link href={'/'}>More about the salon</Link>
          <HiOutlineArrowRight />
         </div>
        </div>
       <div className="flex gap-1 w-[1300px] font-bold max-2xl:w-full max-2xl:flex-col max-2xl:items-center justify-center py-[10px] b">       
          <div className="flex items-center gap-1 w-[650px]  h-[200px] max-2xl:w-full  max-sm:h-[180px]  ">
            <div className={`w-[50%] flex items-center justify-center rounded-2xl  h-full bg-white`}>
              <div>
                 <img
                className="w-[200px] rounded-lg"
                src="/map.jpg"
                alt=""/>
                  <p className='text-center'>32 cities of presence</p>
              </div>
            </div>
            <div className={`w-[50%] flex items-center flex-col justify-center rounded-2xl  h-full bg-white`}>
             
                 <img
                className="w-[200px] rounded-lg"
                src="/car_deal_Advantage.jpg"
                alt=""/>
                  <p className='text-center '>32 cities of presence</p>
           
            </div>
          </div>
          <div className="flex items-center gap-1 w-[650px] h-[200px] max-2xl:w-full  max-sm:h-[180px]  ">
          <div className={`w-[50%] flex items-center justify-center rounded-2xl  h-full bg-white`}>
              <div>
                 <img
                className="w-[200px] rounded-lg"
                src="/2001_Advantage.jpg"
                alt=""/>
                  <p className='text-center'>On the market since 2001</p>
              </div>
            </div>
            <div className={`w-[50%] flex items-center justify-center rounded-2xl  h-full bg-white`}>
              <div>
                 <img
                className="w-[200px] rounded-lg"
                src="/car_Advantage.jpg"
                alt=""/>
                  <p className='text-center'>32 cities of presence</p>
              </div>
            </div>
          </div>     
       </div>
      </div>
    );
}

export default Advantages;

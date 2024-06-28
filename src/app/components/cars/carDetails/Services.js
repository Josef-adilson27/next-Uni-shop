import React from "react";
import { LuKeySquare } from "react-icons/lu";
import { LiaCarSolid } from "react-icons/lia";
import { TfiWrite } from "react-icons/tfi";
import { SlCalculator } from "react-icons/sl";

const Services = () => {
  return (
    <div className=" w-[300px] max-2xl:w-[400px] max-md:w-full py-2">
      <div className="flex flex-wrap gap-5">
      <h1 className="text-2xl font-[700] max-sm:text-xl">
        Other services
      </h1>
        <div className="flex w-full group h-[100px] border hover:border-orange-400 bg-slate-100 rounded-lg ">
          <div className=" flex justify-center  items-center w-[80px] h-full ">
            <div className="p-2  rounded-md bg-white">
            <LuKeySquare  size={30} className="group-hover:text-orange-400" />
            </div>
          </div>
          <div className="flex-1 p-2 ">
            <h1 className="text-md font-semibold group-hover:text-orange-400">Rate the car</h1>
            <p className="text-[14px] ">Get a great deal on the price of your car</p>
          </div>
        </div>
        <div className="flex w-full group h-[100px] border hover:border-orange-400 bg-slate-100 rounded-lg ">
          <div className=" flex justify-center  items-center w-[80px] h-full ">
            <div className="p-2  rounded-md bg-white">
            < LiaCarSolid size={30} className="group-hover:text-orange-400" />
            </div>
          </div>
          <div className="flex-1 p-2 ">
            <h1 className="text-md font-semibold group-hover:text-orange-400">Exchange car</h1>
            <p className="text-[14px] ">Find out the benefits of trading in your car</p>
          </div>
        </div>
        <div className="flex w-full group h-[100px] border hover:border-orange-400 bg-slate-100 rounded-lg ">
          <div className=" flex justify-center  items-center w-[80px] h-full ">
            <div className="p-2  rounded-md bg-white">
            < TfiWrite size={30} className="group-hover:text-orange-400" />
            </div>
          </div>
          <div className="flex-1 p-2 ">
            <h1 className="text-md font-semibold group-hover:text-orange-400">Calculate loan</h1>
            <p className="text-[14px] ">Get a great deal on the price of your car</p>
          </div>
        </div>
         <div className="flex w-full group h-[100px] border hover:border-orange-400 bg-slate-100 rounded-lg ">
          <div className=" flex justify-center  items-center w-[80px] h-full ">
            <div className="p-2  rounded-md bg-white">
            <SlCalculator size={30} className="group-hover:text-orange-400" />
            </div>
          </div>
          <div className="flex-1 p-2 ">
            <h1 className="text-md font-semibold group-hover:text-orange-400">Rate the car</h1>
            <p className="text-[14px] ">Take advantage of unique lending conditions</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Services;

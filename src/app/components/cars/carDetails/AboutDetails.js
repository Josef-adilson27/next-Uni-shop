"use client"
import React, { useState } from "react";
import { RiMapPin2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";

const star = (
  <svg
    id="Layer_1"
    fill="orange"
    style={{ width: "15px" }}
    data-name="Layer 1"
    viewBox="0 0 122.88 117.1"
  >
    <path d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z" />
  </svg>
);

const map = (
  <svg
    style={{ width: "25px" }}
    image-rendering="optimizeQuality"
    fill-rule="evenodd"
    clip-rule="evenodd"
    viewBox="0 0 460 512.333"
  >
    <path
      fill="#37C1C3"
      fill-rule="nonzero"
      d="M31.391 195.586l76.394-29.462a217.5 217.5 0 005.76 19.753v51.065l-82.154-41.356zm82.154 95.182v174.087c0 .472.008.943.024 1.412l-87.528 44.141c-8.838 4.458-19.618.907-24.075-7.931a17.846 17.846 0 01-1.923-8.071L.002 234.503l109.403 55.085a11.415 11.415 0 004.14 1.18z"
    />
    <path
      fill="#F3AF25"
      fill-rule="nonzero"
      d="M12.932 202.706l4.108-1.584 96.505 48.589V278.9L0 221.732v-1.775c0-8.174 5.46-15.073 12.932-17.251z"
    />
    <path
      fill="#3A9AD9"
      fill-rule="nonzero"
      d="M274.673 323.074l.027 171.332c-.003 3.068.306 5.982.943 8.661a36.84 36.84 0 002.412 6.903l-128.116-27.701c-7.774-1.979-13.525-9.026-13.525-17.414V234.024a270.61 270.61 0 0019.101 27.206c10.007 12.587 21.332 24.606 33.884 35.802 11.869 10.59 25.212 20.683 39.967 30.076l-.034.052c6.394 4.101 13.563 5.902 20.64 5.67a36.183 36.183 0 0018.792-6.017 238.782 238.782 0 005.909-3.739z"
    />
    <path
      fill="#34CE74"
      fill-rule="nonzero"
      d="M381.71 173.938l53.864-20.774c9.225-3.565 19.596 1.022 23.161 10.247a17.85 17.85 0 011.208 6.457H460v230.483l-151.824-103.6a260.158 260.158 0 0034.904-40.052c17.683-25.043 31.016-53.293 38.63-82.761zm61.746 274.323l-123.233 62.147c-8.837 4.458-19.617.907-24.075-7.931a17.845 17.845 0 01-1.922-8.071l-.024-147.988 149.254 101.843z"
    />
    <path
      fill="#F3AF25"
      fill-rule="nonzero"
      d="M460 414.165v14.741c0 5.124-2.148 9.747-5.589 13.021L294.2 332.602l-.004-23.719a251.19 251.19 0 005.204-4.308L460 414.165z"
    />
    <path
      fill="#EF4147"
      d="M252.889 302.211c-2.22 1.617-5.233 1.839-7.707.253-26.672-16.967-49.094-37.359-66.695-59.496-24.294-30.477-39.612-64.285-44.845-96.825-5.328-33.015-.349-64.761 16.08-90.576 6.469-10.212 14.747-19.505 24.832-27.528C197.737 9.549 224.219-.187 250.574.003c25.403.19 50.457 9.673 72.118 29.431 7.612 6.914 14.018 14.843 19.251 23.437 17.665 29.082 21.471 66.188 13.701 103.802-12.122 58.897-51.032 114.141-102.755 145.538zm-7.326-243.505c31.334 0 56.705 25.404 56.705 56.674 0 31.334-25.403 56.706-56.705 56.706-31.334 0-56.674-25.372-56.674-56.706-.064-31.302 25.34-56.674 56.674-56.674z"
    />
  </svg>
);

const AboutDetails = ({ data }) => {

  console.log(Object.entries(data));

  const [toggle,setToggle] = useState(false);
 
  
  return (
    <div className={`w-full h-auto max-[1200px]:h-auto gap-2 flex max-[1200px]:flex-col`}>
     {/* // 1 part */}
      <div className={`w-[60%] flex flex-col justify-between ${toggle?'h-[300px]':'h-[700px]'} [transition:all_0.3s] max-[1200px]:w-full  rounded-xl bg-white`}>
        <div className={`w-full  relative overflow-hidden ${toggle?'overflow-hidden':'overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 '} h-full`}>
          <div className="w-full flex h-auto py-2  flex-col gap-2 absolute">
            {Object.entries(data)?.map(([key, value]) => (
              <div className="w-full p-2 px-7 h-auto  flex flex-col flex-wrap max-md:flex-nowrap">
                <h1 className="text-[20px] font-semibold">{key}:</h1>{
                  value.map(item=>(
                    <p className="py-1 w-[50%]">{item}</p>
                  ))
                }
              </div>            
            ))}             
          </div>      
        </div>
        <div className="flex items-center w-full h-[80px] text-[18px] px-7 gap-3 rounded-b-xl bg-slate-200">
          <div onClick={()=>setToggle(!toggle)} className=" flex gap-2">
          <button  >Expand all options</button>   
          <IoIosArrowDropdown  className={toggle=='300'?`transform rotate-0  [transition:all_0.5s]`:`transform rotate-180 [transition:all_0.5s]`} size={25}/>
          </div>
        </div>
      </div>
      {/* 2 part */}
      <div className="w-[40%] max-h-[300px]  bg-white  rounded-xl gap-1 max-[1200px]:w-full max-[1200px]:flex-row max-[768px]:flex-col flex flex-col">
        <div className="flex flex-col w-full h-full p-3 max-[1200px]:h-full  ">
          {/* ////// */}
          <div className="w-full flex justify-between max-2xl:flex-col">
            <h1 className="text-3xl mr-3">Cars for sale with for mileage</h1>

            <div className="bg-orange-100 rounded-xl  flex min-w-[190px] h-[50px] justify-center items-center max-lg:justify-around max-lg:my-3 max-2xl:w-[190px] max-2xl:my-3">
              <h1 className="text-3xl  ">4.4</h1>
              <div className="px-1">
                <span>2703 evaluation</span>
                <div className="flex gap-1">
                  {star}
                  {star}
                  {star}
                  {star}
                </div>
              </div>
            </div>
          </div>

          {/* ////// */}
          <div className="flex-1 flex">
            <ul className="flex flex-col gap-2 h-full justify-around   ">
              <li className="flex gap-3">
                <RiMapPin2Line size={20} />
                <span>Stavropol, Kulakova Ave., 26A/2</span>
              </li>
              <li className="flex gap-3">
                <IoTimeOutline size={20} />
                <span>Mon. - Sun: 09:00 - 20:00</span>
              </li>
              <li className="flex gap-3">
                <FiPhone size={20} />
                <span>8 999 222 33 11</span>
              </li>
              <li className="flex gap-3">
                <div className="flex items-end gap-2">
                  {map}
                  <p className="flex items-center">Show on the map</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutDetails;

import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";

import { skypeIcon, telegramIcon,vkIcon,whatsAppIcon } from "./Constants";



const chassiIcon = (
  <svg fill="grey" viewBox="0 0 512 512" className="w-[20px]">
    <path d="M406,180h30c24.813,0,45-20.187,45-45V45c0-24.813-20.187-45-45-45h-30c-24.813,0-45,20.187-45,45v30h-62.58 c-6.192-17.459-22.865-30-42.42-30s-36.228,12.541-42.42,30H151V45c0-24.813-20.187-45-45-45H76C51.187,0,31,20.187,31,45v90 c0,24.813,20.187,45,45,45h30c24.813,0,45-20.187,45-45v-30h62.58c4.527,12.764,14.656,22.893,27.42,27.42V242 c-24.813,0-45,20.187-45,45v30c0,24.813,20.187,45,45,45v45h-90v-30c0-24.813-20.187-45-45-45H76c-24.813,0-45,20.187-45,45v90 c0,24.813,20.187,45,45,45h30c24.813,0,45-20.187,45-45v-30h210v30c0,24.813,20.187,45,45,45h30c24.813,0,45-20.187,45-45v-90 c0-24.813-20.187-45-45-45h-30c-24.813,0-45,20.187-45,45v30h-90v-45c24.813,0,45-20.187,45-45v-30c0-24.813-20.187-45-45-45 V132.42c12.764-4.527,22.893-14.656,27.42-27.42H361v30C361,159.813,381.187,180,406,180z M391,45c0-8.271,6.729-15,15-15h30 c8.271,0,15,6.729,15,15v90c0,8.271-6.729,15-15,15h-30c-8.271,0-15-6.729-15-15V45z M121,135c0,8.271-6.729,15-15,15H76 c-8.271,0-15-6.729-15-15V45c0-8.271,6.729-15,15-15h30c8.271,0,15,6.729,15,15V135z M121,467c0,8.271-6.729,15-15,15H76 c-8.271,0-15-6.729-15-15v-90c0-8.271,6.729-15,15-15h30c8.271,0,15,6.729,15,15V467z M391,377c0-8.271,6.729-15,15-15h30 c8.271,0,15,6.729,15,15v90c0,8.271-6.729,15-15,15h-30c-8.271,0-15-6.729-15-15V377z M286,287v30c0,8.271-6.729,15-15,15h-30 c-8.271,0-15-6.729-15-15v-30c0-8.271,6.729-15,15-15h30C279.271,272,286,278.729,286,287z M256,105c-8.271,0-15-6.729-15-15 s6.729-15,15-15s15,6.729,15,15S264.271,105,256,105z" />
  </svg>
);
const gearIcon = (
  <svg fill="grey" viewBox="0 0 512 512" className="w-[20px]">
    <path d="m452 363.507812v-215.015624c34.191406-6.96875 60-37.273438 60-73.492188 0-41.355469-33.644531-75-75-75s-75 33.644531-75 75c0 36.21875 25.808594 66.523438 60 73.492188v92.507812h-151v-92.507812c34.191406-6.96875 60-37.273438 60-73.492188 0-41.355469-33.644531-75-75-75s-75 33.644531-75 75c0 36.21875 25.808594 66.523438 60 73.492188v92.507812h-151v-92.507812c34.191406-6.96875 60-37.273438 60-73.492188 0-41.355469-33.644531-75-75-75s-75 33.644531-75 75c0 36.21875 25.808594 66.523438 60 73.492188v122.507812h181v92.507812c-34.191406 6.96875-60 37.273438-60 73.492188 0 41.355469 33.644531 75 75 75s75-33.644531 75-75c0-36.21875-25.808594-66.523438-60-73.492188v-92.507812h151v92.507812c-34.191406 6.96875-60 37.273438-60 73.492188 0 41.355469 33.644531 75 75 75s75-33.644531 75-75c0-36.21875-25.808594-66.523438-60-73.492188zm-241-288.507812c0-24.8125 20.1875-45 45-45s45 20.1875 45 45-20.1875 45-45 45-45-20.1875-45-45zm-181 0c0-24.8125 20.1875-45 45-45s45 20.1875 45 45-20.1875 45-45 45-45-20.1875-45-45zm271 362c0 24.8125-20.1875 45-45 45s-45-20.1875-45-45 20.1875-45 45-45 45 20.1875 45 45zm91-362c0-24.8125 20.1875-45 45-45s45 20.1875 45 45-20.1875 45-45 45-45-20.1875-45-45zm45 407c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0 0" />
  </svg>
);
const engineIcon = (
  <svg
    fill="grey"
    id="Layer_1"
    className="w-[30px]"
    enable-background="new 0 0 512 512"
    viewBox="0 0 512 512"
  >
    <g transform="translate(1 1)">
      <g>
        <path d="m502.467 186.733h-34.133c-3.413 0-6.827 2.56-7.68 5.973l-23.893 70.827h-23.04l-23.04-38.4c-1.707-2.56-4.267-4.267-7.68-4.267h-34.133v-25.6c0-5.12-3.413-8.533-8.533-8.533h-59.735v-34.133h25.6c5.12 0 8.533-3.413 8.533-8.533v-51.2c0-5.12-3.413-8.533-8.533-8.533h-153.6c-5.12 0-8.533 3.413-8.533 8.533v51.2c0 5.12 3.413 8.533 8.533 8.533h25.6v34.133h-68.267c-2.56 0-4.267.853-5.973 2.56s-2.56 3.413-2.56 5.973v25.6h-59.733c-5.12 0-8.533 3.413-8.533 8.533v51.2h-17.067v-25.599c0-5.12-3.413-8.533-8.533-8.533s-8.534 3.413-8.534 8.533v68.267c0 5.12 3.413 8.533 8.533 8.533s8.533-3.413 8.533-8.533v-25.6h17.067v68.267c0 5.12 3.413 8.533 8.533 8.533h64l31.573 47.787c1.707 1.707 4.267 3.413 6.827 3.413h238.934c3.413 0 5.973-1.707 7.68-5.12l23.04-46.08h23.893l23.04 46.08c1.707 3.413 4.267 5.12 7.68 5.12h34.133c5.12 0 8.533-3.413 8.533-8.533v-221.867c.001-5.12-3.412-8.534-8.532-8.534zm-341.334-85.333h136.533v34.133h-25.6-85.333-25.6zm34.134 51.2h68.267v34.133h-68.267zm-145.067 204.8v-119.467h51.2v119.467zm326.827 51.2h-228.694l-29.867-45.204v-133.996-25.6h68.267 85.333 59.734v25.6c0 5.12 3.413 8.533 8.533 8.533h37.547l22.187 36.978v87.609zm40.106-51.2v-76.8h17.067v76.8zm76.8 51.2h-20.48l-22.187-42.789v-93.714l23.04-68.297h19.627z" />
      </g>
    </g>
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
  </svg>
);
const horseIcon = (
  <svg
    fill="grey"
    id="Layer_1"
    className="w-[30px]"
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
  >
    <path d="m104.729 55.813-43.744-23.005c.467-4.318.377-11.275-3.649-16.834a1.75 1.75 0 0 0 -3.167 1.019 10.431 10.431 0 0 1 -3.295 6.584c-1.988 1.947-4.16 6.035-4.009 9.606a40.567 40.567 0 0 0 -29.25 38.545 39.85 39.85 0 0 0 11.747 28.586 41.982 41.982 0 0 0 29.623 12.436h35.279a1.75 1.75 0 0 0 1.648-2.338c-.181-.505-4.633-12.491-23.187-22.419-7.334-3.925-10.936-8.46-12.659-12.35a16.929 16.929 0 0 0 7.957 5.438c8.654 2.7 15.211-3.648 17.365-6.125l18.813 4.48a1.751 1.751 0 0 0 2.048-1.1l3.488-9.515a10.614 10.614 0 0 0 -5.008-13.008zm1.724 11.8-2.953 8.058-18.368-4.371a1.757 1.757 0 0 0 -1.817.669c-.061.083-6.191 8.3-14.246 5.774-7.886-2.467-10.26-11.951-10.282-12.043a1.751 1.751 0 0 0 -1.7-1.346h-.006a1.751 1.751 0 0 0 -1.7 1.334c-.149.614-3.457 15.146 15.691 25.391 12.5 6.689 18.173 14.392 20.365 18.171h-32.452a38.457 38.457 0 0 1 -27.135-11.4 36.369 36.369 0 0 1 -10.735-26.086 37.065 37.065 0 0 1 28.145-35.6 1.75 1.75 0 0 0 1.249-2.222c-.678-2.166.985-6.073 2.814-7.864a15 15 0 0 0 3.123-4.37 24.935 24.935 0 0 1 .919 11.831 1.748 1.748 0 0 0 .917 1.8l44.818 23.572a7.1 7.1 0 0 1 3.353 8.706z" />
    <path d="m46.92 39.7c-.518.2-12.761 5.118-18.537 16.239a1.75 1.75 0 1 0 3.105 1.613c5.161-9.934 16.6-14.55 16.714-14.6a1.75 1.75 0 0 0 -1.282-3.252z" />
    <path d="m64.914 45.426a3.354 3.354 0 1 0 3.354 3.354 3.358 3.358 0 0 0 -3.354-3.354z" />
  </svg>
);

const DetailsHeader = ({ param }) => {
  
  const [toggle, setToggle] = useState(false);

  const shareIcon = (
     <div className="flex relative items-center justify-center w-[40px] h-[40px] mt-[30px] border rounded-3xl " >
        <CiShare2 size={20} className={``}/>        
          <div className="absolute top-0 z-10 rounded-t-3xl left-[-5px] rounded-md  w-[50px] h-[40px] flex flex-col overflow-hidden  hover:h-[270px] [transition:all_0.5s]  ">
            <div className="absolute flex flex-col gap-1 py-2 rounded-md top-[40px] w-[50px] h-full bg-white">
              <div className="w-full h-[50px] flex justify-center items-center">
              {telegramIcon}
              </div>
              <div className="w-full h-[50px] flex justify-center items-center">
              {vkIcon}
              </div>
              <div className="w-full h-[50px] flex justify-center items-center">
              {whatsAppIcon}
              </div>
               <div className="w-full h-[50px]  flex justify-center items-center">
                {skypeIcon}
              </div>
            </div>            
          </div>
      </div>
  )
 
  return (
    <div className="w-full flex h-[200px]  max-sm:h-[250px]  p-3 rounded-[15px]  max-sm:flex-col bg-white">

       {/* лывый блок */}
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col justify-between h-full">
          <h1 className="text-4xl max-md:text-2xl max-sm:text-xl font-medium">
            {param.make} {param.model} {param.year} with {param.mileage} mileage
          </h1>
          <div className="flex h-[35px]  max-xl:hidden">
            <div className="w-[130px] h-full border-r-2 flex justify-between px-3 items-center">
              {engineIcon}
              {param.displacement} L
            </div>
            <div className="w-[130px] h-full border-r-2 flex justify-between px-3 items-center">
              {gearIcon} {param.transmission === "a" ? "auto" : "manual"}
            </div>
            <div className="w-[130px] h-full border-r-2 flex justify-between px-3 items-center">
              {chassiIcon}
              {param.drive}
            </div>
            <div className="w-[130px] h-full border-r-2 flex justify-between px-3 items-center">
              {horseIcon}
              {param.horse_power}
            </div>
          </div>
        </div>
      </div>

        {/* правый блок */} 
      <div className=" relative  w-[400px] max-sm:w-full min-h-[175px] bg-slate-100  rounded-xl">
       
        <div className="flex w-full h-[80px]">
          <div className="flex-1 flex flex-col px-2 justify-center">
            <h1 className="text-3xl">230000</h1>
            <p>5000 $ per month</p>
          </div>
          <div className="flex items-center px-2">
           <div
             onClick={() => setToggle(!toggle)}
             className={toggle?`transform rotate-180  [transition:all_0.5s]`:`transform rotate-0 [transition:all_0.5s]`}><IoIosArrowDropdown size={25}/>
            </div>
          </div>
        </div>

        <div className={`w-full px-2  absolute h-[100px] ${toggle&&'h-[200px]'} [transition:all_0.3s] bg-slate-100 flex  flex-col  rounded-b-2xl`}>
          <div className="w-full max-h-[100px] gap-1 mt-6 flex justify-between items-end">
          <button className="w-full mt-[30px] h-[40px] rounded-xl bg-amber-400">Request a call</button>
          <div className="flex gap-2">
            {shareIcon}
            <div className="flex justify-center items-center w-[40px] h-[40px] mt-[30px] border rounded-3xl">
             <GrFavorite size={20} />
            </div>
          </div>
          </div>
          <div className={`${!toggle&&'hidden'} flex my-2 flex-col justify-around gap-1 [transition:all_0.5s] h-full bg-slate-100  `}>
           <button className='fade-in-image h-[40px] rounded-xl  bg-amber-400'>Questions</button>
           <button className='fade-in-image h-[40px] rounded-xl bg-amber-400'>Apply for a loan</button>
          </div>
        </div>
      
      </div>

      </div>
  );
};

export default DetailsHeader;

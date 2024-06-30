"use client";
import style from "./slider.module.css";
import React, { useState } from "react";
import Image from "next/image";

const Slider = ({ data }) => {

  const [images, setImages] = useState(data[0]);
  const [imageStrech, setImageStrech] = useState(false);

  const  turnIncreseImage  = () =>{  
    let selectedIndex = data.indexOf(images)  
    if(selectedIndex <=data.length-2){
      setImages(data[selectedIndex + 1])  
    }
  }

  const  turnDecreseImage  = () =>{  
    let selectedIndex = data.indexOf(images)  
    if(selectedIndex > 0){
      setImages(data[selectedIndex - 1])  
    }
  }

  const popUp = () => {
    return (
      <div className="flex justify-center items-center fixed h-full w-full left-0 bottom-0  p-5  bg-[rgb(84,_92,_93,_0.8)]">
        <div className="relative flex w-full h-auto  justify-center items-center bg-slate-300">
          <div className="absolute flex justify-end items-center top-0 w-full h-[50px] ">
            <div className="p-5 z-10" onClick={() => setImageStrech(false)}>
              <span className="pi pi-times p-3 rounded-[50%] bg-slate-200"></span>
            </div>
          </div>
          <Image
            width={700}
            height={0}
            className="object-contain h-full w-[900px]"
            alt=""
          
            src={images}
          />
          <div className="absolute z-10 flex justify-center bottom-0 w-full h-[50px] text-white">
            <div className=" flex w-[200px] items-center justify-between">
              <span onClick={turnDecreseImage} className="pi pi-angle-left  text-[50px]"></span>
              <span onClick={turnIncreseImage} className="pi pi-angle-right text-[50px]"></span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const render = (param) => {
    setImages(param);
    setImageStrech(true);
  };

  return (
    <div className={style.parent}>

      <div className={style.div1} onClick={() => render(images)}>
        <Image
          width={800}
          height={0}
          src={images}
          className="h-full object-cover"
          alt=""
        />
      </div>

      <div className={`${style.div2} flex gap-1 scrollbar scrollbar-thumb-gray-700 scrollbar-track-slate-800`}>
        {data.map((item, i) => (
          <Image
            onClick={() => setImages(data[i])}
            key={item}
            width={250}
            height={0}
            alt="main picture"
            src={item}
            className=" h-[130px]  object-cover my-[3px] max-lg:mx-[3px] rounded-md"
          />
        ))}
      </div>
      
        <div className=" max-sm:hidden">
         {imageStrech && popUp()}
        </div>

    </div>
  );
};

export default Slider;

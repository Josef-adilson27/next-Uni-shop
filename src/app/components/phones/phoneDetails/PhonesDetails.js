"use client";
import Image from "next/image";
import SidebarSlider from "../SidebarSlider";
import style from "./PhoneDetails.module.css";
import React from "react";
import MainPicSlider from '../MainPicSlider'


const PhonesDetails = ({ data }) => {
  console.log(data[0].img);

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className='flex [flex-basis:1300px] border-[1px] border-solid border-[green] p-[10px] bg-[rgb(250,_250,_250)] rounded-[15px] max-lg:flex-col'>
          <SidebarSlider data={data}/>      
          <MainPicSlider data={data} />
          <div className='h-[100%] w-[600px] border-[1px] border-solid border-[red]  max-lg:h-[300px] max-lg:w-[100%]'>
            
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );

  
};

export default PhonesDetails;

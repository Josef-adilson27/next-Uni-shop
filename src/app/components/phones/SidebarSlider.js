"use client";
import style from "./Slider.module.css";
import React, { useState } from "react";
import Image from "next/image";

const SidebarSlider = ({ data }) => {
  return (
    <div className=" flex flex-col items-center overflow-scroll flex-[1] gap-[3px] max-lg:hidden">
      {data[0].img.map((item) => (
        <Image
          className="w-[110px] h-[150px] object-contain "
          width={300}
          height={300}
          src={item}
          alt=""
        />
      ))}
    </div>
  );
};

export default SidebarSlider;

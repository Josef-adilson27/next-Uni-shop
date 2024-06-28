"use client";
import Image from "next/image";
import SidebarSlider from "./SidebarSlider";

import React, { useState } from "react";
import MainPicSlider from "./MainPicSlider";
import DescribePropreties from "../DescribePropreties";
import QualityBox from "./QualityBox";
import BuyBox from "./BuyBox";
import Characteristics from "./Characteristics";
import Reviews from "./Reviews";
import OverLook from "./OverLook";

const MainDetails = ({ data }) => {

  //стейт для кнопок:"Characteristics,Reviews,OverLook"
  const [toggleEvent, setToggleEvent] = useState("");
  //стейт для главного избражения. Меняется из <SidebarSlider/>
  const [mainImage, setMainImage] = useState(data[0].img[0]);
 
  //функция для установки стилей для кнопок:"Characteristics,OverLook,Reviews"
  const propertiesHandler = (e) => {
    e.target.parentElement.childNodes.forEach((element) =>
      element.classList.remove("activeShadow")
    );

    if (e.target.nodeName === "P") {
      e.target.classList.add("activeShadow");
    }
    setToggleEvent(e.target.innerText);
  };


  //функция для динамического рендера имеющихся в нем элементов
  //по нажатию кнопок:"Characteristics,Reviews,OverLook"
  const render = () => {
    switch (toggleEvent) {
      case "Characteristics":
        return <Characteristics data={data} />;
      case "Reviews":
        return <Reviews />;
      case "Overlook":
        return <OverLook />;
      default:
        return <Characteristics data={data} />;
    }
  };

  return (
    <div className='flex items-center flex-col w-full h-auto'>
      <div className='flex justify-center w-full h-auto'>
        <div className="flex ff [flex-basis:1700px] bg-white  overflow-hidden rounded-[15px] max-lg:flex-col px-2">
          <SidebarSlider data={data} setMainImage={setMainImage} />
          <MainPicSlider data={data} mainImage={mainImage} />
          <div className=" h-full max-lg:w-[100%] flex flex-col gap-2">
            {" "}
            <DescribePropreties data={data} />
            <div className="w-full flex items-center gap-2 relative my-2">
              <QualityBox />
            </div>
            <div className="my-2">
              <BuyBox data={data} />
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={propertiesHandler}
        className="w-[100%] flex py-7  items-center relative "
      >
        <div className="flex gap-[10px] w-[100%] overflow-x-scroll py-7 scrollbar-none  absolute">
          <p className=" px-2 py-[2px] max-md:text-buttonsSecondaryText text-buttonsPrimaryText rounded-lg hover:cursor-pointet bg-bgPrimarySlate activeShadow">
            Characteristics
          </p>
          <p className=" px-2 py-[2px] max-md:text-buttonsSecondaryText text-buttonsPrimaryText rounded-lg hover:cursor-pointet bg-bgPrimarySlate">
            Reviews
          </p>
          <p className=" px-2 py-[2px] max-md:text-buttonsSecondaryText text-buttonsPrimaryText rounded-lg hover:cursor-pointet bg-bgPrimarySlate">
          OverLook
          </p>
        </div>
      </div>
      <div className="w-full h-auto">{render()}</div>
    </div>
  );
};

export default MainDetails;

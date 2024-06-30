"use client";
import React, { useEffect, useState } from "react";
import Slider from "../Slider";
import MainCharacteristics from "./MainCharacteristics";
import MessageBox from "./MessageBox";
import Services from "./Services";
import AboutDetails from "./AboutDetails";
import ViewedCars from "./ViewedCars";
import Advantages from "./Advantages";
import { useSelector } from "react-redux";

import DetailsHeader from "./DetailsHeader";
// данный компонент использутеся в [categories]/product

const MainDetails = ({ data }) => {
  //стейт описания продукта
 
  return ( 
    <div className="flex justify-center">
      <div className="flex w-[1700px] items-center flex-col gap-2 ">
        <DetailsHeader param={data[0]}/>
        <div className="w-full border flex rounded-[15px]  bg-white max-2xl:flex-col shadow">
          <div className="flex max-2xl:justify-center">
            <Slider data={data[0].img} />
          </div>
          <div className="flex px-[10px] flex-1 gap-5 justify-between max-[500px]:flex-col ">
            <MainCharacteristics param={data[0]} />
            <Services />
          </div>
        </div>
        <AboutDetails data={data[0].equipment} />
        <div className="flex justify-start w-full max-2xl:justify-center">
          <Advantages />
        </div>
        <div className="relative flex w-full mb-3 h-[550px]">
          <ViewedCars data={data} />
        </div>
      </div>
    </div>
  );
};

export default MainDetails;

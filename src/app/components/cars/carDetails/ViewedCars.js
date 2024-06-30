"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Link from "next/link";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


const ViewedCars = ({data}) => {

  const slider = React.useRef(null)

 const [viewedCars, setViewedCars] = useState([])

useEffect(()=>{
  if (typeof window !== "undefined" && window.localStorage) {   
   setViewedCars(window.JSON.parse(localStorage.getItem("viewed"))) 
}
},[])


  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1425,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

//если просмотренных авто меньше чем 5 то выводим это
  const ViewedCarNoSlider = () => {
    return (
      <div className="w-[95%] flex max-lg:w-[100%] ">
        {viewedCars?.map((item) => (
          <div
            key={item.id}
            className="flex overflow-hidden h-[450px] [border-right:solid_3px_transparent] "
          >
            <div className="w-full min-h-full flex flex-col rounded-[10px] overflow-hidden bg-slate-200">
              <Image
                className="w-full h-[230px] object-cover"
                width={300}
                height={300}
                alt=""
                src={item.img[0]}
              />
              <div className="flex flex-col h-[100px] px-3">
                <div className="w-full flex pt-2">
                  <div className="w-[50%] ">
                    <p>{item.year}</p>
                    <p>{item.mileage}</p>
                    <p>
                      {item.displacement} / {item.fuel_type}
                    </p>
                  </div>
                  <div className="w-[50%] text-end ">
                    <p>{item.transmission === "a" ? "manual" : "auto"}</p>
                    <p>{item.drive}</p>
                    <p>{item.horse_power} / hp</p>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-around h-full px-3">
                <p className="text-descrideText">{item.price} $</p>
                <div className="flex justify-center">
                  <button className="bg-lime-900 w-full py-2 rounded-xl">
                    Request a call
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // если просмотренных авто больше чем 5 то выводим этот слайдер
  const ViewedCarsSlider = () => {
    return (
      <>
        <button
          className="flex-1 mr-1 flex justify-center items-center rounded-[10px] rounded-bl-[10px] [transition:all_0.3s_ease-out] hover:bg-slate-200 max-lg:hidden"
          onClick={() => slider?.current?.slickPrev()}
        >
          <SlArrowLeft size={25} />
        </button>
        <div className="w-[95%] max-lg:w-[100%] ">
          <Slider ref={slider} className="h-[440px]" {...settings}>
            {viewedCars?.map((item) => (
              <div
                key={item.id}
                className="flex overflow-hidden h-[440px] [border-right:solid_3px_transparent]"
              >
                <div className="w-full min-h-full flex flex-col rounded-[10px] overflow-hidden bg-slate-200">
                  <Image
                    className="w-full h-[230px] object-cover"
                    width={300}
                    height={300}
                    alt=""
                    src={item.img[0]}
                  />
                  <div className="flex flex-col h-[100px] px-3">
                    <div className="w-full flex pt-2">
                      <div className="w-[50%] ">
                        <p>{item.year}</p>
                        <p>{item.mileage}</p>
                        <p>
                          {item.displacement} / {item.fuel_type}
                        </p>
                      </div>
                      <div className="w-[50%] text-end ">
                        <p>{item.transmission === "a" ? "manual" : "auto"}</p>
                        <p>{item.drive}</p>
                        <p>{item.horse_power} / hp</p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col justify-around gap-5 px-3">
                    <p className="text-descrideText">{item.price} $</p>
                    <div className="flex justify-center  ">
                      <button className=" bg-amber-400 w-full py-2 rounded-xl">
                        Request a call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button
          className="flex-1 ml-1 flex justify-center items-center rounded-[10px] rounded-bl-[10px] [transition:all_0.3s_ease-out] hover:bg-slate-200 max-lg:hidden"
          onClick={() => slider?.current?.slickNext()}
        >
          <SlArrowRight size={25} />
        </button>
      </>
    );
  };

  return (
    <div className="flex flex-col justify-between items-start w-full absolute  ">
      <div className="w-full   ">
        <h1 className="text-[36px] pb-3 font-medium max-sm:text-[26px]">
          The cars you have seen latter
        </h1>
      </div>
      <div className="w-[100%] px-1 flex justify-start">
        {viewedCars?.length > 5 ? <ViewedCarsSlider/> : <ViewedCarNoSlider/>}
      </div>
    </div>
  );
};

export default ViewedCars;

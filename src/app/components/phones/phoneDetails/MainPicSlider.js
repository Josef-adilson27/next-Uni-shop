"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const MainPicSlider = ({ data, mainImage }) => {

  const [translate, setTranslate] = useState([0]);
  const [counter, setCounter] = useState(0);
  const imagesLength = data[0].img.length;

  //размеры изобр. слайдера для регулировки адаптива.
  //в стилях менять не нужно
  let defaultImageSize = {
    width: 280,
    height: 400,
  };

  useEffect(() => {
    //формируем динамический массив для translate
    for (let i = 1; i < imagesLength; i++) {
      setTranslate((prev) =>
        Array.from(new Set([...prev, i * defaultImageSize.width]))
      );
    }
  }, []);

  const inc = () => {
    if(counter !== imagesLength-1){
      setCounter(counter + 1);
    }
  };

  const dec = () => {
    if(counter !== 0){
      setCounter(counter - 1);
    }
  };

  //два блока чередуются для адаптивного отображения
  return (
    <div className="my-1">
      {/*1. этот блок для десктопа (по умолчанию)*/}
      <div className="flex max-lg:hidden">
        <div className="m-2 flex justify-center items-start">
          <Image
            className="min-w-[300px] h-[400px] object-contain"
            width={300}
            height={300}
            src={mainImage}
            alt=""
          />
        </div>
      </div>
      {/*2. этот блок добавляет слайдер для основной картины для меньших размеров чем десктоп( после 1024px) */}
      <div className="hidden  max-lg:flex  relative justify-center">
        <div className="absolute top-[50%] z-10 w-[300px] flex justify-between">
          <button onClick={dec} className=" rounded-[50px]">
            <MdKeyboardArrowLeft size={40} color="grey" />
          </button>
          <button onClick={inc} className=" rounded-[50px]">
            <MdKeyboardArrowRight size={40} color="grey" />
          </button>
        </div>
        <div className={`flex overflow-hidden  w-[280px] h-[400px]`}>
          <div
            style={{
              display: "flex",
              transition: "all 0.5s ease-out",
              transform: `translateX(-${translate[counter]}px)`,
            }}
          >
            {data[0].img.map((item) => (
              <Image
                key={item}
                className={`min-w-[280px] h-[400px] object-contain`}
                width={200}
                height={200}
                alt=""
                src={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPicSlider;

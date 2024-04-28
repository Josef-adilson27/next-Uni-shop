"use client";

import React, { useState } from "react";
import Slider from "./Slider";

/// описания главных характеристик
const mainCharacteristics = (param) => {
  return (
    <div className="flex flex-col justify-between h-[400px] ">
      <h1 className="text-2xl py-2 font-[700]  max-sm:text-xl">
        Characteristics
      </h1>
      <h1 className="text-xl">
        <span className="text-[gray]">Mileage:</span> {param.mileage} km
      </h1>
      <h1 className="text-xl">
        <span className="text-[gray]">Class:</span> {param.class}
      </h1>
      <h1 className="text-xl">
        <span className="text-[gray]">Cylinders:</span> {param.cylinders}
      </h1>
      <h1 className="text-xl">
        <span className="text-[gray]">Displacement:</span> {param.displacement}
      </h1>
      <h1 className="text-xl">
        <span className="text-[gray]">Drive:</span> {param.drive}
      </h1>
      <h1 className="text-xl">
        <span className="text-[gray]">Fuel type:</span> {param.fuel_type}
      </h1>
      <h1 className="text-xl">
        <span className="text-[gray]">Highway mpg:</span> {param.highway_mpg}
      </h1>
      <h1 className="text-xl">
        <span className="text-[gray]">Transmission:</span> {param.transmission}
      </h1>
    </div>
  );
};


//бокс "sent a message" number and textArea вопросов
const msgBox = (
  clickingTexts,
  setClickingTexts,
  textAreaText,
  setTextAreaText
) => {


  const textClick = (param) => {
    setClickingTexts(clickingTexts.filter((item) => item !== param));
    setTextAreaText((prev) => [...prev, param]);
    
  };

  return (
    <div className="w-[350px]   max-sm:w-[200px] py-2 text-white flex justify-center items-center ">
      <div className="w-[300px] h-[450px] max-sm:w-[200px]  flex flex-col  gap-[20px] items-center">
        <div className=" w-[250px] h-[70px] max-sm:w-[180px] flex flex-col justify-around bg-green-500 rounded-md">
          <h1 className="text-2xl max-sm:text-xl text-center">
            Sent a message
          </h1>
        </div>

        <div className=" w-[250px] h-[70px] max-sm:w-[180px]  flex flex-col justify-around  bg-blue-500 rounded-md">
          <h1 className="text-xl max-sm:text-xl text-center">
            +7 928 999 xx xx
          </h1>
        </div>

        <div className=" w-[250px] h-[150px]  max-sm:w-[180px] flex flex-col justify-around  rounded-md">
          <textarea
            onChange={(e) => setTextAreaText(e.target.value)}
            value={textAreaText}
            placeholder=""
            className=" text-black h-[200px] rounded-md p-2"
          />
        </div>

        <div className="w-[250px] max-sm:w-[180px] bg-slate-800 rounded-md flex flex-wrap">
          {clickingTexts.map((item) => (
            <div key={item} className="">
              <h1
                onClick={() => textClick(item)}
                className="inline-block px-3 bg-slate-700 m-1 rounded-xl cursor-pointer"
              >
                {item}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const CarsDetails = ({ data }) => {
  
  ///стейт вопросов
  const [clickingTexts, setClickingTexts] = useState([
    "Все еще продаете?",
    "Торг уместен?",
    "Где можно посмотреть?",
    "Пришлете видео?",
  ]);

  ///стейт инпута вопросов
  const [msgAreaText, setMsgtAreaText] = useState(["Вдравствуйте!"]);
  ///стейт описания продукта
  const [dicribeAreaText, setDicribeAreaText] = useState([""]);

  return (
    <div className="">

      <div className="flex">

        <Slider data={data[0].img} />

        <div className="flex-1  flex items-center mx-5">
          <div className="ml-3 max-[600px]:hidden">
            {mainCharacteristics(data[0])}
          </div>
        </div>

      </div>

      <textarea  readOnly
        onChange={(e) =>  setDicribeAreaText(e.target.value)}
        value={dicribeAreaText}
        className=" bg-zinc-200  w-full appearance-none h-[300px] ff max-[500px]:min-w-[300px] resize-none"
      />

      <div className="w-full flex h-[500px] max-[500px]:flex-col max-[500px]:items-center  max-[500px]:h-auto  gap-2 mt-2  ">
        <div className="w-[50%]  max-[500px]:w-[300px] bg-gray-500 flex p-[10px] ">
          <div className="ml-3 hidden max-[600px]:block text-xl">
            {mainCharacteristics(data[0])}
          </div>
        </div>
        <div className="w-[50%]  max-[500px]:w-[300px] flex justify-center bg-slate-500 ">
          {msgBox(
            clickingTexts,
            setClickingTexts,
            msgAreaText,
            setMsgtAreaText
          )}
        </div>
      </div>

    </div>
  );
};

export default CarsDetails;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";


const SidebarSlider = ({ data, setMainImage }) => {
 
  // размеры для перемещений блока изобр.
  // формируется динам-ий ниже в useEffect
  const [translate, setTranslate] = useState([0]);
  
  const [counter, setCounter] = useState(0);

  const imagesLength = data[0].img.length;

  //размеры изобр. слайдера для регулировки адаптива.
  //в стилях менять не нужно

  let defaultImageSize = {
    width: 280,
    height: 150,
  };

  useEffect(() => {
    //формируем динамический массив для translate
    for (let i = 1; i < imagesLength; i++) {
      setTranslate((prev) =>
        Array.from(new Set([...prev, i * defaultImageSize.height]))
      );
    }
  }, []);

  const turnIncreseImage = () => {
    if (counter !== imagesLength - 4) {
      setCounter(counter + 1);
    }
  };

  const turnDecreaseImage = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="flex overflow-hidden relative  flex-col items-center justify-center w-[150px] h-[700px]   max-lg:hidden">
      {imagesLength > 4 ? (
        <button
          onClick={turnIncreseImage}
          className="absolute top-5 z-10 p-1 bg-bgPrimarySlate rounded-[50px]"
        >
          <MdKeyboardArrowUp color="grey" size={30} />
        </button>
      ) : (
        ""
      )}

      <div className="px-2 overflow-hidden w-full max-h-[600px]  ">
        <div
          style={{
            transition: "all 0.5s ease-out",
            transform: `translateY(${-translate[counter]}px)`,
          }}
        >
          {data[0].img.map((item) => (
            <Image
              onClick={() => setMainImage(item)}
              key={item}
              className="w-[150px] h-[150px] object-contain"
              width={300}
              height={300}
              src={item}
              alt=""
            />
          ))}
        </div>
      </div>
      {imagesLength > 4 ? (
        <button
          onClick={turnDecreaseImage}
          className="absolute z-10  bottom-5 p-1 bg-bgPrimarySlate rounded-[50px]"
        >
          <MdKeyboardArrowDown color="grey" size={30} />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default SidebarSlider;

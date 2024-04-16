"use client";

import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Selectbar = () => {
  const [buttonToggle, setButtonToggle] = useState(false);
  const [states, setStates] = useState([
    "Выбрать все",
    "По рейтингу",
    "Сначала дорогие",
    "Сначала дешевые",
  ]);

  const [value, setValue] = useState("Выбрать все");

  const addToValue = (item) => {
    setValue(item);
    setButtonToggle(false);
  };

  return (
    <div className="relative   ">
      <div className="border-[2px] border-solid relative flex flex-col items-center px-1 w-[200px]  h-[35px] justify-between  rounded-[13px]">
        <div className=" pl-2 flex items-center w-full h-full justify-between ">
          <p>{value}</p>
          <button
            className="h-[100%]"
            onClick={() => setButtonToggle(!buttonToggle)}
          >
            {buttonToggle ? (
              <IoIosArrowUp fontSize={20} />
            ) : (
              <IoIosArrowDown fontSize={20} />
            )}
          </button>
        </div>

        <div className="absolute left-0 mt-[34px] bg-slate-100  w-[200px]  rounded-lg">
          {buttonToggle && (
            <div>
              {states.map((item) => (
                <p
                  className=" cursor-pointer pl-1 "
                  onClick={() => addToValue(item)}
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Selectbar;

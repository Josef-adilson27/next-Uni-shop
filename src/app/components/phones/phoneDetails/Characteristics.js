import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const Characteristics = ({data}) => {
  const [expandToggle, setExpandToggle] = useState(false);

  let object = data[0];

  const GeneralParameters = [];
  const FactoryData = [];

  for (const key in object) {
    if (key === "make" || key === "model" || key === "Manufacturer country") {
      GeneralParameters.push({
        key: key,
        value: object[key],
      });
    }
    if (key !== "img" && key !== "price" && key !== "about" && key !== "id") {
      FactoryData.push({
        key: key,
        value: object[key],
      });
    }
  }

 const FactoryParametres = () =>{

  return(
    <div className="w-full rounded-[15px]  overflow-hidden ff bg-white flex flex-col justify-center">
    <span className="font-bold p-2">Factory data</span>
    {GeneralParameters.map((item, index) => ( 
      <div key={item.value} className="flex justify-between w-full font-light     text-[20px] max-md:text-[16px] ">
        {index % 2 == 0 ? (
          <div
            key={item.key}
            className="w-full bg-slate-200  flex justify-between p-2 bg-bgPrimarySlate"
          >
            <span className="flex-2 flex max-sm:w-[100px] max-md:flex-col max-md:justify-center">
              {item.key}
            </span>
            <span className="flex-2 flex max-sm:w-[100px] max-md:flex-col max-md:justify-center text-right">
              {item.value}
            </span>
          </div>
        ) : (
          <div
          key={item.key}
          className="w-full  flex justify-between p-2  "
        >
          <span className="flex-2 flex max-sm:w-[100px] max-md:flex-col max-md:justify-center">
            {item.key}
          </span>
          <span className="flex-2 flex max-sm:w-[100px] max-md:flex-col max-md:justify-center text-right">
            {item.value}
          </span>
        </div>
        )}
      </div>
    ))}
  </div>
  )
 }

 const GeneralParametres = () =>{
  return(
    <>
    {expandToggle ? (
        <div className=" w-full  rounded-[15px] ff bg-white flex flex-col justify-around">
          <span className="font-bold p-2">General parameters</span>
          {FactoryData.map((item, index, array) => (
            <div key={item.key} className="flex items-end justify-between font-light  text-[20px] max-md:text-[16px]">
              {index % 2 == 0 ? (
                <div
                  key={item.key}
                  className="w-full px-3 flex justify-between p-2  bg-slate-200"
                >
                  <span className="flex-2 flex max-sm:w-[100px] max-md:flex-col max-md:justify-center">
                    {item.key}
                  </span>
                  <span className="flex-2 flex max-sm:w-[100px] max-md:flex-col max-md:justify-center text-right">
                    {item.value}
                  </span>
                </div>
              ) : (
                <div className="w-full px-3 flex justify-between p-2">
                  <span className="flex-2 flex max-sm:w-[100px] max-md:flex-col max-md:justify-center">
                    {item.key}
                  </span>
                  <span className="flex-2 flex max-sm:w-[100px] max-md:flex-col max-md:justify-center text-right">
                    {item.value}
                  </span>
                </div>
              )}
            </div>
          ))}

          <div className="w-full  px-2">
            <hr className="w-[100%]" />
            <div
              onClick={() => setExpandToggle(!expandToggle)}
              className="flex items-center my-2 justify-between h-[40px] w-[150px] px-2 rounded-lg border"
            >
              <span className="text-buttonsPrimaryText max-md:text-buttonsSecondaryText">Hide all</span>
              <MdKeyboardArrowUp size={20} />
            </div>
          </div>
        </div>
      ) : (
        <div className="px-2 w-full  rounded-[15px] ff bg-white flex flex-col justify-around">
          <span className="py-1 font-bold">General parameters</span>
          <hr className="w-[100%]"/>
          <div
            onClick={() => setExpandToggle(!expandToggle)}
            className="flex items-center my-2 justify-between h-[40px] w-[150px] px-2 rounded-lg border"
          >
            <span className="text-buttonsPrimaryText max-md:text-buttonsSecondaryText">Expand all</span>
            <MdKeyboardArrowDown size={25} />
          </div>
        </div>
      )}
    </>
  )
 }

  return (
    <div className="flex flex-col gap-3 ">
     {<FactoryParametres/>}
     {<GeneralParametres/>}
    </div>
  );
};

export default Characteristics;

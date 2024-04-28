"use client";
import Slider from "./Slider";
import { ProductRegister,characteristics} from "./Separated";
import React, { useState } from "react";

const PhonesDetails = ({ data }) => {
  const [buyPopUpToggle, setBuyPopUpToggle] = useState(false);

  const about = () => {
    return (
      <div className="h-full flex flex-col justify-around p-2 gap-5">
        <p className="font-[500]">About this item</p>
        {data[0].about.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    );
  };

 

  const BuyPopUp = () => {
    return (
      <div className="flex justify-center items-center fixed h-full w-full left-0 bottom-0   bg-[rgb(84,_92,_93,_0.6)] ">
        <div className=" bg-slate-50 h-[550px]">
          {
            <ProductRegister
              open={buyPopUpToggle}
              setOpen={setBuyPopUpToggle}
            />
          }
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div className=" flex max-[600px]:flex-col">
        <Slider data={data[0].img} />
        <div>{buyPopUpToggle && BuyPopUp()}</div>

        <div className="w-full flex ">
          <div className="flex flex-col flex-wrap p-2 text-left w-full h-auto text-2xl">
            {characteristics(data[0])}
            <div className="mt-3">
              <button
                className="bg-amber-600  h-[40px] w-[100px] rounded-[50px]"
                onClick={() => setBuyPopUpToggle(true)}
              >
                Buy
              </button>
            </div>
            
          </div>
        </div>
      </div>
      <hr className="my-3 h-[2px] bg-slate-300" />

      <div className="rounded-lg bg-[radial-gradient(circle_at_10%_20%,_rgb(69,_86,_102)_0%,_rgb(34,_34,_34)_90%)]">
        <div className="max-w-[300px] h-auto">{about()}</div>
      </div>
    </div>
  );
};

export default PhonesDetails;

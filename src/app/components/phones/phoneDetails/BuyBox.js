import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";

const BuyBox = ({data}) => {

const [toggle, setToggle] = useState(true);

const [addLoc, setAddLoc] = useState(() => {
  if (typeof window !== "undefined" && window.localStorage) {
    if (window.localStorage.getItem("savedPhones") === "null") {
      return [];
    } else {
      return window.JSON.parse(localStorage.getItem("savedPhones"));
    }
  }
});

useEffect(()=>{
  if (typeof window !== "undefined" && window.localStorage) {
    if (window.localStorage.getItem("savedPhones") === "null") {
      setAddLoc([])
    } else {
      setAddLoc(window.JSON.parse(localStorage.getItem("savedPhones")))
      
    }
  }
},[])

console.log(addLoc);

useEffect(() => {
  window.localStorage.setItem("savedPhones", JSON.stringify([...new Map(addLoc?.map((item)=>[item["id"],item])).values()]));
}, [addLoc]);

const addToCart = (param)=>{
  if(addLoc.length===0){
    setAddLoc((current) => [...current, param]);
    localStorage.setItem("savedPhones", JSON.stringify(addLoc));
   }else if(addLoc.length>0) {
    setAddLoc((current) => [...current,param]);
    localStorage.setItem("savedPhones", JSON.stringify(addLoc)); 
   }
}

  return (
    <div className="flex flex-col gap-2">
      <div className="flex  gap-2 ">
        <div className="flex-1  rounded-lg px-[6px]  bg-bgPrimarySlate">
          <button  className="text-buttonsPrimaryText max-md:text-buttonsSecondaryText font-semibold">
            Buy in credit
          </button>
          <p className="font-light text-buttonsSecondaryText">$300 per month</p>
        </div>
        <button onClick={()=>addToCart(data[0])} className="flex-2  rounded-lg px-[20px] flex items-center  text-buttonsPrimaryText max-md:text-buttonsSecondaryText bg-orange-400">
          Buy
        </button>
        <div className="flex-2  rounded-lg px-[10px] bg-bgPrimarySlate ">
          <FcLikePlaceholder size={40} />
        </div>
      </div>
      <div className="flex w-[100%] justify-between gap-2 text-[14px]">
        <div className="flex-1 flex flex-col py-[3px] px-[5px] rounded-[10px] text-buttonsSecondaryText bg-bgPrimarySlate">
          <span>In shops </span>
          <Link href="/" className="text-blue-600">on November 4</Link>
        </div>
        <div className="flex-1 flex flex-col py-[3px] px-[5px] rounded-[10px] text-buttonsSecondaryText  bg-bgPrimarySlate">
          <span>To home</span>
          <Link href="/" className="text-blue-600">on November 4</Link>
        </div>
      </div>
      <div className="flex gap-2 text-buttonsSecondaryText">
        <div
          onClick={() => setToggle(true)}
          className={` py-2 px-2 hover:cursor-pointer rounded-lg border ${
            toggle ? "border-gray-950" : ""
          } `}
        >
          <span>12 months $0</span>
        </div>
        <div
          onClick={() => setToggle(false)}
          className={`py-2 px-2 hover:cursor-pointer rounded-lg border ${
            toggle ? "" : "border-gray-950"
          } `}
        >
          <span>24 months $715</span>
        </div>
      </div>
    </div>
  );
};

export default BuyBox;

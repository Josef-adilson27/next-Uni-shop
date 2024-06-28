'use client'
import { useEffect, useState } from "react";
import style from "./index.module.css";
import Image from "next/image";

const paymentPanel = (
  <div className="flex w-[300px] h-[320px] rounded-xl p-2 text-white bg-[rgb(4,_6,_58)]">
    <div className="flex flex-col px-2 w-full">
      <div className="flex items-center justify-center w-full h-[100px]">
        <div className="">
          <h1>Have coupon?</h1>
          <input type="text" className="h-[40px]" />
          <button className=" px-2 h-[40px]">Aplly</button>
        </div>
      </div>
      <div className="w-full   p-2">
        <div className="py-2">
          <div className="flex justify-between py-2">
            <p>Total price:</p>
            <p>USD 102</p>
          </div>
          <div className="flex justify-between py-2">
            <p>Discount:</p>
            <p>USD 0</p>
          </div>
          <div className="flex justify-between py-2">
            <p>Total:</p>
            <p>USD 3000</p>
          </div>
        </div>
        <hr />
        <div className=" flex justify-around ">
          <img className="w-[70px]" src={"/visa.png"} alt="" />
          <img className="w-[70px]" src={"/master.png"} alt="" />
        </div>
      </div>
    </div>
  </div>
);


const Page = () => {

  const [cartPhones, setCartPhones] = useState([])

  useEffect(()=>{
    if (typeof window !== "undefined" && window.localStorage) {   
     setCartPhones(window.JSON.parse(localStorage.getItem("savedPhones"))) 
    } 
  },[])
  
const inc = (id) =>{ 
  let phone = cartPhones.filter(item=>item.id == id)
  phone[0].count += 1;
  localStorage.setItem('savedPhones',JSON.stringify([...new Map(cartPhones.map((item)=>[item["id"],item])).values()]));
  setCartPhones(JSON.parse(localStorage.getItem('savedPhones')||'[]'))
  console.log(phone);
}


const dec = (id) =>{
  const el = cartPhones.find(item=>item.id==id)
  el.count<=1?el.count===1:el.count-=1;
  localStorage.setItem('savedPhones',JSON.stringify([...new Map(cartPhones.map((item)=>[item["id"],item])).values()]));
  setCartPhones(JSON.parse(localStorage.getItem('savedPhones')||'[]'))
}

  return (
    <div className="flex gap-2 justify-center min-h-[calc(100vh_-_230px)]">
    <div className="flex w-[1700px] min-h-[calc(100vh_-_230px)] items-center p-2 flex-col gap-2 rounded-[15px] bg-gray-50">
      {
        cartPhones.map(item=>(
          <div className="w-full h-[210px] p-2 max-md:h-[340px] gap-5 max-md:gap-1 flex rounded-xl max-md:flex-col max-md:items-center ff">
            <Image
            className="w-[130px] h-[200px]"
            width={200}
            height={200}
            alt=""
            src={item.img[0]}
            />     
            <div className="flex gap-7 max-md:gap-2 flex-col p-2 w-[250px] h-full max-md:justify-center">
              <div><h1 className="text-xl max-md:text-center ">{item.make}{item.model}</h1></div>
              <div className="max-sm:flex gap-2 flex max-md:justify-center">
               <button className="w-[100px] flex justify-center items-center h-[30px] rounded-2xl bg-slate-300">more</button>
               <button className="w-[100px] flex justify-center items-center h-[30px] rounded-2xl bg-slate-300">more</button>
              </div>
            </div> 
            <div className="flex flex-col px-2 justify-center items-center max-md:flex-row  max-md:justify-start">
              <button onClick={()=>inc(item.id)} className="flex justify-center items-center w-[30px] h-[30px] bg-slate-300 rounded-xl">+</button>
              <span className="px-2">{item.count?item.count:item.count=1}</span>
              <button onClick={()=>dec(item.id)} className="flex justify-center items-center w-[30px] h-[30px] bg-slate-300 rounded-xl">-</button>
            </div>
          </div>
        ))
      }
    </div>
      {paymentPanel}
  </div>
  );
};

export default Page;

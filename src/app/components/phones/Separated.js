import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
/// здесь дополнительные компоненты для phoneList и/или phonesDatails;

/// компонента для офрмления товара;

export const ProductRegister = ({ open, setOpen }) => {
  const [Exchange, setExchange] = useState(true);
  const [WithoutExchange, setWithoutExchange] = useState(false);
  const [toggle, setToggle] = useState(false);

  const ExchangeBox = () => {
    return (
      <div className="flex justify-center cursor-pointer w-full h-full bg-slate-500 p-1 rounded-md">
        <div className=" flex justify-between items-center   h-[35px] p-1 m-2 border-solid border-[gray] border-[1px] rounded-[5px]">
          <input
            className="text-[14px] flex cursor-pointer"
            type="button"
            value="Choose phone to exchange"
          ></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    );
  };

  const WithoutExchangeBox = () => {
    return (
      <div className="flex flex-col relative ">
        <div className="w-full h-full bg-slate-500 p-1 rounded-md ">
          <div className="flex flex-col ">
            <label>
              <input
                onChange={() => {
                  setToggle(true);
                }}
                type="radio"
                name="radio"
                value="value"
              />
              <span className="ml-2">FREE home delivery</span>
            </label>
            <label>
              <input
                onChange={() => {
                  setToggle(false);
                }}
                type="radio"
                name="radio"
                value="value"
              />
              <span className="ml-2">Pick it up yourself</span>
            </label>
          </div>

          <div>
            {toggle ? (
              <div>
                <div>
                  <span className="text-[18px] font-[600] text-2xl">
                    Expected arrival time:
                  </span>
                </div>
                <div className="">
                  <span className="font-[600]">Suterday, 13 June</span>
                  <a href="#" className="text-blue-600 mx-1">
                    Details.
                  </a>
                </div>
                <div>
                  <span>
                    Or fastest delivery,
                    <span className="font-[600]">Tommorow, 11 June</span>
                  </span>
                  <a href="#" className="text-blue-600 mx-1">
                    Details.
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col my-2 gap-1">
                <h1>You can pick up the goods at your nearest post office:</h1>
                <div>
                  <span>
                    Plese selesct your nearest post office
                    <a className="text-blue-600 mx-1" href="#">
                      here
                    </a>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className=" absolute top-[350px] flex flex-col gap-3 justify-end items-center w-full h-[100px] p-2">
          <button className="bg-lime-600 w-[150px] h-[40px] rounded-xl">
            Buy now
          </button>
          <button className="bg-lime-200 w-[150px] h-[40px] rounded-xl">
            Add to cart
          </button>
        </div>
      </div>
    );
  };

  //func for switching between  ExchangeBox and WithoutExchangeBox
  const ToggleA = () => {
    setExchange(true);
    setWithoutExchange(false);
  };
  //func for switching between  ExchangeBox and WithoutExchangeBox
  const ToggleB = () => {
    setExchange(false);
    setWithoutExchange(true);
  };

  return (
    <div className="h-[500px] w-[400px] max-sm:w-[300px] rounded-[10px] p-2">
      <div className="text-right">
        <button onClick={() => setOpen(!open)}>X</button>
      </div>
      <div className="flex justify-between font-[600] h-[5%]">
        <div>
          <h1
            className="cursor-pointer"
            style={{ textDecoration: Exchange ? "underline" : "none" }}
            onClick={ToggleA}
          >
            With Exchange
          </h1>
        </div>
        <h1
          className="cursor-pointer"
          style={{ textDecoration: WithoutExchange ? "underline" : "none" }}
          onClick={ToggleB}
        >
          Without Exchange
        </h1>
      </div>
      <div className="w-full h-[94%] rounded-md mt-1">
        {Exchange ? ExchangeBox() : WithoutExchangeBox()}
      </div>
    </div>
  );
};


export const StarRating = () => {

  const [rating, setRating] = useState(null);
  const [hover,setHover] = useState(null)
  return (
    <div className=" flex justify-around items-center w-[150px] h-[30px] bg-stone-800 rounded-lg">
      {[...Array(5)].map((item, index) => {
        const ratingValue = index + 1;
        return (
          <div key={index}>

          <label>
            <input
              type="radio"
              value={ratingValue}
              name="string"
              className="hidden"
              onClick={()=>setRating(ratingValue)}
            />
            <FaStar 
            size={20} 
            color={ratingValue <= (rating || hover)?"#fecf25":"#929290"} 
            onMouseOver={()=>setHover(ratingValue)}
            onMouseEnter={()=>setHover(null)}
            />
          </label>
          </div>
        );
      })}
    </div>
  );
};

///вывод строковых свойств телефона на верху....
export const characteristics = (param) => {
  
  let arr = [];

  for (const key in param) {
    if(typeof param[key]==='string' && key!=='id'){
     arr.push(param[key]);
    }
  }


  return (
    <div className="max-w-[500px]  flex flex-col justify-between gap-y-2 max-md:text-[20px]">
      <div className="flex  flex-wrap gap-2">
       {
        arr.map(item=>(
        <h1>{item.slice(0,1).toUpperCase()+item.slice(1).toLowerCase() },</h1>
        ))
       }
      </div>

      <div className="">
        <StarRating />
      </div>

      <hr className="w-full" />
      <div className="flex w-[250px] bg-amber-400 rounded-[50px]">
        <div className="w-full flex gap-2  justify-around  ">
          <p className="text-[red]">-10%</p>
          <p className="font-[500]">$ 3,3333</p>
        </div>
      </div>
    </div>
  );
};



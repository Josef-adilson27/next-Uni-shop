"use client";
import React, { useState } from "react";

const MessageBox = () => {
  const [clickingTexts, setClickingTexts] = useState([
    "Все еще продаете?",
    "Торг уместен?",
    "Где можно посмотреть?",
    "Пришлете видео?",
  ]);

  const [msgAreaText, setMsgtAreaText] = useState(["Вдравствуйте!"]);

  const textClick = (param) => {
    setClickingTexts(clickingTexts.filter((item) => item !== param));
    setMsgtAreaText((prev) => [...(prev + " "), param].join(""));
  };

  return (
    <div className="w-[350px]   py-2 text-white flex justify-center items-center ">
      <div className="w-[300px] h-[450px] text-buttonsPrimaryText flex flex-col gap-3 items-center">
        <div className="w-[400px] flex gap-2 justify-between">
          <div className=" w-[193px] h-[50px] flex flex-col justify-around bg-green-500 rounded-md">
            <h1 className=" max-sm:text-xl text-center">
              Sent a message
            </h1>
          </div>

          <div className=" w-[193px] h-[50px]  flex flex-col justify-around  bg-blue-500 rounded-md">
            <h1 className="max-sm:text-xl text-center">
              +7 928 999 xx xx
            </h1>
          </div>
        </div>

        <div className=" w-[400px] h-[150px] text-buttonsPrimaryText flex flex-col justify-around  rounded-md">
          <textarea
            onChange={(e) => setMsgtAreaText(e.target.value)}
            value={msgAreaText}
            placeholder=""
            className=" text-black h-[200px] rounded-md p-2"
          />
        </div>

        <div className="w-[400px] p-1 text-buttonsPrimaryText bg-slate-800 rounded-md flex flex-wrap">
          {clickingTexts.map((item) => (
            <div key={item} className="">
              <h1
                onClick={() => textClick(item)}
                className="inline-block p-1 px-2 m-1 bg-slate-700 rounded-xl cursor-pointer"
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
export default MessageBox;

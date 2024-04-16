"use client";
import { LuSearch } from "react-icons/lu";
import React, { useState } from "react";

const Searchbar = () => {
  const [history, setHistry] = useState([]);
  const [historyToggle, setHistoryToggle] = useState(false);
  const [searhListToggle, setSearhListToggle] = useState(false);
  const [searhList] = useState(["apple", "tomato", "icecream"]);
  const [inputState, setInputState] = useState("");


  const historyClear = () => {
    setHistry([]);
    setHistoryToggle(false);
  };

  const inputTouch = () => {
    if (history.length > 0) {
      setHistoryToggle(!historyToggle);
    }
  };

  const inputChange = (e) => {
    setInputState(e.target.value);

    if (inputState.split("").length > 1) {
      setSearhListToggle(true);
    } else {
      setSearhListToggle(false);
    }
  };

  const addToHistory = (item) => {
    setSearhListToggle(false);
    setInputState(item);
    setHistry((prev) => Array.from(new Set([...prev, item])));
  };

  return (
    <div className="relative h-full">
      <div className="w-[400px] h-[35px] max-sm:w-[300px] flex  rounded-[13px] border-[2px] border-solid border-[red]max-sm:w-[200px]">
        <input
          onClick={inputTouch}
          placeholder="Search"
          value={inputState}
          onChange={(e) => inputChange(e)}
          className="pl-1  w-[350px]  max-sm:w-[250px] rounded-tl-[10px]  rounded-bl-[10px] hover:outline-none focus:outline-none"
          type="text"
        />
        <div className="flex items-center justify-center flex-1">
          <LuSearch fontSize={30} color="grey" />
        </div>
      </div>
      <div className="absolute mt-[1px] w-[400px] h-auto max-sm:w-[300px] z-[10] rounded-[10px] bg-slate-100">
        {historyToggle && (
          <div>
            <div className="flex w-full justify-between p-2">
              <p className="text-xl">History</p>
              <button onClick={historyClear}>clear</button>
            </div>

            <div className="flex flex-wrap">
              {history.map((item) => (
                <p className="px-[10px] m-1 bg-slate-300 rounded-lg cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          </div>
        )}
        {searhListToggle && (
          <div className="">
            {searhList.map((item) => (
              <p className="cursor-pointer" onClick={() => addToHistory(item)}>
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;

"use client";
import { LuSearch } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const ProductSearch = ({ list, category }) => {
  const [inputValue, setInputValue] = useState("");
  const [listToggle, setListToggle] = useState(false);
  const [lists, setLists] = useState([]);

  const [historyLists, setHistoryLists] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      if (window.localStorage.getItem("history") === "null") {
        return [];
      } else {
        return window.JSON.parse(localStorage.getItem("history"));
      }
    }
  });



  useEffect(() => {
    window.localStorage.setItem(
      "history",
      JSON.stringify([
        ...new Map(historyLists?.map((item) => [item["id"], item])).values(),
      ])
    );
  }, [historyLists]);

  //фильтр запрсов
  useEffect(() => {
    setLists(
      list.filter((item) => {
        if (item.toLowerCase().includes(inputValue.toLowerCase())){
          return item;
        }
      })
    );
  }, [inputValue, listToggle]);

  //prodistsList toggle button-icons
  const listToggleFunc = () => {
    return (
      <>
        {listToggle ? (
          <span
            onClick={() => setListToggle(false)}
            className="pi pi-caret-up text-gray-400"
          ></span>
        ) : (
          <span
            onClick={() => setListToggle(true)}
            className="pi pi-caret-down text-gray-400"
          ></span>
        )}
      </>
    );
  };

  //history queries function
  const historyList = () => {
    return (
      <div>
        {!!historyLists?.length && (
          <div className="bg-slate-500 m-1 text-white flex flex-col p-1 rounded-[5px]">
            <div className="  flex justify-between">
              <span className="cursor-pointer">history</span>
              <button
                className="cursor-pointer"
                onClick={() => setHistoryLists([])}
              >
                delete
              </button>
            </div>
            <div className="flex flex-wrap">
              {!!historyLists.length &&
                historyLists.map((item) => (
                  <p
                    className="bg-slate-600 m-1 flex justify-center rounded-[8px] px-1 cursor-pointer"
                    onClick={() => setInputValue(item)}
                  >
                    {item}
                  </p>
                ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const productsList = () => {
    return (
      <div className="">
        {listToggle && (
          <div className="">
            {!historyList.length && historyList()}
            {lists.map((item) => (
              <p
                className="p-1 cursor-pointer"
                onClick={() => texClickHandler(item)}
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  };

  const texClickHandler = (text) => {
    setInputValue(text);
  };

  const searchBTNClickHandler = () => {
    if (inputValue !== "") {
      setHistoryLists((prev) => Array?.from(new Set([...prev, inputValue])));
    }
  };

  return (
    <div className="relative h-full">
      <div className="w-[270px]  h-[35px] flex  items-center justify-between px-1 rounded-[13px] border-[2px] border-solid border-[red]max-sm:w-[200px]">
        <input
          className="pl-1  w-[200px]  max-sm:w-[200px] rounded-tl-[10px]  rounded-bl-[10px] hover:outline-none focus:outline-none"
          type="text"
          value={inputValue}
          placeholder="search product"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex w-[50px] px-1 justify-between  ">
          <div>{listToggleFunc()}</div>
          <Link
            href={{ pathname: category, query: { category, item: inputValue } }}
          >
            <button
              className="flex items-center justify-center"
              onClick={searchBTNClickHandler}
            >
              <span className="text-gray-400 pi pi-search text-[20px]"></span>
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute mt-[1px] w-[250px] h-auto max-sm:w-[300px] z-[10] rounded-[10px] bg-slate-100">
        {productsList()}
      </div>
    </div>
  );
};

export default ProductSearch;

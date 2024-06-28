"use client";
import React, { useState } from "react";
import { categories } from "../../constants/consts";

const CategorySearch = ({ category, setCategory }) => {
  
  const [iconToggle, setIconToggle] = useState(false);

  const inputChange = (item) => {
    setCategory(item);
    setIconToggle(false);
  };

  return (
    <div>
      <div className="w-[250px] h-[35px]  flex  rounded-[13px] border-[2px] border-solid border-[red]max-sm:w-[200px]">
        <input
          placeholder="search category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="pl-1  w-[210px]  max-sm:w-[200px] rounded-tl-[10px]  rounded-bl-[10px] hover:outline-none focus:outline-none"
          type="text"
        />
        <div className="flex items-center justify-center flex-1">
          {iconToggle ? (
            <span
              onClick={() => setIconToggle(false)}
              className="pi pi-caret-up text-gray-400"
            ></span>
          ) : (
            <span
              onClick={() => setIconToggle(true)}
              className="pi pi-caret-down text-gray-400"
            ></span>
          )}
        </div>
      </div>
      <div className="absolute mt-[1px] w-[250px] h-auto max-sm:w-[300px] z-[10] rounded-[10px] bg-slate-100">
        {/* условный вывод списка категори(из constants/consts.js); */}     
        {iconToggle && (
          <div className="">
            {categories.map((item) => (
              <p
                className="p-1 cursor-pointer"
                key={item}
                //1.по нажатию на текст передаем функцию в inputChange нажатый текст категории (список категории получаем из сonstants/consts/js)
                //2.записываем текст  в searchCategory из SearchBox (SearchBox - родитель для searchCategory и ProductSearch)
                //3.из SearchBox передаем его в ProductSearch и рендерим как
                onClick={() => inputChange(item)}
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySearch;

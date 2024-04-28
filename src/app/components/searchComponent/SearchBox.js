"use client";

import { productsLists } from "../../constants/consts";
import React, { useEffect, useState } from "react";
import ItemsSearch from "./ItemsSearch";
import CategorySearch from "./CategorySearch";

const SearchBox = () => {
  //выбранная категория товаров из CategorySearch
  const [category, setCategory] = useState("");
  //динаммический меняющийся список товаров в зависимости от выбранной котегории товаров
  const [itemsList, setItemsList] = useState([]);

  const addTItemsSearch = () => {
    for (const key in productsLists) {
      if (key === category) {
        setItemsList(productsLists[key]);
      }
    }
  };

  //как только меняется категория товара из CategorySearch меняем список товаро (itemsList) для ItemsSearch
  useEffect(() => {
    addTItemsSearch();
  }, [category]);

  return (
    <div className="mt-2 flex gap-1 max-sm:flex-col">
      <CategorySearch category={category} setCategory={setCategory} />
      <ItemsSearch list={itemsList} category={category} />
    </div>
  );
};

export default SearchBox;

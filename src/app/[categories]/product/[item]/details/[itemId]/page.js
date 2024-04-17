"use client";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { detail } from "../../../../../../../redux/slices/overall";
import Slider from "@/app/components/Slider";

const Page = ({ params }) => {

  const { data } = useSelector((state) => state.genaralFunctions);
  const distpatch = useDispatch();


  
  useEffect(() => {
    distpatch(detail({ category: params.categories, id: params.itemId }));
  }, []);


  return (
    <div>
      {data.map((item) => (
        <div>
          <Slider data={item.img}/>
          <h1>{item.make}</h1>
          <h1>{item.model}</h1>
        </div>
      ))}
    </div>
  );
};

export default Page;

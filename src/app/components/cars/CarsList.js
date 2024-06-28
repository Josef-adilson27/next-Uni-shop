"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Pagination from "../../../../Pagination";
import UsePagination from "@/app/CustomHooks/UsePagination";

//данный компонент использутеся в [categories]

const Cars = ({ data }) => {
  
 const { paginate, currentProducts, DataPerPage, DataLength } = UsePagination(data);

  const [addLoc, setAddLoc] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      if (window.localStorage.getItem("viewed") === "null") {
        return [];
      } else {
        return window.JSON.parse(localStorage.getItem("viewed"));
      }
    }
  });

 
  useEffect(() => {
    window.localStorage.setItem("viewed", JSON.stringify([...new Map(addLoc?.map((item)=>[item["id"],item])).values()]));
  }, [addLoc]);

  ///1.передаем массив данных в кост. хук UsePagination
  ///2.берем обработанные данные из  кос. хука UsePagination чтобы передать их компонент Pagination


  let add = (param) => {
    if(addLoc?.length===0){
    setAddLoc((current) => [...current, param]);
    localStorage.setItem("viewed", JSON.stringify(addLoc));
   }else if(addLoc.length>0) {
    setAddLoc((current) => [...current,param]);
    localStorage.setItem("viewed", JSON.stringify(addLoc)); 
   }
};

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-[repeat(auto-fit,400px)]  justify-center gap-[10px]">
        {currentProducts.map((item, index) => (
          <div
            key={index}
            className=" overflow-hidden [box-shadow:-1px_0px_13px_1px_rgba(0,0,0,0.26)] rounded-[10px] flex flex-col items-center justify-between w-[400px] h-[400px]"
          >
            <div className="w-full h-[300px] rounded-[10px]">
              <Image
                className="w-full object-cover h-full"
                height={500}
                width={500}
                alt=""
                src={item.img[0]}
              />
            </div>
            <div className="w-full flex  flex-1 items-center  justify-center">
              <div className="flex flex-col flex-1 items-center p-2 h-full">
                <div className="flex text-xl w-[150px] gap-1">
                  <h1>
                    {item.make.split("")[0].toUpperCase() + item.make.slice(1)}{" "}
                  </h1>
                  <h1>
                    {item.model.split("")[0].toUpperCase() +
                      item.model.slice(1)}
                  </h1>
                </div>
                <h1 className="text-xl w-[150px]">Year: {item.year}</h1>
                <h1 className="text-xl w-[150px]">Mileage: {item.mileage} </h1>
              </div>
              <div className="flex flex-col flex-1 items-center justify-center p-2 h-full">
                <Link href={`cars/product/${item.make}/details/${item.id}`}>
                  <button
                    onClick={() => add(item)}
                    className="bg-[grey] w-[120px] h-[30px] rounded-md"
                  >
                    See more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        dataPerPage={DataPerPage}
        totalData={DataLength}
        paginate={paginate}
      />
    </div>
  );
};

export default Cars;

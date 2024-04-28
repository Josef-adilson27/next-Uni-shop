"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Pagination from "../Pagination";
import UsePagination from "@/app/CustomHooks/UsePagination";

const PhoneList = ({data }) => {
  
  const [Data, setData] = useState(data);

  ///1.передаем массив данных в кост. хук UsePagination
  ///2.берем обработанные данные из  кос. хука UsePagination чтобы передать их компонент Pagination

  const { paginate, currentProducts, DataPerPage, DataLength } = UsePagination(Data);
  
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-[repeat(auto-fit,400px)]  justify-center gap-[10px]">
        {currentProducts.map((item,index) => (
          <div key={index} className="overflow-hidden  items-center place-items-center [box-shadow:-1px_0px_13px_1px_rgba(0,0,0,0.26)] rounded-[10px] flex flex-col   w-[300px] h-[400px]">
            <div className="w-full h-[300px] rounded-[10px] ">
              <Image
                className="w-full object-contain object-top h-full"
                height={500}
                width={500}
                alt=""
                src={item.img[0]}
              />
            </div>
            <div className="w-full  flex  flex-1  flex-col">
              <div className="flex flex-col justify-between flex-1  p-2 h-full ">
                <div className="flex text-xl w-[250px] text-left">
                  <h1>{item.make}{" "}{item.model}</h1>   
                </div>
                <h1 className="text-xl w-[250px]">Inch: {item.inch}</h1>
                <Link href={`phones/product/${item.make}/details/${item.id}`}>
                  <button className="bg-[grey]  w-[120px] h-[30px] rounded-md">
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

export default PhoneList;

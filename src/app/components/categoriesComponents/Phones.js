"use client"
import React,{useState} from "react";
import Link from "next/link";
import Pagination from "../Pagination";
import UseNavigation from "@/app/CustomHooks/UseNavigation";

const Phones = ({category,data}) => {

  const [Data, setData] = useState(data);

   const {paginate,currentProducts,DataPerPage,DataLength} = UseNavigation(Data)

  return (
    <div>
      {currentProducts.map((item) => (
        <Link href={`${category}/product/${item.make}/details/${item.id}`}>
            <h1>{item.make}</h1>
        </Link>
      ))}
          <Pagination
        dataPerPage={DataPerPage}
        totalData={DataLength}
        paginate={paginate}
      />
    </div>
  );

};

export default Phones;

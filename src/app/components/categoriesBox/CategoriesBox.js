"use client";
import React, { useEffect, useState } from "react";
import Categories from "./Categories";

const CategoriesBox = () => {

   const  [res,setRes] = useState([]);

   const [hasError, setHasError] = useState(false);
   const [loading, setLoading] = useState(true);
    
   const  fetchFailed = (
    <div className="w-full h-[100px] max-sm:h-[80px] flex flex-col justify-center items-center mt-2 ">
     <h1 className="text-2xl max-sm:text-[10px]">Please run API... <span className="font-[600]">http://localhost:4000/data</span> from db.json</h1>
     <p>by using this command: <span className="font-[600]"> json-server -w db.json -p 4000 </span></p>
    </div>
   ) 

    useEffect(() => {
           fetch('http://localhost:4000/data')
          .then(res=>res.json()) 
          .then(res2=>setRes(res2)) 
          .catch(()=>setHasError(true))
          .finally(()=>setLoading(false))       
    }, []);

  return (
    <div className="w-full">
      {hasError?fetchFailed:
        <>
        {Object.keys(res)?.map((item) => (
          <Categories category={item} data={res[item]} />
        ))}      
        </>
      }
    </div>
  );
};

export default CategoriesBox;

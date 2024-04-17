"use client";
import React, { useState } from "react";

import Image from "next/image";

const Slider = ({ data }) => {
    
  const [images, setImages] = useState(data[0]);


  return (
    <div>
        <div className="my-2">
        <Image width={600} height={600} alt="" src={images} />
        </div>
      <div className="flex">
        {data.map((item) => (
          <div key={item} className="cursor-pointer" onClick={()=>setImages(item)}>
            <Image width={300} height={200} priority alt="" src={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

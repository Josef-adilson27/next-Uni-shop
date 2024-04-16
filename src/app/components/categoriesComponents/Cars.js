import Image from "next/image";
import React from "react";
import Link from "next/link";

const Cars = async ({ category, data }) => {
  console.log(data.prducts);

  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,300px)] justify-center gap-[10px]">
      {data.prducts.map((item) => (
        <Link href={`${category}/product/${item.name}/details/${item.id}`}>
          <div className="[box-shadow:-1px_0px_13px_1px_rgba(0,0,0,0.26)] rounded-[10px] flex flex-col-reverse items-center w-[300px] h-[200px]">
            <h1>{item.make}</h1>
            <h1>{item.model}</h1>
            <div>
              <Image width={200} height={300} src={item.img} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cars;

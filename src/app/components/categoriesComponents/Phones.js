import React from "react";
import Link from "next/link";

const Phones = ({category,data}) => {

  return (
    <div>
      {data.prducts.map((item) => (
        <Link href={`${category}/product/${item.name}/details/${item.id}`}>
            <h1>{item.name}</h1>
        </Link>
      ))}
    </div>
  );

};

export default Phones;

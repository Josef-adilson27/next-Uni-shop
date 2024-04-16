import React from "react";

const Page = async ({params}) => {

 

  const get = async () => {
    const data = await fetch(
      `http://localhost:3000/api/details?name=${params.categories}&id=${params.itemId}`,
      { cache: "no-store" }
    );
    const res = data.json();
    return res;
  };

  
  const a = await get();
  
   console.log(a);

  return (
    <div>
        {
            a.map(item=>(
                <div>
                    <h1>{item.make}</h1>
                    <h1>{item.model}</h1>
                </div>
            ))
        }
    </div>
  );
};

export default Page;

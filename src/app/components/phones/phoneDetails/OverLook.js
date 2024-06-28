import React from "react";

const OverLook = () => {
  return (
    <div className='min-h-[300px] flex flex-col ff  rounded-[15px] p-2 bg-white'>
      <h1 className="text-3xl max-md:text-2xl font-medium my-5">
        There are no overlooks yet, be the first.
      </h1>
      <div className="w-[100%] h-[200px]  flex flex-col justify-between rounded-[15px] p-4 bg-bgPrimarySlate ">
        <div>
        <h1 className="text-xl font-semibold">Tell about product</h1>
        <p>Your overlooks will help buyers make a choice</p>
        </div>
        <button className="rounded-[10px] w-[130px] h-[40px] text-buttonsPrimaryText  bg-orange-400">Add review</button>
      </div>
    </div>
  );
};

export default OverLook;

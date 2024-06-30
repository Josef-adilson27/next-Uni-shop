import React from "react";
import StarRating from "./StarRating";

const QualityBox = () => {
  return (
    <div className="flex gap-[10px] w-[100%] text-buttonsPrimaryText max-md:text-buttonsSecondaryText overflow-x-scroll scrollbar-none  absolute">
      <StarRating />
      <div className="flex-2 text-center flex  gap-1  py-[4px] px-[8px] min-w-[120px] rounded-lg bg-bgPrimarySlate">
        Hight quality
       <svg class="svg-icon" style={{width:'25px'}}  viewBox="0 0 1024 1024" version="1.1"><path d="M896 128s-129.9 49.1-203.6 26.5C574 118.2 511.9 64 511.9 64s-62.1 54.2-180.4 90.5C257.8 177.1 128 128 128 128s-17.6 270.9 9.5 474.5C164.6 806.1 511.9 960 511.9 960s347.6-153.9 374.6-357.5C913.6 398.9 896 128 896 128zM486 667l-64.5-64.5 0.3-0.3-102.7-102.6 64.2-64.2L486 538l207-207 64.5 64.5L486 667z" fill="" /></svg>
      </div>
    </div>
  );
};

export default QualityBox;

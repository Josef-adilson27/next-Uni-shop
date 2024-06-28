import React from "react";
import StarRating from "./StarRating";

const QualityBox = () => {
  return (
    <div className="flex gap-[10px] w-[100%] text-buttonsPrimaryText max-md:text-buttonsSecondaryText overflow-x-scroll scrollbar-none  absolute">
      <StarRating />
      <div className="flex-2 text-center    py-[4px] px-[8px] min-w-[120px] rounded-lg bg-bgPrimarySlate">
        Hight quality
      </div>
      <div className="flex-2 justify-center py-[4px] px-[8px] min-w-[120px] rounded-lg flex items-center gap-1  bg-bgPrimarySlate">
        <span>Compare</span>
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-none border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
      </div>
    </div>
  );
};

export default QualityBox;

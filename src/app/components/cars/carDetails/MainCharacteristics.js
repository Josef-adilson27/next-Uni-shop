import React from "react";

const Pstyle = 'flex justify-between'

const MainCharacteristics = ({param}) => {
  return (
    <div className="flex flex-col w-[300px] justify-between h-[400px]">
      <h1 className="text-2xl py-2 font-[700]  max-sm:text-xl">
        Characteristics
      </h1>
      <p className={Pstyle}>
        <span className="text-[gray]">
          <span>Mileage:</span>{" "}
        </span>{" "}
        {param.mileage} km
      </p>
      <p className={Pstyle}>
        <span className="text-[gray]">
          {" "}
          <span>Making year:</span>{" "}
        </span>{" "}
        {param.year}
      </p>
      <p className={Pstyle}>
        <span className="text-[gray]">
          {" "}
          <span>Horse power:</span>{" "}
        </span>{" "}
        {param.horse_power}
      </p>
      <p className={Pstyle}>
        <span className="text-[gray]">
          {" "}
          <span>Cylinders:</span>{" "}
        </span>{" "}
        {param.cylinders}
      </p>
      <p className={Pstyle}>
        <span className="text-[gray]">
          {" "}
          <span>Displacement:</span>{" "}
        </span>{" "}
        {param.displacement}
      </p>
      <p className={Pstyle}>
        <span className="text-[gray]">
          {" "}
          <span>Drive:</span>{" "}
        </span>{" "}
        {param.drive}
      </p>
      <p className={Pstyle}>
        <span className="text-[gray]">
          {" "}
          <span>Fuel type:</span>{" "}
        </span>{" "}
        {param.fuel_type}
      </p>
      <p className={Pstyle}>
        <span className="text-[gray]">
          {" "}
          <span>Highway mpg:</span>{" "}
        </span>{" "}
        {param.highway_mpg}
      </p>
      <p className={Pstyle}>
        <span className="text-[gray]">
          {" "}
          <span>Transmission:</span>{" "}
        </span>{" "}
        {param.transmission==='a'?'automatic':'manual'}
      </p>
      
      <p className={Pstyle}>
        <span className="text-[gray]">
          <span>Class:</span>{" "}
        </span>{" "}
        {param.class}
      </p>
    </div>
  );
};

export default MainCharacteristics;

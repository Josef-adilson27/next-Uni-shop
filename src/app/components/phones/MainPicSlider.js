import React from 'react';
import Image from "next/image";
const MainPicSlider = ({data}) => {
    return (
        <div className='flex-[3] flex justify-center items-center border-[1px] border-solid border-[rgb(45,123,22)]'>
        <Image
          className="w-[300px] h-[440px] object-contain "
          width={300}
          height={300}
          src={data[0].img[1]}
          alt=""
        />
      </div>
    );
}

export default MainPicSlider;

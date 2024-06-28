import React from 'react';

const DescribePropreties = ({data}) => {

    return (
        <div className="px-2 my-1 text-descrideText max-sm:text-[20px]">
            {
                data.map(item=>(
                    <div key={item.make} className='flex gap-[5px]  flex-wrap '>
                        <span> {item.make}, </span>
                        <span> {item.model}, </span>
                        <span> camera {item.camera}, </span>
                        <span> inch {item.inch}, </span>
                        <span> RAM {item.ram}, </span>
                        <span> Rom {item.rom}, </span>
                        <span> sim {item.sim}, </span>
                        <span> {item.mah} mah </span>
                    </div>
                ))
            }
        </div>
    );
}

export default DescribePropreties;

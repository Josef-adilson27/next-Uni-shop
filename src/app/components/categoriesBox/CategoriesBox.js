import React from 'react';
import Categories from './Categories';
import {get} from "../../constants/consts";

const CategoriesBox =  async () => {

    const data = await get();

    return (
        <div className='w-full'>
            {
               Object.keys(data).map(item=>(
                    <Categories category={item} data={data[item]}/>
                ))
            }
        </div>
    );
};

export default CategoriesBox;

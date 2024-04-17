
import React from 'react';

const UseGetDetails =  () => {

     
    
    let url = 'http://localhost:3000/api/details?category=cars&id=4452';
    let response = await fetch(url);
    
    let commits = await response.json(); 

    ; 

      
    
    return {
        data:commits
    };
}

export default UseGetDetails;

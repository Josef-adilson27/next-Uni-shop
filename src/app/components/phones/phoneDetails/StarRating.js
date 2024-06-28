import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {

    const [rating, setRating] = useState(null);
    const [hover,setHover] = useState(null)
    return (
      <div className=" flex justify-around items-center px-[8px] min-w-[150px] bg-bgPrimarySlate rounded-lg">
        {[...Array(5)].map((item, index) => {
          const ratingValue = index + 1;
          return (
            <div key={index}>
  
            <label>
              <input
                type="radio"
                value={ratingValue}
                name="string"
                className="hidden"
                onClick={()=>setRating(ratingValue)}
              />
              <FaStar 
              size={20} 
              color={ratingValue <= (rating || hover)?"#fecf25":"#929290"} 
              onMouseOver={()=>setHover(ratingValue)}
              onMouseEnter={()=>setHover(null)}
              />
            </label>
            </div>
          );
        })}
      </div>
    );
  };

  export default StarRating
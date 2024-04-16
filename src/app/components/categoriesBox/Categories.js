
import Link from "next/link";

const Categories = ({ category,data }) => {
  
  return (
    <div className=" w-full flex flex-col  items-center    justify-between  rounded-md bg-slate-700  my-2">
      <div className=" w-full flex items-center justify-between bg  p-4">
        <h1 className="text-2xl text-white">{category}</h1>
        <h1 className="text-xl px-2  rounded-[50px] bg-[rgb(244,_244,_244)] text-[rgb(130,_131,_140)]">
          <Link href={category}>Все</Link>
        </h1>
      </div>
      <div className="w-[90%] flex  justify-center max-md:w-[80%] max-sm:w-full">    
          <img src={data.pic} alt="" />    
      </div>
    </div>
  );
};

export default Categories;

import React from "react";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex  justify-center w-full">
      <div className="w-full h-full rounded-md ">
        <div className="flex justify-between max-sm:flex-col w-full rounded-t-[20px] bg-white">
          <div className="flex flex-wrap flex-1  ">
            <div className="flex flex-col mx-10 my-5">
              <h1 className="text-2xl">Title</h1>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
            </div>
            <div className="flex flex-col mx-10 my-5">
              <h1 className="text-2xl">Title</h1>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
            </div>
            <div className="flex flex-col mx-10 my-5">
              <h1 className="text-2xl">Title</h1>
              <p>.....</p>
              <p>.....</p>
              <p>.....</p>
            </div>
          </div>
          <div className="flex items-center justify-end max-md:justify-center pr-10 max-md:p-0 flex-1">
            <div>
              <div className="w-full my-2  flex flex-col ">
                <div className="flex gap-1  w-[400px] max-sm:w-[300px]">
                  <input
                    type="text"
                    className="w-[400px] max-sm:w-[350px] rounded-sm bg-slate-200 "
                  />
                  <button className="px-4 rounded-sm bg-slate-200 h-[35px]">
                    send
                  </button>
                </div>
       
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

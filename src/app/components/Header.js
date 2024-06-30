import Link from "next/link";
import {cartLogo} from "../constants/consts";

const Header = () => {
  return (
    <header className="w-full">
      <div className="w-full  h-[100px] max-sm:h-[50px] flex items-center text-xl max-sm:text-[17px] justify-between max-sm:p-[5px] p-[20px]  bg-white  max-sm:rounded-b-[10px] rounded-b-[20px]">

        <div className="w-[300px] flex items-end m-1">
          <img className="w-[150px] max-sm:w-[70px]"
            src="/shopLogo.png"
            alt=""/>
        </div>

        <div className="w-[300px] px-3  flex items-center">
          <div className="flex justify-between w-full items-end ">
            <Link className="mx-2" href="/">
              Home
            </Link>
            <Link className="mx-2" href="/about">
              About
            </Link>
            <Link href="/cart">{cartLogo}</Link>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
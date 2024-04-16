import Link from "next/link";
import { cartLogo } from "../constants/consts";

const Header = () => {
  return (
    <header className="w-full">
      <div className="w-full flex text-xl max-sm:text-[17px] justify-between  bg-blue-400">
        <div className="w-[200px] flex items-end m-1">
          <img
            className="w-[150px] max-sm:w-[100px]"
            src="/shopLogo.png"
            alt=""
          />
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
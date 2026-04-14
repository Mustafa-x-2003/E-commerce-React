import React, { useState } from "react";
import { Link } from "react-router";

// === import icons ===
import { IoSearch } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { IoMenuSharp } from "react-icons/io5";

// === import components ===
import Menu from "./Menu";

function Header() {
  const [isShow, setIsShow] = useState(false);
  function handelMenu(value) {
    setIsShow(value);
  }
  return (
    
    <div className="container flexb py-8 overflow-hidden ">
      {/* Menu */}
      <div className={`w-full h-screen z-10   fixed top-0 left-0 bg-[rgba(0,0,0,.7)] ${isShow?'block':'hidden'} `}>

      </div>
        <Menu isShow={isShow} handelIsShow={handelMenu} />

      {/* search */}
      <div className="flexb border-b border-(--border-color) focus-within:border-(--main-color)  transition duration-300">
        <input
          type="text"
          placeholder="Search Anything..."
          className="  peer pb-2  pr-2   "
        />
        <button className="flexc w-10 cursor-pointer peer-focus:text-blue-500 transition duration-300 text-(--border-color)">
          <IoSearch className="" />
        </button>
      </div>
      {/* logo */}
      <div className="text-2xl font-bold">
        <Link>Mustafa</Link>
      </div>
      {/* icons */}
      <div className="flexc gap-8 ">
        <CiUser className="cursor-pointer" />
        <div className="relative">
          <IoHeartOutline className="cursor-pointer" />
          <span className="absolute w-5 h-5 rounded-full flexc text-(--white-color) bg-(--main-color)  -bottom-2 -right-3 ">
            0
          </span>
        </div>
        <div className="relative">
          <BiShoppingBag className="cursor-pointer" />
          <span className="absolute w-5 h-5 rounded-full flexc text-(--white-color) bg-(--main-color)  -bottom-2 -right-3 ">
            0
          </span>
        </div>

        <IoMenuSharp
          onClick={() => setIsShow(!isShow)}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Header;

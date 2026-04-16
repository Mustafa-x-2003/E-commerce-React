import React, { useContext, useState } from "react";
import { Link } from "react-router";

// === import icons ===
import { CiUser } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { IoMenuSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
// === import components ===
import Menu from "./hero/Menu";
import Search from "./Search";
import MyContext from "./contexts/MyContext";

function Header() {
  const [isShow, setIsShow] = useState(false);
  const { productsCart } = useContext(MyContext);
  function handelMenu(value) {
    setIsShow(value);
  }
  return (
    <div className="">
      <div className="container flexb py-8 overflow-hidden ">
        {/* Menu */}
        <div
          className={`w-full h-screen z-10   fixed top-0 left-0 bg-[rgba(0,0,0,.7)] ${isShow ? "block" : "hidden"} `}
        ></div>
        <Menu isShow={isShow} handelIsShow={handelMenu} />

        {/* search */}
        <Link to={"/AllProductsPage"}>
          <Search icon={<IoSearch />} placeholder={"Search Anything..."} />
        </Link>
        

        {/* logo */}
        <div className="text-2xl font-bold">
          <Link className="text-(--main-color)">NovaCart</Link>
        </div>
        {/* icons */}
        <div className="flexc gap-8 text-2xl ">
          <CiUser className="cursor-pointer hover:text-(--main-color) transition-all duration-300" />
          <div className="relative">
            <IoHeartOutline className="cursor-pointer hover:text-(--main-color) transition-all duration-300" />
            <span className="absolute text-lg w-5 h-5 rounded-full flexc text-(--white-color) bg-(--main-color)  -bottom-2 -right-3 ">
              0
            </span>
          </div>
          <div className="relative">
            <Link to={"/CartPage"}>
              <BiShoppingBag className="cursor-pointer hover:text-(--main-color) transition-all duration-300" />
              <span className="absolute text-lg w-5 h-5 rounded-full flexc text-(--white-color) bg-(--main-color)  -bottom-2 -right-3 ">
                {productsCart?productsCart.length:0}
              </span>
            </Link>
          </div>

          <IoMenuSharp
            onClick={() => setIsShow(!isShow)}
            className="cursor-pointer hover:text-(--main-color) transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

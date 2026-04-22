import React, { useContext, useState } from "react";
import { Link } from "react-router";

// === import icons ===
import { CiUser } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { IoMenuSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
// === import components ===
import Search from "./Search";
import MyContext from "./contexts/MyContext";
// ================
const Links = [
  { name: "Home", path: "/" },
  { name: "Categories", path: "/Categories" },
  { name: "All Products", path: "/AllProductsPage" },
  { name: "Blog", path: "/Blog" },
];
function Item({ name, path }) {
  return (
    <Link to={path}>
      <li className="">{name}</li>
    </Link>
  );
}
function Header() {
  const { productsCart, productsFavorite } = useContext(MyContext);

  return (
    <div className="fixed  w-full  left-0 bg-(--white-color) shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] z-1000 ">
      {/* Top Headr */}
      <div className=" flexb container py-2">
        <p>Free Shipping This Week Order Over - $55</p>

        <span className="text-(--p-color) hidden md:flex justify-between items-center gap-4">
          <select name="" id="">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          <select name="" id="">
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>
        </span>
      </div>
      {/* Center Headr */}
      <div className="border-t border-(--border-color)">
        <div className="container   flexb flex-wrap  py-4 overflow-hidden ">
          {/* logo */}
          <div className="sm:text-xl md:ext-2xl w-[20%] font-bold">
            <Link className="text-(--main-color)">NovaCart</Link>
          </div>

          {/* Search */}
          <div className="w-[70%] md:w-[50%] ">
            <Search placeholder={"Search Anything..."} icon={<IoSearch />} />
          </div>

          {/* icons */}
          <div className="hidden md:flex  w-fit pr-3   justify-end gap-8 text-3xl ">
            <span>
              <CiUser className="cursor-pointer hover:text-(--main-color) transition-all duration-300" />
            </span>

            <Link to={"/Favorite"}>
              <div className="relative">
                <IoHeartOutline className="cursor-pointer hover:text-(--main-color) transition-all duration-300" />
                <span className="absolute text-lg w-5 h-5 rounded-full flexc text-(--white-color) bg-(--main-color)  -bottom-2 -right-3 ">
                  {productsFavorite.length}
                </span>
              </div>
            </Link>

            <div className="relative">
              <Link to={"/CartPage"}>
                <BiShoppingBag className="cursor-pointer hover:text-(--main-color) transition-all duration-300" />
                <span className="absolute text-lg w-5 h-5 rounded-full flexc text-(--white-color) bg-(--main-color)  -bottom-2 -right-3 ">
                  {productsCart ? productsCart.length : 0}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div className=" border-t border-(--border-color) hidden md:block  ">
        <ul className="flexb py-2 gap-10  font-bold  m-auto w-fit">
          {Links.map((l) => {
            return <Item name={l.name} path={l.path} />;
          })}
        </ul>
      </div>

      {/* moile */}
      <div className="fixed  bottom-0 z-1000 left-1/2 -translate-x-1/2 md:hidden shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] rounded-lg">
        <div className="   flexb  bg-(--white-color) w-[390px] sm:w-[580px] gap-12 text-3xl py-3 px-10 rounded-lg ">
          <span className="hover:text-(--main-color) ">
            <IoMenuSharp />
          </span>

          <div className="relative">
            <Link to={"/CartPage"}>
              <BiShoppingBag className="cursor-pointer hover:text-(--main-color) transition-all duration-300" />
              <span className="absolute text-lg w-5 h-5 rounded-full flexc text-(--white-color) bg-(--main-color)  -bottom-2 -right-3 ">
                {productsCart ? productsCart.length : 0}
              </span>
            </Link>
          </div>
          <Link to={"/Favorite"}>
            <div className="relative">
              <IoHeartOutline className="cursor-pointer hover:text-(--main-color) transition-all duration-300" />
              <span className="absolute text-lg w-5 h-5 rounded-full flexc text-(--white-color) bg-(--main-color)  -bottom-2 -right-3 ">
                {productsFavorite.length}
              </span>
            </div>
          </Link>
          <span className="hover:text-(--main-color)">
            <IoHomeOutline />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;

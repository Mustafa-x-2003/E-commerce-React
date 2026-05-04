import React, { useContext, useState } from "react";
import { Link } from "react-router";

import { IoHomeOutline } from "react-icons/io5";
import { AiTwotoneAppstore } from "react-icons/ai";
// === import components ===

import MyContext from "../contexts/MyContext";

import SideBar from "../hero/SideBar";
import HeaderIcon from "./HeaderIcon";
import HeaderIcons from "./HeaderIcons";
// ================
const links = [
  { name: "Home", path: "/" },
  { name: "Categories", path: "/" },
  { name: "All Products", path: "/AllProductsPage" },
  { name: "About Use", path: "/AboutUse" },
  { name: "Contact", path: "/Contact" },
];
// Navigation
function Item({ name, path }) {
  const { allCategorys } = useContext(MyContext);
  return (
    <>
      {name === "Categories" ? (
        <li className="group lg:relative">
          {name}
          {/* divide-x divide-(--border-color) */}
          <ul className="w-150 grid grid-cols-3  text-center bg-(--white-color) transition-all duration-500 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 absolute z-500 shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] p-2 rounded-xl left-[50%] translate-x-[-50%] lg:top-6">
            {allCategorys.map((c) => {
              return (
                <li
                  key={c}
                  className="py-2 text-(--p-color) hover:text-(--main-color)!"
                >
                  <a href={`#${c}`}>{c.replace(/-/g, " ")}</a>
                </li>
              );
            })}
          </ul>
        </li>
      ) : (
        <Link to={path}>
          <li className="">{name}</li>
        </Link>
      )}
    </>
  );
}
function Header() {
  return (
    <div className="fixed  w-full  left-0 top-0 bg-(--white-color) shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] z-500 ">
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
        <div className="container   flexb flex-wrap   ">
          {/* Sidbar Button */}

          {/* logo */}
          <div className=" flexb w-full md:w-fit gap-2 text-xl md:text-2xl  font-bold">
            <SideBar links={links} />
            <Link className="text-(--main-color)">NovaCart</Link>
          </div>

          <ul className=" hidden lg:flex justify-between items-center gap-10  font-bold ">
            {links.map((l) => {
              return <Item name={l.name} path={l.path} />;
            })}
          </ul>

          {/* icons */}
          <div className=" hidden md:block">
            <HeaderIcons />
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div className=" border-t border-(--border-color) hidden md:block  lg:hidden  ">
        <ul className="flexb py-2 gap-10  font-bold  m-auto w-fit">
          {links.map((l) => {
            return <Item name={l.name} path={l.path} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;

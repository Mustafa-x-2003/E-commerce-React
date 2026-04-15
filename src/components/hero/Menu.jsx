import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";
const Language = ["English", "French", "Arabric"];
const Currency = ["USD - US Dollar", "Euro", "Pound"];
const LinksNav = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Product", path: "/Product" },
  { name: "Blogs", path: "/Blogs" },
  { name: "Contact Us", path: "/Contact" },
];

function Menu({ isShow, handelIsShow }) {
  return (
    <div
      className={`w-100 h-screen p-5 absolute right-0 top-0 z-100 bg-(--white-color) shadow-[0_0_10px_4px_rgba(0,0,0,.3)] ${isShow ? "show" : "heddin"} transition-all duration-300`}
    >
      <div class="flex gap-10 flex-col " data-navbar>
        <button
          onClick={() => handelIsShow(!isShow)}
          className="mt-5 cursor-pointer "
        >
          <IoMdClose className="text-2xl!" />
        </button>

        <div class="flexb">
          <ul class=" flex flex-col gap-3">
            <h2 class="font-bold text-lg">Language</h2>

            {Language.map((l) => {
              return (
                <li className="hover:text-(--main-color) ">
                  <Link>{l}</Link>
                </li>
              );
            })}
          </ul>

          <ul class=" flex flex-col gap-3">
            <h2 class="font-bold text-lg">Currency</h2>

            {Currency.map((c) => {
              return (
                <li className="hover:text-(--main-color) ">
                  <Link>{c}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <nav class="my-20">
          <ul class=" flex flex-col gap-3">
            {LinksNav.map((l) => {
              return (
                <li className="hover:text-(--main-color) ">
                  <Link to={l.path}> {l.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div class="flexb">
          <h2 class=" text-lg">Follow US On Socials</h2>

          <ul class="flex gap-5 items-center">
            <Link className="hover:text-(--main-color) transition-all duration-300 text-xl">
              <FaFacebook />
            </Link>
            <Link className="hover:text-(--main-color) transition-all duration-300 text-xl">
              <BsTwitterX />
            </Link>
            <Link className="hover:text-(--main-color) transition-all duration-300 text-xl">
              <FaLinkedinIn />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;

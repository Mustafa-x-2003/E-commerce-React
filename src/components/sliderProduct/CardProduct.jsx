import React, { useContext } from "react";

// icon
import { MdStar } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router";
// context
import MyContext from "../contexts/MyContext";

function Card({ product, handelDeleteItems, type = "" }) {
  const { handelAddItemsToCart, handelAddItemsToFavorite } =
    useContext(MyContext);
  if (type === "FEATUREDOLLECTION") {
    return (
      <div className="text-center text-lg  border border-(--border-color) hover:border-(--main-color) hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.1)] rounded-lg transition-all duration-300 flex flex-col items-start  relative group ">
        {/* === Icons === */}
        <div className=" absolute z-10 top-[50%] translate-[-50%] -right-10 w-20   overflow-hidden">
          <div className="flex text-(--main-color) flex-col items-center justify-between gap-3 translate-x-16  group-hover:translate-x-0 opacity-100 group-hover:opacity-100 transition-all duration-300">
            <span
              onClick={() => {
                handelAddItemsToCart(product);
              }}
              className="flex items-center justify-center hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 cursor-pointer w-10 h-10 rounded-full bg-(--bg-color)"
            >
              <FaCartArrowDown />
            </span>
            <span
              onClick={() => {
                handelAddItemsToFavorite(product);
              }}
              className="flex items-center justify-center hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 cursor-pointer w-10 h-10 rounded-full bg-(--bg-color)"
            >
              <FaRegHeart />
            </span>
            {handelDeleteItems ? (
              <span
                onClick={() => {
                  handelDeleteItems(product.id);
                }}
                className="flex items-center justify-center hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 cursor-pointer w-10 h-10 rounded-full bg-(--bg-color)"
              >
                <RiDeleteBin6Line />
              </span>
            ) : (
              <span className="flex items-center justify-center hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 cursor-pointer w-10 h-10 rounded-full bg-(--bg-color)">
                <FaShare />
              </span>
            )}
          </div>
        </div>
        {/* === /Icons === */}

        <Link to={`/ProductDetals/${product.id}`}>
          <div className="sm:flex justify-between">
            <div className="w-full sm:w-[40%] md:w-[40%]  pt-6 pb-7 px-9">
              <div className="m-auto  flex h-full flex-col justify-center ">
                <span className=" block border-t border-l  rounded-tl-lg border-(--border-color) group-hover:border-(--main-color)  absolute w-15 h-8 text-center content-center -top-0.25  -left-0.25  bg-(--main-color) text-(--white-color) ">
                  {product.discount}%
                </span>

                <img src={product.images?.[0]} alt="" className=" m-auto  " />
              </div>
            </div>

            <div className="w-[60%] flex flex-col justify-between  px-3 py-5">
              <h4 className="  w-full line-clamp-1 text-start">
                {product.title}
              </h4>
              <span className="pb-3"></span>
              <p className="text-start w-60 md:w-90 lg:w-60 line-clamp-3 ">
                {product.description}
              </p>
              <span className="flex text-yellow-400! py-3">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </span>
              <span className="font-bold text-xl flex text-start0">
                ${product.price}
              </span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
  if (type === "DiscountOnProducts") {
    return (
      <div className=" text-center text-lg  border border-(--border-color) hover:border-(--main-color) hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.1)] rounded-lg transition-all duration-300 flex flex-col items-start  relative group ">
        {/* === Icons === */}
        <div className=" absolute top-[50%] translate-[-50%] -right-10 w-20   overflow-hidden">
          <div className="flex text-(--main-color) flex-col items-center justify-between gap-3 translate-x-16  group-hover:translate-x-0 opacity-100 group-hover:opacity-100 transition-all duration-300">
            <span
              onClick={() => {
                handelAddItemsToCart(product);
              }}
              className="flex items-center justify-center hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 cursor-pointer w-10 h-10 rounded-full bg-(--bg-color)"
            >
              <FaCartArrowDown />
            </span>
            <span
              onClick={() => {
                handelAddItemsToFavorite(product);
              }}
              className="flex items-center justify-center hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 cursor-pointer w-10 h-10 rounded-full bg-(--bg-color)"
            >
              <FaRegHeart />
            </span>
            {handelDeleteItems ? (
              <span
                onClick={() => {
                  handelDeleteItems(product.id);
                }}
                className="flex items-center justify-center hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 cursor-pointer w-10 h-10 rounded-full bg-(--bg-color)"
              >
                <RiDeleteBin6Line />
              </span>
            ) : (
              <span className="flex items-center justify-center hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 cursor-pointer w-10 h-10 rounded-full bg-(--bg-color)">
                <FaShare />
              </span>
            )}
          </div>
        </div>
        {/* === Icons === */}

        <Link to={`/ProductDetals/${product.id}`}>
          <div className=" pt-6 pb-7 px-9  ">
            <span className=" block border-t border-l  rounded-tl-lg border-(--border-color) group-hover:border-(--main-color)  absolute w-15 h-8 text-center content-center -top-0.25  -left-0.25  bg-(--main-color) text-(--white-color) ">
              {product.discount}%
            </span>
            <img src={product.images?.[0]} alt="" className=" m-auto " />
          </div>

          <div className="px-3 py-5">
            <h4 className="truncate w-30 text-sm sm:text-[16px]  sm:w-40 md:w-40 xl:w-50 text-start">
              {product.title}
            </h4>n
            <span className="flex text-yellow-400! py-3">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </span>
            <span className="font-bold text-xl flex text-start0">
              ${product.price}
            </span>
          </div>
        </Link>
      </div>
    );
  }
  if (type === "") {
    return (
      <div className=" text-center text-lg  border border-(--border-color) hover:border-(--main-color) hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.1)] rounded-lg transition-all duration-300 flex flex-col items-start  relative group ">
        {/* === Icons === */}
        <div className=" absolute top-[50%] translate-[-50%] -right-10 w-20   overflow-hidden">
          <div className="flex text-(--main-color) flex-col items-center justify-between gap-3 translate-x-16  group-hover:translate-x-0 opacity-100 group-hover:opacity-100 transition-all duration-300">
            <span
              onClick={() => {
                handelAddItemsToCart(product);
              }}
              className="flex items-center justify-center hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 cursor-pointer w-10 h-10 rounded-full bg-(--bg-color)"
            >
              <FaCartArrowDown />
            </span>
            <span
              onClick={() => {
                handelAddItemsToFavorite(product);
              }}
              className="flex items-center justify-center hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 cursor-pointer w-10 h-10 rounded-full bg-(--bg-color)"
            >
              <FaRegHeart />
            </span>
            {handelDeleteItems ? (
              <span
                onClick={() => {
                  handelDeleteItems(product.id);
                }}
                className="flex items-center justify-center hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 cursor-pointer w-10 h-10 rounded-full bg-(--bg-color)"
              >
                <RiDeleteBin6Line />
              </span>
            ) : (
              <span className="flex items-center justify-center hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 cursor-pointer w-10 h-10 rounded-full bg-(--bg-color)">
                <FaShare />
              </span>
            )}
          </div>
        </div>
        {/* === Icons === */}

        <Link to={`/ProductDetals/${product.id}`}>
          <div className=" pt-6 pb-7 px-9  ">
            <img src={product.images?.[0]} alt="" className=" m-auto " />
          </div>

          <div className="px-3 py-5">
            <h4 className="truncate w-30 text-sm sm:text-[16px]  sm:w-40 md:w-40 xl:w-50 text-start">
              {product.title}
            </h4>
            <span className="flex text-yellow-400! py-3">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </span>
            <span className="font-bold text-xl flex text-start0">
              ${product.price}
            </span>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;

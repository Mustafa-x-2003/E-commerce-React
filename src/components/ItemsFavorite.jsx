import React, { useContext } from "react";
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import MyContext from "./contexts/MyContext";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router";
function ItemsFavorite({ product, handelDeleteItems }) {
  const { handelPlusCounter, handelMinusCounter } = useContext(MyContext);
  return (
    <div className="flex  py-10 border-b border-(--border-color) last:border-0">
      <div className="w-[10%] border border-(--border-color) rounded-xl">
        <img src={product.image} alt="" />
      </div>
      <div className="w-full px-4 flex flex-col justify-between ">
        <h2 className="  flexb w-full font-bold text-xl">
          <span>{product.name}</span>
          <span className="text-(--main-color)!">
            ${Math.floor(product.price) * product.count}
          </span>
        </h2>
        <div className="flexb p">
          <span className="flexb w-fit border rounded-lg border-(--border-color)">
            <span
              onClick={() => {
                handelMinusCounter(product.id);
              }}
              className="hover:text-(--main-color) text-(--p-color) text-2xl w-8 h-8  flexc cursor-pointer"
            >
              <GoDash />
            </span>
            <span className="w-8 flexc overflow-hidden text-(--main-color)! font-bold">
              {product.count}{" "}
            </span>
            <span
              onClick={() => {
                handelPlusCounter(product.id);
              }}
              className="hover:text-(--main-color) text-(--p-color) w-8 h-8  flexc cursor-pointer"
            >
              <FaPlus />
            </span>
          </span>
          <button className="flexb gap-2 hover:text-red-700">
            <p
              onClick={() => {
                handelDeleteItems(product.id);
              }}
              className=" text-xl cursor-pointer   flexc gap-2 rounded-lg hover:text-red-600! transition-all duration-300"
            >
              <RiDeleteBin6Line />
              <span className="text-lg">remove</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCartAndFav;

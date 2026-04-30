import React, { useContext } from "react";
// Icons
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import MyContext from "../components/contexts/MyContext";
import { IoArrowForwardOutline } from "react-icons/io5";

import { Link } from "react-router";
import ProductsContainer from "../components/ProductsContainer";
import CardProduct from "../components/sliderProduct/CardProduct";

function Item({ product, handelDeleteItems }) {
  const { handelPlusCounter, handelMinusCounter } = useContext(MyContext);

  return (
    <div className="flex flex-col lg:flex-row  py-10 border-b border-(--border-color) last:border-0">
      <div className=" lg:w-[20%] p-2 border border-(--border-color) rounded-xl">
        <img src={product.images[0]} alt="" />
      </div>

      <div className="w-full px-4 flex flex-col justify-between ">
        {/* title */}
        <h2 className=" py-4  lg:p-0 flexb w-full  md:text-lg">
          <span className="w-60  truncate text-start lg:w-full ">
            {product.title}
          </span>

          <span className=" hidden lg:block text-(--main-color)! text-xl">
            ${Math.floor(product.price) * product.count}
          </span>
        </h2>

        {/* price mini */}
        <div className=" flex justify-between items-center lg:hidden ">
          <span className=" text-(--main-color)! text-xl">
            ${Math.floor(product.price) * product.count}
          </span>
        </div>
        {/* remove */}
        <div className=" flexb pt-4">
          <span className="flex justify-between items-center w-fit border rounded-lg border-(--border-color)">
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
          <span></span>
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

function Favorite() {
  const { productsFavorite, setProductsFavorite } = useContext(MyContext);
  function handelDeleteItems(id) {
    setProductsFavorite((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="container">
    <div className="py-2 ">
        <h2 className="text-2xl md:text-2xl lg:text-3xl   flexb font-bold">
          Your Selection
          <p className="text-[16px] md:text-lg font-medium">
            <span className="text-(--main-color) ">
              {productsFavorite.length + " "}
            </span>
            items in your cart
          </p>
        </h2>
      </div>
     <div className=" shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] rounded-2xl px-4 ">
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-2 md:overflow-y-scroll h-full ">
        {productsFavorite.map((p) => {
          return <Item product={p} handelDeleteItems={handelDeleteItems} />;
        })}
      </div>
    </div>
    </div>
   
  );
}

export default Favorite;

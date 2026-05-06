import React, { useContext } from "react";
import MyContext from "./contexts/MyContext";
// Icons
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router";
import { toast } from "react-toastify";

export default function ItemsFavoriteAndCart({
  product,
  handelDeleteItems,
  parent = "",
}) {
  const { handelPlusCounter, handelMinusCounter } = useContext(MyContext);

  if (parent === "cart") {
    return (
      <div className="flex flex-col  lg:flex-row  py-10 border-b border-(--border-color) last:border-0">
        <div className=" lg:w-[20%] p-2 border border-(--border-color) rounded-xl">
          <img src={product.images[0]} alt="" />
        </div>

        <div className="w-full px-4 flex flex-col justify-between ">
          {/* title */}
          <h2 className=" py-4  lg:p-0 flexb w-full  md:text-lg">
            <span className="w-60 text-sm lg:text-lg truncate text-start lg:w-full ">
              {product.title}
            </span>

            <span className=" hidden lg:block text-(--main-color)! text-xl">
              ${Math.floor(product.price) * product.count}
            </span>
          </h2>

          {/* price mini and counter in mobile */}
          <div className=" flex flex-col justify-between gap-2 items-center lg:hidden ">
            <span className=" text-start w-full text-(--main-color)! text-s font-medium">
              ${Math.floor(product.price) * product.count}
            </span>
            <span className="text-sm flex justify-between self-start items-center w-fit border rounded-lg border-(--border-color)">
              <span
                onClick={() => {
                  handelMinusCounter(product.id);
                  toast.error("One item was removed 🛒", {
                    position: "bottom-right",
                    autoClose: 2000,
                  });
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
                  toast.success("One item was added 🛒", {
                    position: "bottom-right",
                    autoClose: 2000,
                  });
                }}
                className="hover:text-(--main-color) text-(--p-color) w-8 h-8  flexc cursor-pointer"
              >
                <FaPlus />
              </span>
            </span>
          </div>

          {/* remove */}
          <div className=" flexb pt-4">
            <span className=" hidden lg:flex justify-between items-center w-fit border rounded-lg border-(--border-color)">
              <span
                onClick={() => {
                  handelMinusCounter(product.id);
                  toast.error("One item was removed 🛒", {
                    position: "bottom-right",
                    autoClose: 2000,
                  });
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
                  toast.success("One item was added 🛒", {
                    position: "bottom-right",
                    autoClose: 2000,
                  });
                }}
                className="hover:text-(--main-color) text-(--p-color) w-8 h-8  flexc cursor-pointer"
              >
                <FaPlus />
              </span>
            </span>
            <span></span>
            <span className="flexb  w-full lg:w-auto gap-2 hover:text-red-700">
              <p
                onClick={() => {
                  handelDeleteItems(product.id);
                  toast.error("Removed From Cart 🛒", {
                    position: "bottom-right",
                    autoClose: 2000,
                  });
                }}
                className=" text-start w-full lg:w-auto text-xl cursor-pointer  flex  items-center lg:justify-center gap-2 rounded-lg hover:text-red-600! transition-all duration-300"
              >
                <RiDeleteBin6Line />
                <span className="text-lg">remove</span>
              </p>
            </span>
          </div>
        </div>
      </div>
    );
  } else if (parent === "favorite") {
    return (
      <div className="flex flex-col  lg:flex-row  py-10 border-b border-(--border-color) last:border-0">
        <div className=" lg:w-[20%] p-2 border border-(--border-color) rounded-xl">
          <img src={product.images[0]} alt="" />
        </div>

        <div className="w-full px-4 flex flex-col justify-between ">
          {/* title */}
          <h2 className=" py-4  lg:p-0 flexb w-full  md:text-lg">
            <span className="w-60 text-sm lg:text-lg truncate text-start lg:w-full ">
              {product.title}
            </span>

            <span className=" hidden lg:block text-(--main-color)! text-xl">
              ${Math.floor(product.price) * product.count}
            </span>
          </h2>

          {/* price mini and counter in mobile */}
          <div className=" flex flex-col justify-between gap-2 items-center lg:hidden ">
            <span className=" text-start w-full text-(--main-color)! text-s font-medium">
              ${Math.floor(product.price) * product.count}
            </span>
          </div>

          {/* remove */}
          <div className=" flexb pt-4">
            <span></span>
            <span className="flexb  w-full lg:w-auto gap-2 hover:text-red-700">
              <p
                onClick={() => {
                  handelDeleteItems(product.id);
                  toast.error("Removed From Favorits 🩶", {
                    position: "bottom-right",
                    autoClose:2000
                  });
                }}
                className=" text-start w-full lg:w-auto text-xl cursor-pointer  flex  items-center lg:justify-center gap-2 rounded-lg hover:text-red-600! transition-all duration-300"
              >
                <RiDeleteBin6Line />
                <span className="text-lg">remove</span>
              </p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

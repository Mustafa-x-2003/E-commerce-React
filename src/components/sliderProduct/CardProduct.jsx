import React, { useContext } from "react";

// icon
import { MdStar } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { Link } from "react-router";
// context
import MyContext from "../contexts/MyContext";

function Card({ name, price, image, id }) {
  const { productsCart, setProductsCart } = useContext(MyContext);
  console.log(useContext(MyContext));

  return (
    <div className=" text-center text-lg  border border-(--border-color) hover:border-(--main-color) hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.1)] rounded-lg transition-all duration-300 flex flex-col items-start  relative group ">
      {/* === Icons === */}
      <div className=" absolute top-[50%] translate-[-50%] -right-10 w-20   overflow-hidden">
        <div className="flex text-(--main-color) flex-col items-center justify-between gap-3 translate-x-16  group-hover:translate-x-0 opacity-100 group-hover:opacity-100 transition-all duration-300">
          <span
            onClick={() => {
              setProductsCart((pre) => [...pre, id]);
              console.log(productsCart);
            }}
            className="flex items-center justify-center hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 cursor-pointer w-10 h-10 rounded-full bg-(--bg-color)"
          >
            <FaCartArrowDown />
          </span>
          <span className="flex items-center justify-center hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 cursor-pointer w-10 h-10 rounded-full bg-(--bg-color)">
            <FaRegHeart />
          </span>
          <span className="flex items-center justify-center hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 cursor-pointer w-10 h-10 rounded-full bg-(--bg-color)">
            <FaShare />
          </span>
        </div>
      </div>
      {/* === Icons === */}

      <Link to={`/ProductDetals/${id}`}>
        <div className="flex  items-center justify-center pt-6 pb-7 px-9  ">
          <img src={image} alt="" />
        </div>

        <div className="px-3 py-5">
          <h4 className="truncate w-55 text-start">{name}</h4>
          <span className="flex text-yellow-400! py-3">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </span>
          <span className="font-bold text-xl flex text-start0">${price}</span>
        </div>
      </Link>
    </div>
  );
}

export default Card;

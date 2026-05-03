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
import ItemsFavoriteAndCart from "../components/ItemsFavoriteAndCart";

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
            return (
              <ItemsFavoriteAndCart
                parent="favorite"
                product={p}
                handelDeleteItems={handelDeleteItems}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Favorite;

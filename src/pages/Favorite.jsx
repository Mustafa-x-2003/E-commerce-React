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
          <span className="flexb w-fit border rounded-lg border-(--border-color)"></span>
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

      <ProductsContainer colsCount={'grid-cols-5'}>
        {productsFavorite.map((p) => {
          return (
            <CardProduct
              name={p.title}
              price={p.price}
              image={p.image}
              id={p.id}
              handelDeleteItems={handelDeleteItems}
            />
          );
        })}
      </ProductsContainer>

  );
}

export default Favorite;

/*
<div className="w-[70%] shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] rounded-2xl px-4 ">
          <div className="  overflow-y-scroll h-full ">
            {productsCart.map((p) => {
              return (
                <ItemCartAndFav
                  product={p}
                  handelDeleteItems={handelDeleteItems}
                />
              );
            })}
          </div>
        </div>
*/

import React, { useContext, useEffect, useState } from "react";
// Icons
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import MyContext from "../components/contexts/MyContext";

function Item({ image, title, price, id, handelDeleteItems }) {
  const [count, setCount] = useState(1);

  return (
    <div className="flex py-10 border-b border-(--border-color) last:border-0">
      <div className="w-[15%] border border-(--border-color) rounded-xl">
        <img src={image} alt="" />
      </div>
      <div className="w-[80%] px-4 flex flex-col justify-between ">
        <h2 className="flexb w-full font-bold text-xl">
          <span>{title}</span>
          <span>${price}</span>
        </h2>
        <div className="flexb p">
          <span className="flexb w-fit">
            <span
              onClick={() => {
                if (count !== 1) setCount(count - 1);
              }}
              className="w-8 h-8 border rounded-lg border-(--border-color) flexc cursor-pointer"
            >
              <GoDash />
            </span>
            <span className="w-8 flexc overflow-hidden ">{count} </span>
            <span
              onClick={() => {
                setCount(count + 1);
              }}
              className="w-8 h-8 rounded-lg border border-(--border-color) flexc cursor-pointer"
            >
              <FaPlus />
            </span>
          </span>
          <button className="flexb gap-2 hover:text-red-700">
            <p
              onClick={() => {
                handelDeleteItems(id);
              }}
              className="w-10 h-10 text-xl cursor-pointer  border border-(--border-color) hover:border-red-600 flexc rounded-lg hover:text-red-600! transition-all duration-300"
            >
              <RiDeleteBin6Line />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

function CartPage() {
  const { productsCart, setProductsCart } = useContext(MyContext);


  return (
    <div className="container gap-10 flex justify-between">
      <div className="w-[70%]">
        {productsCart.map((p) => {
          return (
            <Item
              image={p.image}
              id={p.id}

              title={p.name}
              price={p.price}
            />
          );
        })}
      </div>
      <div className="w-[30%] h-150 bg-amber-600"></div>
    </div>
  );
}

export default CartPage;

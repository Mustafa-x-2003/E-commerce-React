import React, { useContext, useEffect, useState } from "react";
// Icons
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import MyContext from "../components/contexts/MyContext";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router";

function Item({ image, title, price, id, handelDeleteItems }) {
  const [count, setCount] = useState(1);

  return (
    <div className="flex py-10 border-b border-(--border-color) last:border-0">
      <div className="w-[12%] border border-(--border-color) rounded-xl">
        <img src={image} alt="" />
      </div>
      <div className="w-[80%] px-4 flex flex-col justify-between ">
        <h2 className=" flexb w-full font-bold text-xl">
          <span>{title}</span>
          <span className="text-(--main-color)!">${price}</span>
        </h2>
        <div className="flexb p">
          <span className="flexb w-fit border rounded-lg border-(--border-color)">
            <span
              onClick={() => {
                if (count !== 1) setCount(count - 1);
              }}
              className="hover:text-(--main-color) text-(--p-color) text-2xl w-8 h-8  flexc cursor-pointer"
            >
              <GoDash />
            </span>
            <span className="w-8 flexc overflow-hidden text-(--main-color)! font-bold">
              {count}{" "}
            </span>
            <span
              onClick={() => {
                setCount(count + 1);
              }}
              className="hover:text-(--main-color) text-(--p-color) w-8 h-8  flexc cursor-pointer"
            >
              <FaPlus />
            </span>
          </span>
          <button className="flexb gap-2 hover:text-red-700">
            <p
              onClick={() => {
                handelDeleteItems(id);
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

function CartPage() {
  const { productsCart, setProductsCart } = useContext(MyContext);
  function handelDeleteItems(id) {
    setProductsCart((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="container  ">
      <div className="py-10">
        <p className="flexb text-lg gap-2 w-fit">
          <span className="bg-blue-200 py-1 font-medium text-(--main-color) px-4 text-sm rounded-full">
            Step 1 of 3
          </span>{" "}
          Shopping Cart
        </p>
        <h2 className="text-2xl flexb font-bold">
          Your Selection
          <p className="text-lg font-medium"> <span className="text-(--main-color)">3</span> items in your cart</p>
        </h2>
      </div>
      <div className=" h-150 gap-10 flex justify-between">
        <div className="w-[70%]  rounded-2xl px-4  overflow-y-scroll">
          {productsCart.map((p) => {
            return (
              <Item
                image={p.image}
                id={p.id}
                handelDeleteItems={handelDeleteItems}
                title={p.name}
                price={p.price}
              />
            );
          })}
        </div>
        <div className="w-[30%] h-fit   px-4 bg-(--white-color) shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] rounded-2xl ">
          <div className="py-2">
            <h2 className="text-xl font-bold py-8">Order Summary</h2>
            <p className="flexb py-2">
              Suptotal:{" "}
              <span className="text-xl font-bold text-(--color-heading) ">
                $10
              </span>
            </p>
            <p className="py-2 flexb">
              Shipping{" "}
              <span className="text-xl font-bold text-(--color-heading) ">
                Free
              </span>
            </p>
            <p className="py-2 flexb">
              Estimated Tax{" "}
              <span className="text-xl font-bold text-(--color-heading)  ">
                $70
              </span>
            </p>
          </div>

          <div className="py-4 flex flex-col gap-2 border-t-2 border-(--border-color)">
            <div className="flexb pt-2 pb-4 ">
              <p className="flexb gap-2">
                <span>Total Price</span>
                <span>(Including VAT)</span>
              </p>
              <span className="text-xl font-bold text-(--color-heading)">
                $9999
              </span>
            </div>

            <Link className="flexc font-bold py-4 gap-2 border-2 border-(--main-color) bg-(--main-color) text-(--white-color) rounded-lg  hover:bg-transparent hover:text-(--main-color) transition-all duration-300">
              <span>Proceed to Checkout</span>
              <IoArrowForwardOutline />
            </Link>
            <Link className="flexc font-bold py-4 gap-2 border-2 border-(--main-color) bg-transparent  rounded-lg  text-(--main-color)">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

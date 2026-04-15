import React from "react";
// Icons
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

function Item({ image, title, price }) {
  return (
    <div className="flexb">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h2>
          <span>{title}</span>
          <span>${price}</span>
        </h2>
        <div>
          <span>
            <span>
              <GoDash />
            </span>
            <span>1</span>
            <span>
              <FaPlus />
            </span>
          </span>
          <button>
            <RiDeleteBin6Line />
            <p>Remove</p>
          </button>
        </div>
      </div>
    </div>
  );
}

function CartPage() {
  return (
    <div>
      <div>
        <Item />
      </div>
    </div>
  );
}

export default CartPage;

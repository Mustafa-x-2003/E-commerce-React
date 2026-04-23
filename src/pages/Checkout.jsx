import React, { useContext, useState } from "react";
import { Link } from "react-router";
import MyContext from "../components/contexts/MyContext";
function Item({ product }) {
  return (
    <div className="flexb py-2 border-b border-(--border-color) last:border-0">
      <div className="w-[40%] border border-(--border-color) rounded-xl">
        <img src={product.images[0]} alt="" />
      </div>
      <div className="w-[60%] pl-2">
        <h2 className="flex flex-col w-full font-bold text-">
          <span className=" truncate text-start lg:w-full ">
            {product.title}
          </span>
          <span className="py-3 text-sm">Count {product.count}</span>
          <span className="text-(--main-color)!">
            ${Math.floor(product.price) * product.count}
          </span>
        </h2>
      </div>
    </div>
  );
}
function Checkout() {
  const { productsCart, setProductsCart } = useContext(MyContext);
  const [dataCheckout, setDataCheckout] = useState({
    firstName: "",
    LastName: "",
    Address: "",
    City: "",
    State: "",
    ZipCode: "",
    PhoneNumber: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="container  md:flex gap-10 justify-between "
    >
      <div className=" md:w-[60%] shadow-[0_0_10px_4px_rgba(0,0,0,0.1)]  p-4 rounded-2xl h-fit ">
        <div className="lg:flex justify-between  gap-2">
          <div className=" lg:w-1/2">
            <h2>first Name</h2>
            <input
              value={dataCheckout.firstName}
              onChange={(e) => {
                setDataCheckout((c) => ({ ...c, firstName: e.target.value }));
                console.log(dataCheckout);
              }}
              className="w-full mt-2 mb-5  py-2 px-4 border! border-(--border-color)! rounded-lg"
              type="text"
              placeholder="your First Name..."
            />
          </div>

          <div className="lg:w-1/2">
            <h2>Last Name</h2>
            <input
              value={dataCheckout.LastName}
              onChange={(e) => {
                setDataCheckout((c) => ({ ...c, LastName: e.target.value }));
              }}
              className="w-full mt-2 py-2 px-4 border! border-(--border-color)! rounded-lg"
              type="text"
              placeholder="your Last Name..."
            />
          </div>
        </div>

        <div className="pt-5">
          <h2>Address</h2>
          <input
            value={dataCheckout.Address}
            onChange={(e) => {
              setDataCheckout((c) => ({ ...c, Address: e.target.value }));
            }}
            className="w-full mt-2 py-2 px-4 border! border-(--border-color)! rounded-lg"
            type="text"
            placeholder="your Address..."
          />
        </div>

        <div className="lg:flex flex-wrap py-7 justify-between ">
          <div className="">
            <h2>City</h2>
            <input
              value={dataCheckout.City}
              onChange={(e) => {
                setDataCheckout((c) => ({ ...c, City: e.target.value }));
              }}
              className="w-full mt-2 py-2 px-4 border! border-(--border-color)! rounded-lg"
              type="text"
              placeholder="your City..."
            />
          </div>

          <div className="">
            <h2>State</h2>
            <input
              value={dataCheckout.State}
              onChange={(e) => {
                setDataCheckout((c) => ({ ...c, State: e.target.value }));
              }}
              className="w-full mt-2 py-2 px-4 border! border-(--border-color)! rounded-lg"
              type="text"
              placeholder="your State..."
            />
          </div>
          <div className="">
            <h2>ZipCode</h2>
            <input
              value={dataCheckout.ZipCode}
              onChange={(e) => {
                setDataCheckout((c) => ({ ...c, ZipCode: e.target.value }));
              }}
              className="w-full mt-2 py-2 px-4 border! border-(--border-color)! rounded-lg"
              type="text"
              placeholder="your  ZipCode..."
            />
          </div>
        </div>

        <div className="">
          <h2>PhoneNumber</h2>
          <input
            value={dataCheckout.PhoneNumber}
            onChange={(e) => {
              setDataCheckout((c) => ({ ...c, PhoneNumber: e.target.value }));
            }}
            className="w-full mt-2 py-2 px-4 border! border-(--border-color)! rounded-lg"
            type="text"
            placeholder="your  PhoneNumber..."
          />
        </div>

        <span className="block text-center text-xl transition-all duration-300 py-2 px-4 bg-(--main-color) text-(--white-color) rounded-lg mt-7 cursor-pointer border-2 border-(--main-color) hover:bg-transparent hover:text-(--main-color)">
          Continue to Payment
        </span>
      </div>

      <div className="w-full md:w-[40%]  h-fit shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] rounded-xl px-4">
        <div>
          <h2 className="text-2xl flexb py-4 border-b border-(--border-color)">
            Order Summary{" "}
            <span className="text-sm">{productsCart.length}</span>{" "}
          </h2>
        </div>
        <div className="overflow-y-scroll max-h-100">
          {productsCart.map((p) => {
            return <Item product={p} />;
          })}
        </div>
        <div className="border-y  border-(--border-color)">
          <p className="flexb py-2">
            Suptotal <span className="text-(--color-heading)">$10</span>
          </p>
          <p className="flexb py-2">
            Shipping <span className="text-(--color-heading)">Free</span>
          </p>
          <p className="flexb py-2">
            Estimated Tax <span className="text-(--color-heading)">$10</span>
          </p>
          <div className="flexb border-t border-dashed  border-(--border-color) py-2">
            <span>Total</span>
            <span>$427.40</span>
          </div>
        </div>

        <div>
          <Link>
            <span className="block border-2 border-(--main-color) transition-all duration-300 hover:bg-transparent hover:text-(--main-color) py-2 px-4  bg-(--main-color) rounded-lg my-4 text-(--white-color)">
              Complete Purchase
            </span>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Checkout;

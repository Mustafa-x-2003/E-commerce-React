import React, { useContext } from "react";
// Icons
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import MyContext from "../components/contexts/MyContext";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router";
import ItemsFavoriteAndCart from "../components/ItemsFavoriteAndCart";

function CartPage() {
  const { productsCart, setProductsCart } = useContext(MyContext);

  function handelDeleteItems(id) {
    setProductsCart((prev) => prev.filter((p) => p.id !== id));
  }

  const suptotale = Math.floor(
    productsCart.reduce((acc, current) => {
      return acc + Math.floor(current.price) * current.count;
    }, 0),
  );
  const EstimatedTax = Math.floor(suptotale / 50);
  const totalePrice = suptotale - EstimatedTax;

  return (
    <div className="container ">
      <div className="py-2 ">
        <h2 className="text-2xl md:text-2xl lg:text-3xl   flexb font-bold">
          Your Selection
          <p className="text-[16px] md:text-lg font-medium">
            <span className="text-(--main-color) ">
              {productsCart.length + " "}
            </span>
            items in your cart
          </p>
        </h2>
      </div>

      <div className="lg:h-170 gap-4 flex flex-col lg:flex-row md:justify-between ">
        <div className="w-full  lg:[60%] xl:w-[70%] shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] rounded-2xl px-4 ">
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 lg:block md:overflow-y-scroll h-full ">
            {productsCart.map((p) => {
              return (
                <ItemsFavoriteAndCart
                  parent="cart"
                  product={p}
                  handelDeleteItems={handelDeleteItems}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-5 md:m-0  lg:w-[40%] xl:w-[30%] h-fit   px-4 bg-(--white-color) shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] rounded-2xl ">
          <div className="py-2">
            <h2 className="text-xl font-bold py-8">Order Summary</h2>
            <p className="flexb py-2">
              Suptotal:{" "}
              <span className="text-xl font-bold text-(--color-heading) ">
                ${suptotale}
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
                ${EstimatedTax}
              </span>
            </p>
          </div>

          <div className="py-4 flex flex-col gap-2 border-t-2 border-(--border-color)">
            <div className="flexb pt-2 pb-4 ">
              <p className="flexb">
                <span>Total Price</span>
              </p>
              <span className="text-xl  font-bold text-(--color-heading)">
                ${totalePrice}
              </span>
            </div>

            <Link
              to={"/Checkout"}
              className="flexc font-bold py-4 gap-2 border-2 border-(--main-color) bg-(--main-color) text-(--white-color) rounded-lg  hover:bg-transparent hover:text-(--main-color) transition-all duration-300"
            >
              <span className="xl:text-lg">Proceed to Checkout</span>
              <IoArrowForwardOutline />
            </Link>
            <Link
              to={"/AllProductsPage"}
              className="xl:text-lg flexc font-bold py-4 gap-2 border-2 border-(--main-color) bg-transparent  rounded-lg  text-(--main-color)"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

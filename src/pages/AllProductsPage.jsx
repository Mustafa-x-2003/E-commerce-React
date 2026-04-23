import React, { useContext, useEffect, useState } from "react";
import Select from "../components/Select";
import CardProduct from "../components/sliderProduct/CardProduct";
import MyContext from "../components/contexts/MyContext";
import ProductsContainer from "../components/ProductsContainer";
import { IoMenuSharp } from "react-icons/io5";

function AllProductsPage() {
  const [products, setProductes] = useState(null);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const { categorys, search } = useContext(MyContext);
  const [loadProducts, setLoadProductes] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const result = await Promise.all(
          categorys.map(async (c) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${c}`,
            );
            const data = await res.json();

            return data.products;
          }),
        );

        const allProducts = result.flat();
        setProductes(allProducts);
        setLoadProductes(false);
      } catch (error) {
        console.log("fetch product", error);
      }
    }
    fetchProducts();
  }, [categorys]);
  return (
    <div className="container">
      <div className=" fixed top-28 md:top-39 pt-3 pb-10 container w-full z-50 bg-(--white-color) ">
        <span
          onClick={() => {
            setIsShowFilter(!isShowFilter);
          }}
          className="flexb gap-2 w-fit rounded-xl cursor-pointer border-2  border-(--main-color)    text-(--main-color) py-1 px-4 text-center"
        >
          <IoMenuSharp /> Filter
        </span>
        <div className="bg-(--white-color) relative ">
          <div
            className={`${isShowFilter ? "left-0 " : "-left-75 lg:-left-130 xl:-left-130 "} z-50  transition-all duration-500   absolute top-4    w-fit  `}
          >
            <Select />
          </div>
        </div>
      </div>

      <div className="pt-16">
        <ProductsContainer
          gridStile={"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}
        >
          {loadProducts ? (
            <p>load..</p>
          ) : search === "" ? (
            products.map((p) => {

              
          return <CardProduct  product={p} />;
            })
          ) : (
            products.map((p) => {
              if (p.title.startsWith(search)) {
                return <CardProduct  product={p} />;
              }
            })
          )}
        </ProductsContainer>
      </div>
    </div>
  );
}

export default AllProductsPage;

import React, { useContext, useEffect, useState } from "react";
import SelectCategory from "../components/SelectCategory";
import CardProduct from "../components/sliderProduct/CardProduct";
import MyContext from "../components/contexts/MyContext";
import ProductsContainer from "../components/ProductsContainer";
import { IoMenuSharp } from "react-icons/io5";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function AllProductsPage() {
  const [products, setProductes] = useState(null);

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
    <>
      <div className="container ">
        <SelectCategory />
        <div className="pt-2">
          <ProductsContainer
            gridStile={
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            }
          >
            {loadProducts ? (
              <p>load..</p>
            ) : search === "" ? (
              products.map((p) => {
                return <CardProduct product={p} />;
              })
            ) : (
              products.map((p) => {
                if (p.title.startsWith(search)) {
                  return <CardProduct product={p} />;
                }
              })
            )}
          </ProductsContainer>
        </div>
      </div>
    </>
  );
}

export default AllProductsPage;

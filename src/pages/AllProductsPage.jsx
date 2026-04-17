import React, { useContext, useEffect, useState } from "react";
import Select from "../components/Select";
import CardProduct from "../components/sliderProduct/CardProduct";
import MyContext from "../components/contexts/MyContext";
import ProductsContainer from "../components/ProductsContainer";

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
    <div className="container flex ">
      <div className="w-[20%]">
        <Select />
      </div>

      <ProductsContainer colsCount={"grid-cols-4"}>
        {loadProducts ? (
          <p>load..</p>
        ) : search === "" ? (
          products.map((p) => {
            return (
              <CardProduct
                name={p.title}
                price={p.price}
                image={p.images?.[0]}
                id={p.id}
              />
            );
          })
        ) : (
          products.map((p) => {
            if (p.title.startsWith(search)) {
              return (
                <CardProduct
                  name={p.title}
                  price={p.price}
                  image={p.images?.[0]}
                  id={p.id}
                />
              );
            }
          })
        )}
      </ProductsContainer>
    </div>
  );
}

export default AllProductsPage;

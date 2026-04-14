import React, { useContext, useEffect, useState } from "react";
import Select from "../components/Select";
import CardProduct from "../components/sliderProduct/CardProduct";
import Categorys from "../components/contexts/Categorys";

function CartPage() {
  const [products, setProductes] = useState(null);
  const {categorys , setCategorys , search , setSearch} = useContext(Categorys);
  const [loadProducts, setLoadProductes] = useState(true);

  if (!loadProducts) {
    // console.log(products[0][0]);
  }

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
    <Categorys.Provider value={{ categorys, setCategorys }}>
      <div className="container flex py-10">
        <div className="w-[20%]">
          <Select />
        </div>
        <div className="w-[80%] grid grid-cols-4 gap-4">
          {loadProducts ? (
            <p>load..</p>
          ) : (
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
          )}
        </div>
      </div>
    </Categorys.Provider>
  );
}

export default CartPage;

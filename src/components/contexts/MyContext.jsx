import { createContext, useEffect, useState } from "react";
const allCategorys = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];
const MyContext = createContext();
export function MyProviderContext({ children }) {
  // === Categorys ===
  const [categorys, setCategorys] = useState(() => {
    try {
      const data = localStorage.getItem("category");
      return data ? JSON.parse(data) : allCategorys;
    } catch (error) {
      console.log("localstorasge categorys", error);
      return allCategorys;
    }
  });
  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(categorys));
  }, [categorys]);
  // === search ===
  const [search, setSearch] = useState(() => {
    try {
      const data = localStorage.getItem("search");
      return data ? JSON.parse(data) : "";
    } catch (error) {
      console.log("localstorage search", error);
      return "";
    }
  });
  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(search));
  }, [search]);

  // === productsCart ===

  const [productsCart, setProductsCart] = useState(() => {
    try {
      const data = localStorage.getItem("productsCart");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.log("localstorage cartitems", error);
      return [];
    }
  });
  useEffect(()=>{
    localStorage.setItem('productsCart',JSON.stringify(productsCart))
  },[productsCart])
  function handelCartItems(value) {
    setProductsCart((prev) => {
      const ele = prev.find((e) => {
        return e.id === value.id;
      });
      if (ele) {
        return prev;
      } else {
        return [...prev, value];
      }
    });
  }

  return (
    <MyContext.Provider
      value={{
        categorys,
        setCategorys,
        search,
        setSearch,
        productsCart,
        handelCartItems,
        setProductsCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;

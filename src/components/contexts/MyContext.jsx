import { createContext, useEffect, useState } from "react";
const allCategorys = [
  "laptops",
  "smartphones",
  "tablets",
  "mobile-accessories"
]
const MyContext = createContext();
export function MyProviderContext({ children }) {
  // === Categorys ===
  const [categorys, setCategorys] = useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem("category"));

      return data.length === 0 ? allCategorys : data;
    } catch (error) {
      console.log("localstorasge categorys", error);
      return allCategorys;
    }
  });
  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(categorys));
  }, [categorys]);

  const isDefault =
    categorys.length === allCategorys.length &&
    categorys.every((c) => allCategorys.includes(c));
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

  function handelAddItemsToCart(value) {
    setProductsCart((prev) => {
      const ele = prev.find((e) => {
        return e.id === value.id;
      });
      if (ele) {
        return prev;
      } else {
        return [...prev, { ...value, count: 1 }];
      }
    });
  }

  useEffect(() => {
    localStorage.setItem("productsCart", JSON.stringify(productsCart));
  }, [productsCart]);

  // productsFavorite
  const [productsFavorite, setProductsFavorite] = useState(() => {
    try {
      const data = localStorage.getItem("productsFavorite");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.log("localstorage cartitems", error);
      return [];
    }
  });
  function handelAddItemsToFavorite(value) {
    setProductsFavorite((prev) => {
      const ele = prev.find((e) => {
        return e.id === value.id;
      });
      if (ele) {
        return prev;
      } else {
        return [...prev, { ...value, count: 1 }];
      }
    });
  }
  useEffect(() => {
    localStorage.setItem("productsFavorite", JSON.stringify(productsFavorite));
  }, [productsFavorite]);
  // ===============

  function handelPlusCounter(id) {
    setProductsCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p)),
    );
  }

  function handelMinusCounter(id) {
    setProductsCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, count: p.count > 1 ? p.count - 1 : p.count } : p,
      ),
    );
  }

  return (
    <MyContext.Provider
      value={{
        categorys,
        setCategorys,
        search,
        setSearch,
        productsCart,
        handelAddItemsToCart,
        setProductsCart,
        isDefault,
        handelPlusCounter,
        handelMinusCounter,
        productsFavorite,
        setProductsFavorite,
        handelAddItemsToFavorite,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;

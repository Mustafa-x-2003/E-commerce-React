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

  // All Products
  const [products, setProducts] = useState();
  const [loadproducts, setLoadProducts] = useState(true);
  useEffect(() => {
    const fetchProducts = async function () {
      try {
        const results = await Promise.all(
          allCategorys.map(async (c) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${c}`,
            );
            const data = await res.json();

            return {
              [c]: data.products.map((p) => {
                return { ...p, discount: Math.floor(Math.random() * 30) + 10 };
              }),
            };
          }),
        );
        const allProducts = Object.assign({}, ...results);
        setProducts(allProducts);
        setLoadProducts(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
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
        products,
        loadproducts,
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
        allCategorys,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;

import { createContext, useState } from "react";
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
const Categorys = createContext();
export function MyProviderContext({ children }) {
  const [categorys, setCategorys] = useState(allCategorys);

  const [search, setSearch] = useState(null);

  return (
    <Categorys.Provider value={{ categorys, setCategorys, search, setSearch }}>
      {children }
    </Categorys.Provider>
  );
}

export default Categorys;

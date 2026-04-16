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
const MyContext = createContext();
export function MyProviderContext({ children }) {
  const [categorys, setCategorys] = useState(allCategorys);
  const [search, setSearch] = useState("");
  const [productsCart, setProductsCart] = useState([]);
  function handelCartItems(value) {
    setProductsCart((prev) =>{
      const ele = prev.find((e)=>{
        return e.id === value.id
        
      })
      if(ele){
          return prev
        }else{
          return [...prev,value]
        }
    })
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
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;

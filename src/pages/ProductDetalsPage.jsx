import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
// icons
import { MdStar } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import ProductsContainer from "../components/ProductsContainer";
import CardProduct from "../components/sliderProduct/CardProduct";
import SliderProduct from "../components/sliderProduct/SliderProduct";
import MyContext from "../components/contexts/MyContext";

function ProductDetals() {
  const { handelAddItemsToCart, handelAddItemsToFavorite } =useContext(MyContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState({});
  const [loadproduct, setLoadProduct] = useState(true);
  const [loadproducts, setLoadProducts] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoadProduct(false);
      } catch (error) {
        console.log("fetch product detals", error);
      }
    }
    fetchProduct();
  }, [id]);
  useEffect(() => {
    if (!loadproduct) {
      async function fetchProducts() {
        try {
          const res = await fetch(
            `https://dummyjson.com/products/category/${product.category}`,
          );
          const data = await res.json();
          setProducts(data.products);
          setLoadProducts(false);
        } catch (error) {
          console.log("fetch product detals", error);
        }
      }
      fetchProducts();
    }
  }, [product]);
  return (
    <div className="container">
      {loadproduct ? (
        <p>Loading...</p>
      ) : (
        <div id="productDetails" className="flex flex-col md:flex-row  justify-between gap-10 md:pb-10">
          <div className="flex self-center h-117.5  md:w-[40%] flex-col   items-center">
            <div className="w-full  flex items-center justify-center ">
              <img
                id={"bigImage"}
                src={product.images[0]}
                alt=""
                className="w-auto! h-112.5 md:mb-5"
              />
            </div>

            <div className="flex justify-between h-34.5 w-full  ">
              {product.images.map((image) => {
                return (
                  <div className="w-[30%]! cursor-pointer">
                    <img
                      src={image}
                      alt=""
                      
                      onClick={() => {
                        document.querySelector("#bigImage").src = image;
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-center md:w-[58%] py-12.5">
            <h2 className="text-xl truncate w-full md:text-3xl font-bold text-(--main-color)! py-5">
              {product.title}
            </h2>
            <h2 className="flex text-2xl text-yellow-400! py-2">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </h2>
            <p className="py-2 text-2xl">$ {product.price}</p>
            <p className="py-3 text-(--color-heading)!  text-lg">
              Availability:<span> {product.availabilityStatus} </span>
            </p>
            <p className="py-3  text-(--color-heading)! text-lg">
              Brand:<span> {product.brand} </span>
            </p>
            <p className="py-3">{product.description}</p>
            <span className="py-3">{product.returnPolicy}</span>
            <button 
            onClick={()=>{
              handelAddItemsToCart(product)
            }}
            className="my-3 bg-(--main-color) hover:bg-transparent hover:text-(--main-color) cursor-pointer border-2! hover:border-(--main-color)! transition-all duration-300 flex items-center gap-4 text-(--white-color) max-w-fit py-2 px-4 rounded-sm ">
              Add to cart <FaCartArrowDown />
            </button>
            <div className="flexb py-3 gap-5 w-fit">
              <span 
              onClick={()=>{
                handelAddItemsToFavorite(product)
                
              }}
              className="flex items-center cursor-pointer hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 justify-center w-12 h-12 rounded-full bg-(--bg-color)">
                <FaRegHeart />
              </span>
              <span className="flex items-center cursor-pointer hover:bg-(--main-color) hover:text-(--white-color) transition-all duration-300 justify-center w-12 h-12 rounded-full bg-(--bg-color)">
                <FaShare />
              </span>
            </div>
          </div>
        </div>
      )}

      {loadproducts ? (
        <p>Loading...</p>
      ) : (
        <SliderProduct title={product.category} products={products} />
      )}
    </div>
  );
}

export default ProductDetals;

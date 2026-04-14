import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HomeSlider from "../components/hero/HomeSlider";
import SliderProduct from "../components/sliderProduct/SliderProduct";

// categorys
const categorys = [
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
import image1 from "../images/blog-1.jpg";
import image2 from "../images/blog-2.jpg";
import image3 from "../images/blog-3.jpg";
import SliderBlogs from "../components/sliderBlogs/SliderBlogs";
import Footer from "../components/Footer";
import Services from "../components/Services";
const blogs = [
  {
    id: 1,
    image: image1,
    title: "Unique products that will impress your home in 2022",
    date: "November 27, 2022 ",
    publisher: "Admin",
    Categorie: "in deco",
  },
  {
    id: 2,
    image: image2,
    title: "Navy Blue & White Striped Area Rugs",
    date: "November 25, 2022",
    publisher: "Admin",
    Categorie: "in deco",
  },
  {
    id: 3,
    image: image3,
    title: "Woodex White Coated Staircase Floating",
    date: "November 18, 2022",
    publisher: "Admin",
    Categorie: "in deco",
  },
];
function Home() {
  const [products, setProducts] = useState();
  const [loadproducts, setLoadProducts] = useState(true);

  useEffect(() => {
    const fetchProducts = async function () {
      try {
        const results = await Promise.all(
          categorys.map(async (c) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${c}`,
            );
            const data = await res.json();
            return {
              [c]: data.products,
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
  return (
    <div>
      {/* === Home === */}
      <HomeSlider />
      {/* === FEATURED COLLECTION === */}
      <div id="FEATUREDCOLLECTION">
        {" "}
        {loadproducts ? (
          <p>load...</p>
        ) : (
          <SliderProduct
            title={["FEATURED COLLECTION"]}
            description={""}
            products={categorys.map((c) => {
              return products[c][0];
            })}
          />
        )}
      </div>
      {/* === Services === */}
      <Services/>


      <SliderBlogs title={"Explore our blog"} blogs={blogs} />
   
    </div>
  );
}

export default Home;

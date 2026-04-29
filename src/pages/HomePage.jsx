import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import HomeSlider from "../components/hero/HomeSlider";
import SliderProduct from "../components/sliderProduct/SliderProduct";

// categorys

import image1 from "../img/blog-1.jpg";
import image2 from "../img/blog-2.jpg";
import image3 from "../img/blog-3.jpg";
import SliderBlogs from "../components/sliderBlogs/SliderBlogs";
import Footer from "../components/Footer";
import Services from "../components/Services";
import MyContext from "../components/contexts/MyContext";

// import bannars imag
import bannaer1 from "../img/banner/banner-4.jpg";
import bannaer2 from "../img/banner/banner-5.jpg";
import { Link } from "react-router";
const bannars = [
  { id: 0, image: bannaer1 },
  { id: 1, image: bannaer2 },
];
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
  const { products, loadproducts, allCategorys } = useContext(MyContext);

  return (
    <div className="">
      {/* === Home === */}
      <HomeSlider />
      {/* === FEATURED COLLECTION === */}
      <div>
        {loadproducts ? (
          <p>Loading</p>
        ) : (
          <SliderProduct
            type={"FEATUREDOLLECTION"}
            title={"FEATURED COLLECTION"}
            products={allCategorys.map((c) => {
              return products[c][0];
            })}
          />
        )}
      </div>
      {/* === Discount on products === */}
      <div>
        {loadproducts ? (
          <p>Loading</p>
        ) : (
          <SliderProduct
            type={"DiscountOnProducts"}
            title={"Discount on products"}
            products={allCategorys.map((c) => {
              return products[c][0];
            })}
          />
        )}
      </div>
      {/* Bannar */}
      <div className=" container flex justify-between items-center  md:py-2 lg:py-10 flex-wrap">
        {bannars.map((b) => {
          return (
            <div
              key={b.id}
              className=" relative w-full lg:w-[49.5%]  my-[1%] lg:m-0 "
            >
              <Link>
                <div className="w-full h-full glassEfect"></div>
              </Link>
              <img src={b.image} alt="" />
            </div>
          );
        })}
      </div>
      {/* === All Products === */}
      <div >
        {loadproducts ? (
          <p>Loading</p>
        ) : (
          allCategorys.map((c) => {
            return <SliderProduct key={c} title={c} products={products[c]} />;
          })
        )}
      </div>

      {/* === Services === */}
      <Services />

      <SliderBlogs title={"Explore our blog"} blogs={blogs} />
    </div>
  );
}

export default Home;

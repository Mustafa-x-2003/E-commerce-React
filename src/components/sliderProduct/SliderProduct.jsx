import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import Component
import CardProduct from "./CardProduct";
import ViewAllBtn from "../ViewAllBtn";
import { Link } from "react-router";

function SliderProduct({ title, products }) {
  return (
    <div className="container pt-35">
      <h2 className="text-(--main-color)! text-xl font-bold capitalize  flexb">
        {title}

        <ViewAllBtn path={"/AllProductsPage"} />
      </h2>

      <Swiper
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        
        }}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mt-5"
      >
        {products.map((product) => {
          if (products.length > 0) {
            return (
              <Link to={"/ProductDetals"}>
                <SwiperSlide className="my-4">
                  <CardProduct
                    name={product.title}
                    price={product.price}
                    image={product.images[0]}
                    id={product.id}
                  />
                </SwiperSlide>
              </Link>
            );
          }
        })}
      </Swiper>
    </div>
  );
}

export default SliderProduct;

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

function SliderProduct({ title, products, type = "" }) {
  return (
    <>
      {type === "FEATUREDOLLECTION" ? (
        <div className="container pt-20">
          <h2 className="text-(--main-color)!  text-xl font-bold uppercase border-b-2 border-(--border-color)   flexb">
            <span className="relative pb-4 after:absolute after:-bottom-0.5 after:left-0  after:w-full after:h-0.5 after:bg-(--main-color)">
              {title}
            </span>

            <ViewAllBtn path={"/AllProductsPage"} />
          </h2>

          <Swiper
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              1024: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mt-5"
          >
            {products.map((product) => {
              if (products.length > 0) {
                return (
                  <Link to={"/ProductDetals"}>
                    <SwiperSlide className="my-4">
                      <CardProduct type={type} product={product} />
                    </SwiperSlide>
                  </Link>
                );
              }
            })}
          </Swiper>
        </div>
      ) : (
        <div className="container pt-10">
          <h2 className="text-(--main-color)! text-xl font-bold capitalize tracking-[.5px] border-b-2 border-(--border-color)   flexb">
            <span className="relative pb-4 after:absolute after:-bottom-0.5 after:left-0  after:w-full after:h-0.5 after:bg-(--main-color)">
              {title.replace('-',' ')}
            </span>

            <ViewAllBtn path={"/AllProductsPage"} />
          </h2>

          <div id={title} className="scroll-mt-80">
            <Swiper
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                720: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className="mt-5"
            >
              {products.map((product) => {
                if (products.length > 0) {
                  return (
                    <Link to={"/ProductDetals"}>
                      <SwiperSlide className="my-4">
                        <CardProduct type={type} product={product} />
                      </SwiperSlide>
                    </Link>
                  );
                }
              })}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}

export default SliderProduct;

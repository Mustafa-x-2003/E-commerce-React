import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import Component

import CardBlog from "./CardBlog";
import ViewAllBtn from ".././ViewAllBtn";

function SliderBlogs({ title, blogs }) {
  return (
    <div className="container pt-20">
      <h2 className="text-(--main-color)! text-xl md:text-2xl lg:text-3xl font-bold capitalize  flexb">
        {title}
        <ViewAllBtn />
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

    1024: {
      slidesPerView: 3,
    },
  }}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full mt-5 mb-20"
      >
        {blogs.map((blog) => {
          if (blogs.length > 0) {
            return (
              <SwiperSlide className="my-4">
                <CardBlog
                  image={blog.image}
                  title={blog.title}
                  date={blog.date}
                  publisher={blog.publisher}
                  Categorie={blog.Categorie}
                  id={blog.id}
                />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
      <div className=" bg-(--bg-color) flex flex-col gap-5 md:justify-between md:flex-row px-4   py-5 md:py-15 mt-15 ">
        <div className="">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold pb-4">Our Newsletter</h2>
          <p>Subscribe our newsletter and get discount 50% off</p>
        </div>

        <div className="flexb  mt-4 md:m-0  bg-(--white-color) pr-4 border-2 border-(--white-color) text-(--p-color) focus-within:text-(--main-color) transition-all duration-300 focus-within:border-2 focus-within:border-(--main-color)">
          <input
            type="text"
            placeholder="Your email address"
            className="placeholder:text-gray-400 lg:w-100 xl:w-150 p-4"
          />
          <FaArrowRight className="text-lg!" />
        </div>
      </div>
    </div>
  );
}

export default SliderBlogs;

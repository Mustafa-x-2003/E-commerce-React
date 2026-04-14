import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className="container pt-35">
      <h2 className="text-(--main-color)! text-3xl font-bold capitalize  flexb">
        {title}
        <ViewAllBtn/>
      </h2>
      

      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full mt-5"
      >


        {blogs.map((blog) => {
          if (blogs.length > 0) {
            
            return (
              <SwiperSlide
              className="my-4"
              >
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
    </div>
  );
}




export default SliderBlogs

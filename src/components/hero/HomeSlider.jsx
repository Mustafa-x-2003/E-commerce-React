import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";
// ===========
import bannar1 from "../../images/banner_Hero1.jpg";
import bannar2 from "../../images/banner_Hero2.jpg";
import bannar3 from "../../images/banner_Hero3.jpg";

const images = [bannar1, bannar2, bannar3];

function HomeSlider() {
  return (
    <section className="container h-140">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        {images.map((image) => {
          return (
            <SwiperSlide className="relative text-center text-lg flex items-center justify-center overflow-hidden">
              <div className="absolute top-0 left-0 h-full content-center p-15 text-start">
                <h4 className="text-[1vw] pb-[0.4vw] italic font-normal ">
                  INTRODUCING THE NEW
                </h4>
                <h2 className="text-[3vw] leading-[1.1] font-bold text-(--main-color)!">
                  Microsoft Xbox
                  <br />
                  360 Controller
                </h2>
                <p className="py-[2.5vw]">Windows Xp/10/7/8 Ps3, Tv Box</p>
                <button className="bg-(--main-color) py-2 px-4  rounded-full hover:scale-110 transition duration-300">
                  <Link to={"/"} className="text-(--white-color)!">
                    Shop Now
                  </Link>
                </button>
              </div>
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover block"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default HomeSlider;

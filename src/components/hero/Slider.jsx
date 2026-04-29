import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Images
import image1 from "../../img/banner-1.png";
import image2 from "../../img/banner-2.png";
import image3 from "../../img/banner_Home3.png";

const images = [image1, image2];
export default function Slider() {
  return (
    <div className="flex gap-2">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full "
      >
        {images.map((i) => {
          return (
            <SwiperSlide className="">
              <img src={i} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="w-[30.5%] hidden md:block">
        <img src={image3} alt="" />
      </div>
    </div>
  );
}

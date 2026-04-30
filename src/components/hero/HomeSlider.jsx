import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";
// ===========
import image1 from "../../img/features1.png";
import image2 from "../../img/features2.png";
import image3 from "../../img/features3.png";
import image4 from "../../img/features4.png";
import image5 from "../../img/features5.png";

import bannar3 from "../../img/banner-3.png";
import bannar4 from "../../img/banner-4.png";
import bannar5 from "../../img/banner-5.png";
import SliderProduct from "../sliderProduct/SliderProduct";
import Slider from "../hero/Slider";

const features = [
  {
    id: 0,
    image: image1,
    title: "Fast Performance",
    desc: "Lightning-fast browsing",
  },
  {
    id: 1,
    image: image2,
    title: "Easy Returns",
    desc: "Easy returns, no hassle experience",
  },
  { id: 2, image: image3, title: "24/7 Support", desc: "24/7 support anytime" },
  {
    id: 3,
    image: image4,
    title: "Secure Payment",
    desc: "Secure payment methods",
  },
  {
    id: 4,
    image: image5,
    title: "Special Discounts",
    desc: "Exclusive deals and discounts",
  },
];
const bannars = [
  { id: 1, image: bannar3 },
  { id: 2, image: bannar4 },
  { id: 3, image: bannar5 },
];

function HomeSlider() {
  return (
    <section className="container">
      <div className="mt-5">
        <Slider />
        <div className="flex px-4 lg:px-2 md:py-8 items-center mt-8 flex-wrap gap-2 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)]">
          {features.map((f) => {
            return (
              <div
                key={f.id}
                className="flex items-center grow gap-2 bg-(--white-color) py-4"
              >
                <img src={f.image} alt="" className="w-10!  md:w-15!" />
                <div>
                  <h2 className="font-bold pb-1">{f.title}</h2>
                  <p className=" text-[14px] ">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Bannar */}
      <div className="flexb mt-8 flex-wrap">
        {bannars.map((b) => {
          return (
            <div
              key={b.id}
              className=" relative w-85.80 sm:w-[47%]  xl:w-[32%] m-1 flex"
            >
              <Link>
                <div className="w-full h-full glassEfect"></div>
              </Link>
              <img src={b.image} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomeSlider;

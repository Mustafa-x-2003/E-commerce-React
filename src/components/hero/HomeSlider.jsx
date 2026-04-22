import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";
// ===========
import heroSm from "../../images/hero-sm.png";
import hero from "../../images/hero-md.png";

function HomeSlider() {
  return (
    <section className="container   ">
      <div className="relative  text-center text-lg flex items-center justify-center ">
        <img src={heroSm} alt="" className=" md:hidden block" />
        <img src={hero} alt="" className=" hidden md:block " />

        <div className=" p-3 rounded-lg absolute -bottom-20 sm:bottom-0 left-1/2 translate-x-[-50%] md:translate-0 w-[370px] sm:w-[500px] md:w-auto   bg-(--white-color)/75 md:bg-transparent md:top-0  md:left-0 md:h-full  content-center  text-start">
          <h5 className="text-(--main-color)! text-[14px] md:text-sm lg:text-lg ">UPGRADE YOUR WORLD</h5>
          <h1 className=" sm:text-3xl md:text-3xl lg:text-4xl font-bold py-1 sm:py-2 md:py-5 lg:leading-10 xl:leading-15 xl:text-5xl">
            Discover the Latest <br /> <span className="text-(--main-color)">Tech</span> That Inspires
          </h1>
          <p className="  sm:block w-90 sm:w-100 lg:w-100">
            Explore top quality electronics, smart devices, and accessories 
            all in one place
          </p>
          <div>
            <Link>
            <span className="relative  flexb sm:my-3 md:my-5 py-1 sm:py-2 px-4 hover:pr-8 bg-(--main-color) rounded-lg text-(--white-color) w-fit gap-1 transition-all duration-300 group hover:text-(--main-color) border-2 border-(--main-color) hover:bg-transparent">
              Shop new
              <FaArrowRight className="transition-all duration-300 opacity-0 group-hover:opacity-100 absolute right-2 top-1/2 translate-y-[-50%]"/>
            </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSlider;

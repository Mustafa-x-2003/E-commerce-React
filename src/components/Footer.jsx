import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import Search from "./Search";

const helps = ["New Arrivals", "Best Sellers", "Sale", "Collections"];
const About = ["About Us", "What We Do", "FAQ Page", "Contact Us"];
function Footer() {
  return (
    <div className="pt-20">

      <div class="container  ">
        <div class="footer-top section flexb gap-20">
          <div>
            <Link class="logo" className="text-2xl font-bold">
              NovaCart
            </Link>

            <ul className="flex flex-col gap-3 pt-4">
              <li class="flexb gap-2">
                <IoLocationSharp />
                <address class="address">Woodex, Chicago, USA 2022</address>
              </li>

              <li class="flex items-center gap-2">
                <FaPhone />

                <Link class="hover:text-(--main-color) transition-all duration-300">
                  +1234567890
                </Link>
              </li>
              {/* social */}
              <li className="pt-4">
                <ul class="flex gap-5 items-center">
                  <Link className="hover:text-(--main-color) transition-all duration-300 text-xl">
                    <FaFacebook />
                  </Link>
                  <Link className="hover:text-(--main-color) transition-all duration-300 text-xl">
                    <BsTwitterX />
                  </Link>
                  <Link className="hover:text-(--main-color) transition-all duration-300 text-xl">
                    <FaLinkedinIn />
                  </Link>
                </ul>
              </li>
            </ul>
          </div>

          <ul>
            <h3 className="font-bold pb-4">Shop</h3>
            {helps.map((h) => {
              return (
                <li className="py-2">
                  <Link class=" hover:text-(--main-color) transition-all duration-300">
                    {h}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <h3 className="font-bold pb-4">Support</h3>
            {About.map((h) => {
              return (
                <li className="py-2">
                  <Link class="hover:text-(--main-color) transition-all duration-300">
                    {h}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div class="">
            <h3 class="font-bold pb-4">Newsletter</h3>
            <div className="py-10">
              <Search
                icon={<FaArrowRight />}
                placeholder={"Your email address"}
              />
            </div>

            <div class="wrapper">
              <a href="#" class="footer-link">
                Term & Condition
              </a>
              <a href="#" class="footer-link">
                Policy
              </a>
              <a href="#" class="footer-link">
                Map
              </a>
            </div>
          </div>
        </div>

        <div class="text-center py-8">
          <p class="copyright">
            &copy; 2022 All Rights Reserved by{" "}
            <Link class="copyright-link">NovaCart</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

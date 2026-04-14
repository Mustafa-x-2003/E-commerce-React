import React from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

function ViewAllBtn() {
  return (
    <Link className="flexb gap-2 text-(--color-heading) text-sm hover:text-(--main-color) transition duration-300 ">
      View All
      <FaArrowRight className="text-sm!" />
    </Link>
  );
}

export default ViewAllBtn;

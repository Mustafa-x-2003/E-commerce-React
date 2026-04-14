import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function CardBlog({ image, title, date, publisher, Categorie }) {
  return (
    <div className=" text-start text-lg  relative overflow-hidden group  rounded-lg transition-all duration-300  ">
      <img src={image} alt="" />
      <Link>
      <div className="absolute top-[235px] -right-[138px] group-hover:right-0 transition-all duration-300   bg-(--white-color) py-2 px-4">
        Read more +
      </div>
      </Link>
      

      <div>
        <h2 className="hover:text-(--main-color)! transition0-all duration-300 py-4 font-bold text-xl truncate">{title}</h2>
        <p>
          <span> {date} </span> /<span> {publisher} </span> /
          <span> {Categorie} </span>
        </p>
      </div>
    </div>
  );
}

export default CardBlog;

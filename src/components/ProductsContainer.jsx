import React from "react";

function ProductsContainer({ children, title }) {
  return (
    <div className="container">
      <h2 className="text-start text-5xl font-bold py-10">{title}</h2>
      
        <div className=" grid grid-cols-4 gap-4">{children}</div>
      
    </div>
  );
}

export default ProductsContainer;

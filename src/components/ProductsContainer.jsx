import React from "react";

function ProductsContainer({ children, title , colsCount=''}) {
  return (
    <div className="container">
      <h2 className="text-start text-5xl font-bold">{title}</h2>

      <div className={` grid ${colsCount} gap-4`}>{children}</div>
    </div>
  );
}

export default ProductsContainer;

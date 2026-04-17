import React from "react";

function ProductsContainer({ children, title='mustafa' , colsCount=''}) {
  return (
    <div className="container shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] rounded-2xl p-8 pr-4">
      {/* <h2 className="text-start text-5xl font-bold py-4 ">{title}</h2> */}

      <div className={` grid ${colsCount} gap-4 min-h-20 max-h-200 overflow-y-scroll overflow-x-hidden  `}>{children}</div>
    </div>
  );
}

export default ProductsContainer;

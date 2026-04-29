import React from "react";

function ProductsContainer({ children , gridStile=''}) {
  return (
    <div className="container shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] rounded-2xl p-8 md:pr-4">
      {/* <h2 className="text-start text-5xl font-bold py-4 ">{title}</h2> */}

      <div className={` grid ${gridStile} gap-4 min-h-20 lg:max-h-200 lg:overflow-y-scroll  `}>{children}</div>
    </div>
  );
}

export default ProductsContainer;

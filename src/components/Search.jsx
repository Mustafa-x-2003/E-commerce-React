import React from "react";

function Search({ icon }) {
  return (
    <div className="flexb   transition duration-300">
      <input
        type="text"
        placeholder="Search Anything..."
        className="  peer pb-2  pr-2  border-b! border-(--border-color)! focus:border-(--main-color)! transition-all duration-300 "
      />
      <button
        onClick={() => {
          console.log("ggg");
        }}
        className="flexc  text-xl w-10  cursor-pointer peer-focus:text-blue-500 transition-all duration-300 text-(--border-color)"
      >
        {icon}
      </button>
    </div>
  );
}

export default Search;

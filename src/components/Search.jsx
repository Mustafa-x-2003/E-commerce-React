import React, { useContext } from "react";
import Categorys from "./contexts/Categorys";

function Search({ icon , placeholder }) {
  const { search, setSearch } = useContext(Categorys);
  return (
    <div className="flexb   transition duration-300">
      <input
      onChange={(e)=>{setSearch(e.target.value)}}
      value={search}
        type="text"
        placeholder={placeholder}
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

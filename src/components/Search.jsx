import React, { useContext } from "react";
import Categorys from "./contexts/MyContext";

function Search({ width,icon, placeholder }) {
  const { search, setSearch } = useContext(Categorys);
  return (
    <div className={`flexb ${width} py-4 px-4 rounded-xl border border-(--border-color) focus-within:border-(--main-color)! w-full transition duration-300`}>
      <input
        onChange={(e) => {
          setSearch(e.target.value.toLowerCase().trim());
        }}
        value={search}
        type="text"
        placeholder={placeholder}
        className="  peer  w-full pr-2   transition-all duration-300 "
      />
      <button
        onClick={() => {
        }}
        className=" text-2xl  cursor-pointer peer-focus:text-blue-500 transition-all duration-300 text-(--border-color)"
      >
        {icon}
      </button>
    </div>
  );
}

export default Search;

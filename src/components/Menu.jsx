import React from 'react'
import { IoMdClose } from "react-icons/io";

function Menu({isShow , handelIsShow}) {
  return (
    <div className={`w-100 h-screen p-5 absolute right-0 top-0 z-100 bg-(--white-color) shadow-[0_0_10px_4px_rgba(0,0,0,.3)] ${isShow?'show':'heddin'} transition-all duration-300`} >
        <button
        onClick={()=> handelIsShow(!isShow)}
        className="mt-5 cursor-pointer ">
          <IoMdClose className="text-2xl!" />
        </button>
      </div>
  )
}

export default Menu

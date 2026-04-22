import React from 'react'

function Hero() {
  return (
    <div className=" container grid grid-cols-4 gap-6 h-[500px] pt-10">
        {/* Big Hero */}
        <div className="col-span-1 h-100 bg-gray-100 rounded-xl"></div>
        <div className="col-span-2 h-100 row-span-2 bg-gray-200 rounded-xl">
          Hero Product
        </div>

        {/* Cards */}
        <div className="col-span-1 h-100 bg-gray-100 rounded-xl">Card 2</div>
        <div className="col-span-2 h-50 bg-gray-100 rounded-xl">Card 3</div>
        <div className="col-span-2 h-50 bg-gray-100 rounded-xl">Card 3</div>
      </div>
  )
}

export default Hero

import React from 'react'

function Discount() {
  return (

    <>
    
        <div className="w-[300px] h-[100px] bg-green-900 mt-3 mb-3 rounded-2xl flex justify-between items-center ml-11 pr-2 pl-2">

            <div className="flex flex-col gap-8 text-lg font-itim">

                <p className="text-[#E9D89E]">Monday Discount</p>
                <p className="text-[#E9D89E] font-inter text-[22px]">60% OFF!</p>
            </div>

            <div className = "flex items-center">

                <img className = "w-[80px] h-[80px] rounded-full" src = "https://t3.ftcdn.net/jpg/01/47/51/60/360_F_147516063_hCXI8VUIdBYud0B0hhS3Yo5CFTT1a4g8.jpg" alt="" />
            </div>

        </div>

        <div className = "flex gap-2 ml-[150px]">

            <span className = "inline-block w-[40px] h-[10px] bg-green-900 rounded-full"></span>
            <span className = "inline-block w-[10px] h-[10px] bg-green-900 rounded-full"></span>
            <span className = "inline-block w-[10px] h-[10px] bg-green-900 rounded-full"></span>
        </div>
    </>
  )
}

export default Discount
import React from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function ProductTemp({title, price, image}) {
  return (
    <div>

        <div className = "ml-3 mt-2">

            <div className = "bg-[#D0C28D] w-[150px] rounded-t-2xl">

                <img className = "w-[150px] h-[100px] rounded-2xl" src={image} alt = ""/>
            </div>

            

            

            <div className = "w-[150px] h-[80px] bg-[#FFF2C5] flex flex-col gap-4 pl-1">

                <p>{title}</p>

                <div className = "flex gap-14 font-bold align-center">
                    <p>{price}</p>

                    <ArrowCircleRightIcon style={{color:"#2D4A22"}} fontSize = "large"/>
                
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default ProductTemp
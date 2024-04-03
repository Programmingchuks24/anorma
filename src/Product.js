import React from 'react'
import ProductTemp from './ProductTemp'

function Product() {
  return (
    <div>

        <div className="pl-2">
            <p className="font-bold text-lg">Product</p>
        </div>


        <div className="grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-4 overflow-auto">

            <ProductTemp title = "Fresh Potatoes" price = "$10.80" image = "https://cdn.create.vista.com/api/media/small/320402472/stock-photo-organic-raw-potatoes-white-background"/>

            <ProductTemp title = "Eggs" price = "$5.00" image = "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg"/>

            <ProductTemp title = "tomato" price = "$15.00" image = "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?cs=srgb&dl=pexels-pixabay-533280.jpg&fm=jpg"/>

            <ProductTemp title = "Yam" price = "$9.00" image = "https://media.istockphoto.com/id/1395343560/photo/whole-and-halved-raw-african-yam-on-wooden-background.jpg?s=612x612&w=0&k=20&c=QyRZYcrD9_goJRqqxW0GoJ2dwsK5rrZ6NtznYJFeAig="/>

        </div>

        
        
    </div>
  )
}

export default Product
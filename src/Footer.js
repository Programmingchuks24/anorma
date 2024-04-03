import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

function Footer() {
return (
    <div className="relative w-[50vh] h-16 bg-green-900 z-10 bottom-[5px] flex justify-evenly items-center rounded-b-2xl">

            <HomeIcon style={{color: "white"}} fontSize="large"/>

            <ShoppingBasketIcon style={{color: "white"}} fontSize="large"/>

            <ShoppingCartIcon style={{color: "white"}} fontSize="large"/>

            <PersonIcon style={{color: "white"}} fontSize="large"/>

    </div>
)
}

export default Footer
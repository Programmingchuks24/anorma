import React from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Search } from '@mui/icons-material';

function Header() {
  return (
    <>
        <div className = "flex justify-between pr-2 bg-white rounded-xl pl-2">

            <div>
                <p className="text-5xl">👋</p>
                <p className="font-dancing font-bold text-3xl">Welcome</p>
                <p className = "font-bold">Pablo</p>
            </div>

            <div className = "flex items-center pt-3 gap-2">

                <NotificationsActiveIcon/>
                <span>
                    <img className="w-[30px] h-[30px] rounded-full" src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="profile" />
                </span>
            </div>
        </div>

        
        <div className = "w-[20rem] h-12 bg-[#FFF2C5] rounded-full flex items-center pl-2 mt-3 ml-9">
            <Search/>
            <p>Search....</p>
        </div>
    </>
  )
}

export default Header
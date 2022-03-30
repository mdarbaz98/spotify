import React from 'react'
import '../styles/Rightmenu.css'
import { useDataLayer } from './DataLayer'


function Rightmenu() {
  const [{user}] = useDataLayer();
  return (
    <div className='right_menu py-2 sm:block hidden'>
    {/* <div className=' user_div hover:w-0 w-full h-10 flex text-slate-50 items-center border-2 rounded-full'>
    <div className='pr-1 text_section'>User</div>
    <img className='user_img absolute right-0 p-1 rounded-full ml-auto  w-10 h-10 object-cover' src={user?.images[0]?.url} alt="profile_image" />
    </div> */}
    </div>
  )
}

export default Rightmenu
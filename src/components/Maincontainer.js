import React, { useEffect, useState } from 'react'
import '../styles/Maincontainer.css'
import Banner from './Banner'
import {FaUsers} from 'react-icons/fa'
import {useDataLayer} from './DataLayer'
import Songs from './Songs'
import Trackplayer from './Trackplayer'
function Maincontainer() {

  const [{getPlayList},dispatch] = useDataLayer();
//   const [state, setState] = useState([])
// console.log(state)
//   const setTrackMusic = (data) => {
//     setState(data)
//   }


  // useEffect(()=>{
  //   const allLi = document.querySelector(".menuList ul").querySelectorAll("li");
  //   allLi.forEach(element => {
  //     element.addEventListener("click",function(){
  //       allLi.forEach(ele => ele.classList.remove("active"))
  //       this.classList.add("active")
  //     })
  //   });
  // },[])
  return (
    <div className='/main_container/'>
      <div className='h-screen overflow-y-scroll'>
      {/* <Banner /> */}
      {/* <div className="menuList flex justify-between items-center py-3 px-8 bg-[#2c2c2c] relative">
        <ul className='flex gap-10 text-[#848484] capitalize text-sm font-semibold'>
          <li><a>popular</a></li>
          <li><a>Albums</a></li>
          <li><a>songs</a></li>
          <li><a>fans</a></li>
          <li><a>about</a></li>
        </ul>
        <p className='text-sm text-center text-[#f1f1f1]'>
          <FaUsers className='mr-1 inline' />
          1.34M
          <span className='block text-xs text-[#848484]'>Followers</span>
        </p>
      </div> */}
      <div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid pb-24'>
      {
        getPlayList?.tracks?.items.map((item,index) => {
          return <Songs key={index} track={item.track} />
        })
      }
      </div>
      {/* <Trackplayer getPlayList={getPlayList} /> */}
      </div>
    </div>
  )
}

export default Maincontainer
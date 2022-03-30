import React, { useEffect, useState } from 'react'
import {FaPlus} from 'react-icons/fa';
import {BsMusicNoteList} from 'react-icons/bs'
import {BsTrash} from 'react-icons/bs'
// import playList from './playList';
import { useDataLayer } from './DataLayer';
function MenuPlayList() {
  const [{playlists,dynList},dispatch] = useDataLayer();
  
  const dynamicFunction = (res) => {
    dispatch({
      type: 'DNY_List',
      dynamicList: res,
    })
    // console.log(res)
  }
// console.log(dynList)
  return (
    <div className='menuPlayList_container'>
        <div className='menuTitle_container mb-2 flex justify-between items-center'>
            <p className='uppercase'>Explore</p>
            <FaPlus className='plus_icon' />
        </div>
        <div className='PlayList_container'>
            {playlists && playlists?.map((item,index) => {
                return <div key={index} onClick={()=>{dynamicFunction(item?.id)}} className='playList my-1 flex items-center cursor-pointer'>
                        <BsMusicNoteList className='text-lg mr-3' />
                        <p className='capitalize'>{item.name}</p>
                        <BsTrash className='text-lg ml-auto' />
                </div>
            })}
        </div>
    </div>
  )
}

export default MenuPlayList
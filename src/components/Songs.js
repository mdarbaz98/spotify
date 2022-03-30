import React, { useEffect, useState } from 'react'
import { useDataLayer } from './DataLayer';
function Songs({track}) {

  const [{getPlayList},dispatch] = useDataLayer();
  // const [playing, setPlaying] = useState(true)

  useEffect(()=>{
    dispatch({
      type: "SET_TRACK",
      setTrack: getPlayList.tracks.items[0].track,
    })
  },[])

  // console.log(getPlayList.tracks.items[0].track)

  // console.log(getPlayList)

  const trackSongFuntion = () => {
    dispatch({
      type: "SET_TRACK",
      setTrack: track,
    })
  }


  const name = track.name;
  return (
    <div onClick ={trackSongFuntion} className='song_container m-4 flex flex-col items-center'>
    <div className='w-52 h-64 rounded-xl overflow-hidden'>
    <img src={track?.album.images[0].url} alt="song_img" className='cursor-pointer w-full h-full hover:scale-105 transition-all duration-300' />
    </div>
        <h2 className='text-slate-50 my-1'>{name?.length > 24? name.substring(0,20)+"...": name}</h2>
    </div>
  )
}

export default Songs
import React, { useEffect, useRef, useState } from "react";
import {BsFillPlayFill,BsShuffle,BsSkipEndFill,BsSkipStartFill,BsArrowRepeat,BsFillPauseFill} from 'react-icons/bs'
import { useDataLayer } from "./DataLayer";
import disk from '../Assets/disk.png';


function Trackplayer({trackSong}) {

  const [{track},dispatch] = useDataLayer();
  const [isPlaying, setIsPlaying] = useState(false)
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animation = useRef(); //key frame animation
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [cutString , setCutString] = useState()

  // getting total duration of audio
  useEffect(()=>{
    const seconds = audioPlayer.current.duration;
    setDuration(seconds)
  },[audioPlayer?.current?.loadedmetadata,
  audioPlayer?.current?.readyState])
  // string with ellipess 
  useEffect(()=>{
    setCutString(track?.artists?.map((item) =>  item.name).join(', '))
  },[track])

  const playPause = () => {
    if(isPlaying){
      audioPlayer.current.pause()
      // if audio pause cancel animation
      cancelAnimationFrame(animation.current);
    }
    else{
      audioPlayer.current.play()
      // if audio play start the animation
      animation.current = requestAnimationFrame(whilePlaying);//it will apply the animation by calling while playing function
    }
    setIsPlaying(!isPlaying)
  }


  // converting odd number of time in minutes and seconds function
  const calculateTime = (sec) => {
    //divided with 60 to get minute and cutting the decimal value
    const minutes = Math.floor(sec/60);
    const calcMinute = minutes < 10 ? `0${minutes}` : minutes

    const seconds = Math.floor(sec%60);
    const calcSecond = seconds < 10 ? `0${seconds}` : seconds

    return `${calcMinute}:${calcSecond}`
  }

  const whilePlaying = () => {
    // setting audio current time to progressBar as a value
    progressBar.current.value = audioPlayer.current.currentTime;
    // calling this to sync current time and slider rang 
    changeCurrentTime();
    // again requesting animation per second (means audio time change) and recurring the while playing function until the audio time is complete
    animation.current = requestAnimationFrame(whilePlaying);
    // Math.floor(audioPlayer.current.duration) >= duration ? setIsPlaying(null):setIsPlaying(true)

  }

  // gets fire when user slide the slider 
  const progressBarChange = () => {
    // setting scrollbar width according to  current time(basically setting current time)
    audioPlayer.current.currentTime = progressBar.current.value;
    // calling this to sync current time and slider rang 
    changeCurrentTime();
  }


  // change time and slider range function 
  const changeCurrentTime = () => {
    // setting scrollbar width according to  current time following full-width ocf progrssbar
    progressBar.current.style.setProperty("--player-value",`${(progressBar.current.value / duration) * 100}%`)
    // setting current time
    setCurrentTime(progressBar.current.value)
  }

  const cutStringFunction = (string) =>{
    return (string?.length > 30 ? string?.substring(0,20)+'...': string)
  }

  useEffect(()=>{
    setIsPlaying(null)
  },[track,track?.preview_url])

  // console.log(play)
  // console.log(trackSong?.tracks?.items[0].track.album.images[0].url)
  // console.log(track?.album?.images[0].url)
  return (
    <div>
      <div className="play_track bg-[rgba(0,0,0,0.8)] backdrop-blur-[10px] p-3 grid md:grid-cols-3 grid-cols-1 items-center absolute left-0 bottom-0 right-0">
        <div className="track_left flex items-center gap-3">
        <img src={track?.album?.images[0].url ? track?.album?.images[0].url : disk} className="w-20 h-20 rounded" alt="track_img" />
            <div className="text-slate-50 text-base"><h2>{cutStringFunction(track?.name)}</h2><span className="text-xs text-gray-400 font-semibold">{cutStringFunction(cutString)}</span></div>
            {/* <img src={trackSong?.tracks?.items[0].track.album.images[0].url} className="w-20 rounded" alt="track_img" /> */}
            {/* <p className="text-slate-50"><h2>{trackSong?.tracks?.items[0].track.name}</h2><span className="text-xs text-gray-400 font-semibold">{trackSong?.tracks?.items[0].track.artists.map((item) =>  item.name).join(', ')}</span></p> */}
        </div>
        <div className="flex flex-col gap-2">
            <div className="track_middle text-teal-50 flex items-center justify-center gap-8 text-xl">
            <BsShuffle />
            <BsSkipStartFill />
            <div onClick={playPause}>
            {
              !isPlaying ?<BsFillPlayFill className="text-4xl" />:<BsFillPauseFill className="text-4xl" />
            }
            <audio src={track?.preview_url} ref={audioPlayer} preload='metadata' ></audio>
            </div>
            <BsSkipEndFill />
            <BsArrowRepeat />
            </div>
            <div className="flex items-center gap-2 text-slate-50 text-xs">
            <div className="currentTime">{calculateTime(currentTime)}</div>
            <input type="range" ref={progressBar} onChange={progressBarChange} className="play_line cursor-pointer w-full border-none outline-none appearance-none h-1 rounded bg-[rgba(255,255,255,0.4)] relative overflow-hidden" />
            <div className="endTime">{duration ? calculateTime(duration) : `00:00`}</div>
            </div>
        </div>
        <div className="track_right"></div>
      </div>
    </div>
  );
}

export default Trackplayer;

import React, { useState } from "react";
import { useDataLayer } from "./DataLayer";
import Maincontainer from "./Maincontainer";
import '../styles/Maincontainer.css'
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Trackplayer from "./Trackplayer";



function Home() {
  const [{search, searchData,searchAlbum,track}, dispatch] = useDataLayer();
  // const [ searchClick ,setSearchClick] = useState();

  // console.log(searchData);
  const trackSongFuntion = (track) => {
    // setSearchClick(track)
    // console.log(track)
    dispatch({
      type: "SET_TRACK",
      setTrack: track,
    })
  }

  return (
    <div className="main_container">
    {search ?
      <div className="p-5 pb-28 h-screen overflow-y-scroll">
      <div className="grid gap-7 grid-cols-1 sm:grid-cols-4">
       {
        (searchData?.tracks?.items.map((item, index) => {
          return (
            <div onClick ={() => trackSongFuntion(item)} className="text-slate-50 text-center bg-[rgba(0,0,0,0.4)] backdrop-blur p-3 rounded cursor-pointer hover:bg-neutral-800 transition-all duration-200">
              <img
                src={item?.album.images[0].url}
                alt="search_images"
                className="rounded"
              />
              <h2 className="mt-2">{item?.name}</h2>
            </div>
          );
        }))
        }
      </div>
      </div>
    :
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/playlists" element={<Maincontainer />} />
    </Routes>
    {/* <Maincontainer /> */}
    </>
    }

    <Trackplayer />

    </div>
  );
}

export default Home;

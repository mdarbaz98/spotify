import React from 'react'
import Home from './Home';
import Leftmenu from "./Leftmenu";
import Maincontainer from "./Maincontainer";
import Rightmenu from "./Rightmenu";
function SpotifyHome({spotify}) {
  return (
    <div className="Spotify_home flex">
          <Leftmenu />
          <Home />
          {/* <Maincontainer /> */}
          <Rightmenu />
          <div className="background"></div>
    </div>
  )
}

export default SpotifyHome
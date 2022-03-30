import { useEffect, useState } from "react";
import "./App.css";
import Leftmenu from "./components/Leftmenu";
import Login from "./components/Login";
import Maincontainer from "./components/Maincontainer";
import Rightmenu from "./components/Rightmenu";
import {getTokenFromResponse} from './components/spotify.js'
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayer } from "./components/DataLayer";
import SpotifyHome from "./components/SpotifyHome";

function App() {
  const [isLogin, setLogin] = useState(false);
  // const [searchData, setSearchData] = useState([])
  const [{user,token,playlists,getPlayList,dynList,search,searchData},dispatch] = useDataLayer();

  const spotify = new SpotifyWebApi();

  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const token = hash.access_token;
    if(token){
      setLogin(token)
      dispatch({
        type : 'SET_TOKEN',
        token : token,
      })
      spotify.setAccessToken(token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'Set_User',
          user : user,
        })
      })
      spotify.getUserPlaylists('31z2737hypwiv5cwaxtk5gptxs24').then((playlists) => {
        // console.log(playlists.items)
        dispatch({
          type: 'SET_PLAYLIST',
          playlists: playlists.items,
        })
      })
      // spotify.searchTracks(`${search}`).then(res => console.log(res))
    }
  },[dynList])

  useEffect(()=>{
    spotify.searchTracks(search).then(res => dispatch({
      type:'SEARCH_DATA',
      searchData: res,
    }))

    // spotify.searchAlbums(`${search}`).then(res => dispatch({
    //   type:'SEARCH_ALBUM',
    //   searchAlbum: res,
    // }))
  },[search])

  useEffect(()=>{
    spotify.getPlaylist(dynList ? `${dynList}`: '4nOHNCQAiXcmG0eg1kDuXe').then((response) => { //4nOHNCQAiXcmG0eg1kDuXe
      dispatch({
        type: 'GET_PLAYLIST',
        getPlayList: response,
      })
    })
  },[dynList])

  useEffect(()=>{
    spotify.getFeaturedPlaylists().then(res =>{
      // console.log(res)
      dispatch({
        type: 'GET_FEATURE_PLAYLIST',
        getFeaturePlayList: res,
      })
    })
  },[])
  // console.log(getPlayList?.tracks?.items);
  // console.log(searchData?.tracks?.items)
  // console.log(searchData);
  return (
    <div className="App">
      {isLogin ? (
        <SpotifyHome spotify={spotify} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

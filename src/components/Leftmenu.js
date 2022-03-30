import React from 'react'
import '../styles/Leftmenu.css'
import {FaSpotify} from "react-icons/fa";
import {FaEllipsisH} from "react-icons/fa";
import {BiSearchAlt} from "react-icons/bi";
import menuList from '../components/menuList'
import Menu from './Menu';
import MenuPlayList from './MenuPlayList';
import TrackList from './TrackList';
import { useDataLayer } from './DataLayer';
function Leftmenu() {

  const [{search},dispath] = useDataLayer();

  const searchOnChange = (e) => {
    dispath({
      type: 'SET_SEARCH',
      search: e.target.value
    })
  }

  return (
    <div className='leftmenu'>
        <div className='logo_container flex justify-between items-center'>
        <i>
        <FaSpotify />
        </i>
          <h2 className='text-2xl font-bold'>Spotify</h2>
          <i>
          <FaEllipsisH />
          </i>
        </div>
        <div className='searchBox'>
          <input type="text" placeholder='Search...' value={search} onChange={searchOnChange} />
          <BiSearchAlt className='searchIcon' />
        </div>
        <Menu title={"Menu"} data={menuList} />
        <MenuPlayList />
        {/* <TrackList /> */}
    </div>
  )
}

export default Leftmenu
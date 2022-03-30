import {BsFillHouseFill,BsJournalAlbum,} from 'react-icons/bs';
import {FaBroadcastTower,FaPodcast,FaMicrophoneAlt,FaRegListAlt} from 'react-icons/fa';
import {BiPulse} from 'react-icons/bi';


const menuList = [{
    id: 1,
    icon: BsFillHouseFill,
    name: "Home",
    route: '/'
},
{
    id: 2,
    icon: BiPulse,
    name: "Discover"
},
{
    id: 3,
    icon: FaBroadcastTower,
    name: "Radio"
},
{
    id: 4,
    icon: FaPodcast,
    name: "Podcast"
},
{
    id: 5,
    icon: FaMicrophoneAlt,
    name: "Artist"
},
{
    id: 6,
    icon: BsJournalAlbum,
    name: "Album",
},
{
    id: 7,
    icon: FaRegListAlt,
    name: "Playlists",
    route: '/playlists',
},
]

export default menuList;
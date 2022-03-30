import React from 'react'
import '../styles/Login.css'
import {loginUrl} from './spotify'
import spotifyLogo from '../Assets/Spotify_Logo_RGB_White.png'
function Login() {
  return (
    <div className='Login_section h-screen w-full flex flex-col place-items-center justify-center bg-black'>
    {/* logo */}
    {/* https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png */}
        <img src={spotifyLogo} className='w-96' alt="Spotify_logo_image" />
        <a href={loginUrl}>
        <button className='capitalize text-white bg-[#49e12e] mt-16 p-4 px-9 rounded-full font-semibold text-lg hover:bg-[#fff] hover:text-black transition-all duration-300 focus:ring-2 ring-white'>login with spotify</button>
        </a>
    </div>
  )
}

export default Login
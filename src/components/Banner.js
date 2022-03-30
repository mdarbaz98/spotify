import React from 'react'
import {FaEllipsisH,FaHeadphones,FaCheck} from "react-icons/fa"
import verified from '../Assets/verify.png'
import { useDataLayer } from './DataLayer'

function Banner({user}) {
    // const [{},dispatch] = useDataLayer()
  return (
    <div className='banner_section'>
        <img className='banner_image' src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/12/metallic-spotify-logo.jpg" alt="banner_images" />
        <div className="banner_content">
            <div className="breadcrump text-[#848484] flex items-center justify-between">
                {/* <p className='font-semibold'>Home<span className='tracking-wide font-semibold text-sm text text-[#f1f1f1]'> /Popular Artist</span></p>
                    <FaEllipsisH className='text-white cursor-pointer text-lg' /> */}
            </div>
            <div className="artist_section flex justify-between items-center text-[#f1f1f1]">
                <div className="left_section">
                    <div className="name flex items-center">
                        <h2 className='text-5xl'>{user?.display_name}</h2>
                        <img src={verified} alt="verified" className='w-6' />
                    </div>
                    <p className='flex items-center mt-2 text-sm font-semibold text-[#f1f1f1]'><FaHeadphones className='mr-2' />11,184,1181<span className=' text-gray-300 ml-2'>Monthly Listener</span></p>
                </div>
                <div className="right_section flex">
                    <a href="#" className='bg-[#49e12e]'>Play</a>
                    <a href="#" className=' flex items-center bg-[rgba(0,0,0,0.4)]'>
                        <FaCheck className='mr-2 text-sm' />
                        Following
                    </a>
                </div>
            </div>
        </div>
        <div className="overlay">

        </div>
    </div>
  )
}

export default Banner
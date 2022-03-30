import React from "react";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import Track from "../Assets/Track.png";
function TrackList() {
  return (
    <div className="track_list mt-2 py-3 border-[rgba(255,255,255,0.1)] border-t">
      <div className="top flex items-center">
        <img src={Track} alt="track_image" className="w-12" />
        <p className="ml-4 text-[#f1f1f1]">
          Sample Name<span className="block text-xs text-[#848484]">Artist</span>
        </p>
      </div>
      <div className="bottom text-base text-[#848484] mt-3 flex justify-between items-center">
        <BsFillVolumeUpFill className="text_hover" />
        <input type="range" className="relative h-1 border-0 outline-none rounded-lg bg-stone-700 appearance-none" />
        <BsMusicNoteList className="text_hover" />
        <FaDesktop className="text_hover" />
      </div>
    </div>
  );
}

export default TrackList;

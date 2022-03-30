import React from "react";
import Banner from "./Banner";
import { useDataLayer } from "./DataLayer";

function Homepage() {
  const [{ featurePlayList,user }] = useDataLayer();

  // console.log(featurePlayList?.playlists?.items);
  // console.log(user)

  return (
    <div className="homePage h-screen overflow-y-scroll pb-24">
    <Banner user={user} />
<div className="Listing_section p-4">
<div className="Feature_playlists mt-4">
        <h2 className="text-slate-50 text-2xl my-6 font-bold">Feature Playlists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          {featurePlayList?.playlists?.items.map((item, index) => {
            return (
              <div className="text-slate-50 text-center bg-[rgba(0,0,0,0.4)] backdrop-blur p-3 rounded cursor-pointer hover:bg-neutral-800 transition-all duration-200">
                <img src={item.images[0].url} alt="Feature-List-Images" />
              </div>
            );
          })}
        </div>
      </div>
</div>
    </div>
  );
}

export default Homepage;

import React from "react";
import LeftPanel from "../ components/LeftPanel";
import RightPanel from "../ components/RightPanel";
import SearchBar from "../ components/SearchBar";
import RecommendedSongs from "../ components/RecommendedSongs";
import RecommendedArtists from "../ components/RecommendedArtists";
import AudioPlayer from "../ components/AudioPlayer";
import Carousel from "../ components/Carousel";

export default function HomePage() {
  return (
    <div className={`h-screen flex flex-col`}>
      <div className={`main_container flex h-[90vh]`}>
        <div className={`left_panel w-1/5 h-full border flex flex-col`}>
          <LeftPanel />
        </div>
        <div className={`center_panel w-3/5 border flex flex-col px-12`}>
          <SearchBar />
          <Carousel />
          <RecommendedSongs />
          <RecommendedArtists />
        </div>
        <div className={`right_panel w-1/5 border`}>
          <RightPanel />
        </div>
      </div>
      <div className={`audio_player h-[10vh]`}>
        <AudioPlayer />
      </div>
    </div>
  );
}

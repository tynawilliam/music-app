import React from "react";
import LeftPanel from "../ components/LeftPanel";
import RightPanel from "../ components/RightPanel";
import SearchBar from "../ components/SearchBar";
import { FeaturedMusicCarousel } from "../ components/FeaturedMusicCarousel";
import RecommendedSongs from "../ components/RecommendedSongs";
import RecommendedArtists from "../ components/RecommendedArtists";
import AudioPlayer from "../ components/AudioPlayer";

export default function HomePage() {
  return (
    <div className={`h-screen flex flex-col`}>
      <div className={`main_container flex h-[90vh]`}>
        <div className={`left_panel w-1/5 h-full border flex flex-col`}>
          <LeftPanel />
        </div>
        <div className={`center_panel w-3/5 border`}>
          <SearchBar />
          <FeaturedMusicCarousel />
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

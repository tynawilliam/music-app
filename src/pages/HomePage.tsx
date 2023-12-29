import React, { useState, useEffect } from "react";
import LeftPanel from "../ components/LeftPanel";
import RightPanel from "../ components/RightPanel";
import SearchBar from "../ components/SearchBar";
import RecommendedSongs from "../ components/RecommendedSongs";
import RecommendedArtists from "../ components/RecommendedArtists";
import AudioPlayer from "../ components/AudioPlayer";
import Carousel from "../ components/Carousel";
import { getFeaturedMusic } from "../utils/api";
import { SongItem } from "../types/types";

export default function HomePage() {
  const [songList, setSongList] = useState<SongItem[]>([]);

  useEffect(() => {
    const featuredMusic = async () => {
      const data = await getFeaturedMusic();
      setSongList(data);
    };
    featuredMusic();
  }, []);

  return (
    <div className={`flex flex-col min-h-screen`}>
      <div className={`main_container md:flex h-[90vh]`}>
        <div className="left_panel hidden md:block md:w-1/5 h-full border flex flex-col">
          <LeftPanel />
        </div>
        <div
          className={`center_panel w-full md:w-3/5 border flex flex-col px-4 md:px-12`}
        >
          <SearchBar />
          <Carousel />
          <RecommendedSongs songList={songList} />
          <RecommendedArtists />
          <div className="md:hidden my-5 ">
            <RightPanel />
          </div>
        </div>
        <div className="right_panel hidden md:block w-1/5 border">
          <RightPanel />
        </div>
      </div>
      <div className={`fixed bottom-0 audio_player h-[10vh] w-full bg-red-100`}>
        <AudioPlayer />
      </div>
    </div>
  );
}

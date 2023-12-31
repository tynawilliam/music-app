import React, { useState, useEffect } from "react";
import LeftPanel from "../ components/LeftPanel";
import RightPanel from "../ components/RightPanel";
import SearchBar from "../ components/SearchBar";
import RecommendedSongs from "../ components/RecommendedSongs";
import RecommendedArtists from "../ components/RecommendedArtists";
import AudioPlayer from "../ components/AudioPlayer";
import Carousel from "../ components/Carousel";
import { getFeaturedMusic, getFeaturedArtists } from "../utils/api";
import { SongItem } from "../types/types";
import { ArtistItem } from "../types/types";

export default function HomePage() {
  const [songList, setSongList] = useState<SongItem[]>([]);
  const [artistList, setArtistList] = useState<ArtistItem[]>([]);

  useEffect(() => {
    const featuredMusic = async () => {
      const data = await getFeaturedMusic();
      setSongList(data);
    };
    const featuredArtists = async () => {
      const data = await getFeaturedArtists();
      setArtistList(data);
    };

    featuredMusic();
    featuredArtists();
  }, []);

  return (
    <div className={`flex flex-col min-h-screen bg-primary text-neutral-400`}>
      <div className={`main_container md:flex h-[90vh]`}>
        <div className="left_panel hidden md:block md:w-1/5 h-full flex flex-col">
          <LeftPanel />
        </div>
        <div
          className={`center_panel w-full md:w-3/5 flex flex-col px-4 md:px-12`}
        >
          <SearchBar />
          <Carousel />
          <RecommendedSongs songList={songList} />
          <RecommendedArtists artistList={artistList} />
          <div className="md:hidden my-5 ">
            <RightPanel />
          </div>
        </div>
        <div className="right_panel hidden md:block w-[25vw]">
          <RightPanel />
        </div>
      </div>
      <div className={`fixed bottom-0 audio_player h-[10vh] w-full`}>
        <AudioPlayer audioList={songList} />
      </div>
    </div>
  );
}

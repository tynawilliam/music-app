import React, { useState, useEffect } from "react";
import SearchBar from "../ components/SearchBar";
import RecommendedSongs from "../ components/RecommendedSongs";
import RecommendedArtists from "../ components/RecommendedArtists";
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

    featuredMusic();
  }, []);

  useEffect(() => {
    const featuredArtists = async () => {
      const data = await getFeaturedArtists();
      setArtistList(data);
    };
    featuredArtists();
  }, []);

  return (
    <div className="px-4 md:px-12 py-6">
      <SearchBar />
      <Carousel />
      <RecommendedSongs songList={songList} />
      <RecommendedArtists artistList={artistList} />
    </div>
  );
}

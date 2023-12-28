import React, { useEffect, useState } from "react";
import { getFeaturedMusic } from "../utils/api";

interface MusicItem {
  id: string;
  title: string;
  artist: string;
  image: string;
}

export const FeaturedMusicCarousel: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [featuredMusic, setFeaturedMusic] = useState<MusicItem[]>([]);

  useEffect(() => {
    const fetchMusic = async () => {
      setLoading(true);
      const data: MusicItem[] = await getFeaturedMusic();
      setFeaturedMusic(data);
      setLoading(false);
    };

    fetchMusic();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {featuredMusic.map((music) => (
        <div key={music.id}>
          <h3>{music.title}</h3>
          <p>{music.artist}</p>
        </div>
      ))}
    </div>
  );
};

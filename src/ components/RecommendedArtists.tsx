import React from "react";
import { ArtistItem } from "../types/types";

export default function RecommendedArtists({
  artistList,
}: {
  artistList: ArtistItem[];
}) {
  return (
    <div className="mb-10">
      <h1>Recommended Artists</h1>
      <div className="flex space-x-10 overflow-x-auto">
        {artistList.map((artist) => (
          <div key={artist.id}>
            <img
              src={artist.image}
              alt=""
              className="w-20 h-20 rounded-full object-cover"
            />
            <h3>{artist.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

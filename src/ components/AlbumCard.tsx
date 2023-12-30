import React from "react";
import { SongItem } from "../types/types";

export default function AlbumCard({ song }: { song: SongItem }) {
  return (
    <div className="w-40 flex flex-col flex-shrink-0 bg-secondary">
      <img src={song.image} alt="" className="w-full h-28" />
      <div className="text-left">
        <h1 className="text-white">{song.title}</h1>
        <p>{song.artist}</p>
      </div>
    </div>
  );
}

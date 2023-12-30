import React from "react";
import { SongItem } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function AlbumCard({ song }: { song: SongItem }) {
  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Play song", song.title);
  };

  return (
    <div className="w-40 flex flex-col flex-shrink-0 bg-secondary relative group">
      <img src={song.image} alt={song.title} className="w-full h-full" />
      <div className="text-left px-2 py-1">
        <h1 className="text-white text-sm font-bold truncate">{song.title}</h1>
        <p className="text-gray-400 text-xs truncate">{song.artist}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        <FontAwesomeIcon
          icon={faPlay}
          className="text-white text-3xl"
          onClick={handlePlayClick}
        />
      </div>
    </div>
  );
}

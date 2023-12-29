import React from "react";
import { SongItem } from "../types/types";
import AlbumCard from "./AlbumCard";

export default function RecommendedSongs({
  songList,
}: {
  songList: SongItem[];
}) {
  return (
    <div className="h-48 border mb-10 flex flex-col">
      <h1>Recommended Songs</h1>
      <div className="flex space-x-4 overflow-x-auto">
        {songList.map((song) => (
          <>
            <AlbumCard song={song} />
          </>
        ))}
      </div>
    </div>
  );
}

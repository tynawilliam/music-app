import React, { useState } from "react";

export default function RightPanel() {
  const [activeSong, setActiveSong] = useState("");

  const songs = [
    "song 1",
    "song 2",
    "song 3",
    "song 4",
    "song 5",
    "song 6",
    "song 7",
    "song 8",
    "song 9",
    "song 10",
  ];

  const albums = ["album 1", "album 2", "album 3", "album 4"];

  const handleSetActiveSong = (song: string) => {
    setActiveSong(song);
  };

  return (
    <div className="h-full flex flex-col items-center bg-primary font-sans">
      <div className="h-16 w-4/5 mb-10 text-accent">Nav</div>
      <div className="new_songs h-60 mb-20 md:mb-0 w-4/5">
        <h3 className="text-accent">New Songs</h3>
        <div className="md:h-48 overflow-auto">
          <ol className="list-decimal list-inside">
            {songs.map((song) => (
              <li
                key={song}
                className={`cursor-pointer h-8 ${
                  activeSong === song ? "bg-accent text-black" : ""
                }`}
                onClick={() => handleSetActiveSong(song)}
              >
                {song}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="new_albums flex flex-col py-40 md:py-5 md:my-0 md:h-60 w-4/5">
        <h3 className="text-white">New Albums</h3>
        <ul className="list-none">
          {albums.map((album) => (
            <li key={album} className="cursor-pointer bg-secondary my-4 h-16">
              {album}
            </li>
          ))}
        </ul>
        <button className="text-primary bg-accent">View All</button>
      </div>
    </div>
  );
}

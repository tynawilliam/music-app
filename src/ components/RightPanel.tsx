import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function RightPanel() {
  const [activeSong, setActiveSong] = useState("");

  const songs = [
    "Song 1",
    "Song 2",
    "Song 3",
    "Song 4",
    "Song 5",
    "Song 6",
    "Song 7",
    "Song 8",
    "Song 9",
    "Song 10",
  ];

  const albums = ["album 1", "album 2", "album 3", "album 4"];

  const handleSetActiveSong = (song: string) => {
    setActiveSong(song);
  };

  return (
    <div className="h-full flex flex-col items-center bg-primary font-sans">
      <div className="h-16 w-4/5 mb-5 text-accent">Nav</div>
      <div className="new_songs h-60 mb-20 md:mb-0 w-4/5 relative">
        <h3 className="text-white mb-4">New Songs</h3>
        <div className="md:h-48 overflow-auto hide-scrollbar relative">
          <ol className="list-decimal list-inside">
            {songs.map((song) => (
              <li
                key={song}
                className={`flex items-center justify-between cursor-pointer h-8 p-1 pl-2 ${
                  activeSong === song
                    ? "bg-accent rounded text-black"
                    : "text-white"
                }`}
                onClick={() => handleSetActiveSong(song)}
              >
                <span>{song}</span>
                {activeSong === song && (
                  <FontAwesomeIcon icon={faPlay} className="mr-2" />
                )}
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

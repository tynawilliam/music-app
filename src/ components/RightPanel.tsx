import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function RightPanel() {
  const [activeSong, setActiveSong] = useState<string>("");

  const navigate = useNavigate();

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

  const userFirstName = "John";
  const userName = "@johndoe";
  const userAvatar = "/path-to-avatar.jpg";

  const albums = [
    {
      name: "Album 1",
      artist: "Artist 1",
      cover: "/path-to-album-cover-1.jpg",
    },
    {
      name: "Album 2",
      artist: "Artist 2",
      cover: "/path-to-album-cover-2.jpg",
    },
    {
      name: "Album 3",
      artist: "Artist 3",
      cover: "/path-to-album-cover-3.jpg",
    },
    {
      name: "Album 4",
      artist: "Artist 4",
      cover: "/path-to-album-cover-4.jpg",
    },
  ];

  const handleSetActiveSong = (song: string) => {
    setActiveSong(song);
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  return (
    <div className="h-full flex flex-col items-center bg-primary font-sans">
      <div className="w-4/5 mb-10 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={userAvatar}
            alt="User"
            className="h-10 w-10 rounded-full mr-3"
          />
          <div>
            <div className="text-white font-semibold">{userFirstName}</div>
            <div className="text-accent text-sm">{userName}</div>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faCog}
          className="text-white cursor-pointer"
          onClick={handleSettingsClick}
        />
      </div>
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
          {albums.map((album, index) => (
            <li
              key={index}
              className="cursor-pointer bg-secondary my-4 flex items-center"
            >
              <img
                src={album.cover}
                alt={album.name}
                className="w-16 h-16 object-cover"
              />
              <div className="ml-4">
                <div className="text-white font-semibold">{album.name}</div>
                <div className="text-neutral-400">{album.artist}</div>
              </div>
            </li>
          ))}
        </ul>

        <button className="text-neutral-400 bg-secondary">View All</button>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faPlay, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { SongItem, SongCardProps } from "../types/types";
import { getFeaturedMusic } from "../utils/api";

const SongCard: React.FC<SongCardProps> = ({ song, isActive, onSetActive }) => (
  <div
    onClick={onSetActive}
    className={`flex items-center justify-between rounded-lg cursor-pointer
      ${isActive ? "bg-accent" : "hover:bg-secondary hover:bg-opacity-90"}
      ${isActive ? "text-black" : "text-gray-200"} p-2`}
    aria-label={`Song ${song.title} by ${song.artist}`}
  >
    <img
      src={song.image}
      alt={`Cover for ${song.title}`}
      className="w-12 h-12 object-cover rounded-md mr-3"
    />
    <div className="flex flex-col flex-grow">
      <span className="font-medium">{song.title}</span>
      <span className="text-sm">{song.artist}</span>
    </div>
    <div className="flex items-center space-x-4 mr-5">
      {isActive && (
        <FontAwesomeIcon
          icon={faPlay}
          className={`${isActive ? "text-black mr-2" : "text-white mr-2"}`}
        />
      )}
      <FontAwesomeIcon
        icon={faHeart}
        className={`${isActive ? "text-black" : "text-white"}`}
      />
    </div>
  </div>
);

const RightPanel: React.FC = () => {
  const navigate = useNavigate();
  const [songs, setSongs] = useState<SongItem[]>([]);
  const [activeSongIndex, setActiveSongIndex] = useState<number>(0);

  useEffect(() => {
    getFeaturedMusic().then(setSongs).catch(console.error);
  }, []);

  // User information (example data)
  const userFirstName = "Jane";
  const userName = "@janedoe";
  const userAvatar = "/images/avatar.svg";

  return (
    <div className="flex flex-col h-full bg-primary text-white p-4">
      {/* User Navbar */}
      <div className="flex items-center justify-between w-full mb-6">
        <div className="flex items-center">
          <img
            src={userAvatar}
            alt="User Avatar"
            className="w-10 h-10 object-cover rounded-full mr-3"
          />
          <div>
            <div className="font-semibold">{userFirstName}</div>
            <div className="text-gray-400 text-sm">{userName}</div>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faCog}
          onClick={() => navigate("/settings")}
          className="cursor-pointer"
        />
      </div>

      {/* New Songs */}
      <h3 className="text-lg mb-4 font-semibold">New Songs</h3>
      <div className="overflow-y-auto hide-scrollbar">
        {songs.map((song, index) => (
          <SongCard
            key={song.id}
            song={song}
            isActive={index === activeSongIndex}
            onSetActive={() => setActiveSongIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RightPanel;

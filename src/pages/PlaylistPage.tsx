import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SongItem } from "../types/types";
import { getPlaylistSongs } from "../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faPlay,
  faPlus,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";

const PlaylistPage: React.FC = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const [playlist, setPlaylist] = useState<{
    title: string;
    image: string;
    songs: SongItem[];
  }>();

  useEffect(() => {
    const fetchPlaylist = async () => {
      const data = await getPlaylistSongs();
      setPlaylist({
        title: data[0].title,
        image: data[0].image,
        songs: data.map((song) => ({
          id: song.id,
          title: song.title,
          artist: song.artist,
          image: song.image,
          audioSrc: song.audioSrc,
        })),
      });
    };

    fetchPlaylist();
  }, [playlistId]);

  if (!playlist) return <div>Loading...</div>;

  return (
    <div className="bg-primary min-h-screen p-8">
      <div className="flex">
        <img
          src={playlist.image}
          alt={playlist.title}
          className="w-1/4 h-auto object-cover"
        />
        <div className="flex-1 ml-4">
          <h2 className="text-white font-extrabold text-4xl">
            {playlist.title}
          </h2>
          <div className="flex mt-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mr-2">
              <FontAwesomeIcon icon={faPlay} className="mr-2" /> Play
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <FontAwesomeIcon icon={faRandom} className="mr-2" /> Shuffle
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 w-[55vw]">
        {playlist.songs.map((song, index) => (
          <div
            key={song.id}
            className="flex items-center justify-between rounded text-white p-3 hover:bg-accent hover:text-black cursor-pointer"
          >
            <div className="flex items-center flex-1">
              <span className="mr-4">{index + 1}.</span>
              <div className="flex flex-col">
                <p className="font-bold">{song.title}</p>
                <p>{song.artist}</p>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faPlus}
                className="hover:text-black mr-4"
              />
              <FontAwesomeIcon
                icon={faEllipsisH}
                className="hover:text-black"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistPage;

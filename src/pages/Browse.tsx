import React from "react";
import BrowseCard from "../ components/uiComponents/BrowseCard";

export default function Browse() {
  const data = [
    {
      id: "1",
      title: "Playlist A",
      image: "/images/album1.webp",
      category: "P",
      songIds: ["2"],
    },
    {
      id: "2",
      title: "Playlist B",
      image: "/images/avi2.webp",
      category: "A",
      songIds: ["1"],
    },
    {
      id: "3",
      title: "Playlist C",
      image: "/images/avi7.jpeg",
      category: "A",
      songIds: ["1"],
    },
    {
      id: "4",
      title: "Playlist D",
      image: "/images/album8.jpeg",
      category: "A",
      songIds: ["1"],
    },
    {
      id: "5",
      title: "Playlist E",
      image: "/images/album9.jpeg",
      category: "A",
      songIds: ["1"],
    },
    {
      id: "6",
      title: "Playlist F",
      image: "/images/album10.jpeg",
      category: "A",
      songIds: ["1"],
    },
    {
      id: "7",
      title: "Playlist G",
      image: "/images/avi5.jpeg",
      category: "A",
      songIds: ["1"],
    },
    {
      id: "8",
      title: "Playlist H",
      image: "/images/album2.jpeg",
      category: "A",
      songIds: ["1"],
    },
    {
      id: "9",
      title: "Playlist I",
      image: "/images/avi4.webp",
      category: "A",
      songIds: ["1"],
    },
    {
      id: "10",
      title: "Playlist F",
      image: "/images/album10.jpeg",
      category: "A",
      songIds: ["1"],
    },
    {
      id: "11",
      title: "Playlist G",
      image: "/images/avi5.jpeg",
      category: "A",
      songIds: ["1"],
    },
    {
      id: "12",
      title: "Playlist H",
      image: "/images/album2.jpeg",
      category: "A",
      songIds: ["1"],
    },
  ];
  return (
    <div className="p-4">
      <h2 className="text-white font-extrabold text-5xl my-10 pl-4">Browse</h2>
      <h6 className="text-neutral-200 pl-4 font-semibold">Listen now</h6>
      <p className="text-neutral-400 pl-4">
        Listen to this year&apos;s best playlists
      </p>
      <div className="flex flex-wrap -mx-2 mb-10 w-[62vw]">
        {data.map((item) => (
          <div key={item.id} className="w-1/3 p2">
            <BrowseCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useRef } from "react";
import { SongItem } from "../types/types";
import AlbumCard from "./AlbumCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function RecommendedSongs({
  songList,
}: {
  songList: SongItem[];
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollAmount = 400;

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef;
      const scrollLeft =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  return (
    <div className="h-48 mt-8 mb-16 flex flex-col text-white">
      <h1>Recommended Songs</h1>
      <div className="relative flex items-center">
        <button
          className="absolute left-0 z-10 p-2 bg-black bg-opacity-50 rounded-full flex items-center justify-center h-12 w-12"
          onClick={() => handleScroll("left")}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto hide-scrollbar"
        >
          {songList.map((song, index) => (
            <AlbumCard key={index} song={song} />
          ))}
        </div>
        <button
          className="absolute right-0 z-10 p-2 bg-black bg-opacity-50 rounded-full flex items-center justify-center h-12 w-12"
          onClick={() => handleScroll("right")}
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </button>
      </div>
    </div>
  );
}

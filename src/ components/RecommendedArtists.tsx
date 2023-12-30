import React, { useRef } from "react";
import { ArtistItem } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function RecommendedArtists({
  artistList,
}: {
  artistList: ArtistItem[];
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
    <div className="mb-10 relative">
      <h1>Recommended Artists</h1>
      <button
        className="absolute left-0 z-10 p-2 bottom-5 bg-black bg-opacity-50 rounded-full flex items-center justify-center h-12 w-12"
        onClick={() => handleScroll("left")}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-white text-lg" />
      </button>
      <div
        ref={scrollContainerRef}
        className="flex space-x-10 overflow-x-auto hide-scrollbar"
      >
        {artistList.map((artist) => (
          <div key={artist.id} className="shrink-0">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <h3>{artist.name}</h3>
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 z-10 p-2 bg-black bottom-5 bg-opacity-50 rounded-full flex items-center justify-center h-12 w-12"
        onClick={() => handleScroll("right")}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-white text-lg" />
      </button>
    </div>
  );
}

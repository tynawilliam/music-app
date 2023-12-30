import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faBook,
  faHeart,
  // faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function LeftPanel() {
  const navigationItems = [
    { name: "Home", icon: faHome },
    { name: "Search", icon: faSearch },
    { name: "Library", icon: faBook },
    { name: "Favorites", icon: faHeart },
  ];

  const playlistItems = ["Pop", "Rock", "Country", "Classical", "R&B"];

  return (
    <div className="flex flex-col h-full bg-primary text-white p-5 pl-10 space-y-6">
      <h1 className="text-2xl text-accent font-bold mb-20">HIWOW</h1>
      <ul>
        {navigationItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center mb-4 cursor-pointer group"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-neutral-400 mr-7 group-hover:text-accent"
            />
            <span className="group-hover:text-accent"> {item.name} </span>
          </li>
        ))}
      </ul>

      <div>
        <h3 className="text-lg mb-2">Playlists</h3>
        <ul className="space-y-2">
          {playlistItems.map((playlist) => (
            <li
              key={playlist}
              className="group flex items-center cursor-pointer hover:text-accent"
            >
              <span className="text-neutral-400 mr-3 pr-2 group-hover:text-accent">
                —
              </span>
              <Link to={"#"} className="group-hover:text-accent">
                {playlist}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

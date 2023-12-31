import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faBook,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { setActivePage } from "../features/activePage/activePageSlice";

const LeftPanel = React.memo(() => {
  const dispatch = useDispatch();
  const activePage = useSelector((state: RootState) => state.activePage.value);

  const navigationItems = [
    { name: "Home", icon: faHome, path: "/" },
    { name: "Search", icon: faSearch, path: "/search" },
    { name: "Browse", icon: faBook, path: "/browse" },
    { name: "Favorites", icon: faHeart, path: "/favorites" },
  ];

  const playlistItems = ["Pop", "Rock", "Country", "Classical", "R&B"];

  const handleItemClick = (name: string) => {
    dispatch(setActivePage(name));
  };

  return (
    <div className="flex flex-col h-full bg-secondary text-white p-5 pl-10 space-y-6">
      <div className="text-2xl text-accent font-bold mb-20">
        <div className="circle bg-white rounded-full w-12 h-12 flex items-center justify-center">
          <span className="text-purple-800 font-bold">B</span>
        </div>
        <p className="text-white text-opacity-50">Beatz</p>
        <p className="text-xs text-white text-opacity-50">music</p>
      </div>
      <ul>
        {navigationItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center mb-4 cursor-pointer group ${
              activePage === item.name ? "text-accent" : "text-neutral-400"
            }`}
            onClick={() => handleItemClick(item.name)}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={`mr-7 group-hover:text-accent ${
                activePage === item.name ? "text-accent" : "text-neutral-400"
              }`}
            />
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-accent"
                  : "text-neutral-400 group-hover:text-accent"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div>
        <h3 className="text-lg text-neutral-400 mb-2">Playlists</h3>
        <ul className="space-y-2">
          {playlistItems.map((playlist) => (
            <li
              key={playlist}
              className="group flex items-center cursor-pointer hover:text-accent"
            >
              <NavLink to={`#${playlist}`} className="group-hover:text-accent">
                {playlist}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

LeftPanel.displayName = "LeftPanel";
export default LeftPanel;

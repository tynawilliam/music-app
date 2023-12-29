import React from "react";

export default function LeftPanel() {
  return (
    <div className="flex flex-col h-full items-center bg-secondary text-neutral-400">
      <h1 className="h-1/6 w-4/5 text-accent">LeftPanel</h1>
      <div className="h-1/6 w-4/5">
        <ul className="">
          <li>Home</li>
          <li>Search</li>
          <li>Library</li>
          <li>Favorites</li>
        </ul>
      </div>
      <div className="h-1/6 w-4/5">
        <h3>Playlists</h3>
        <ul>
          <li>Pop</li>
          <li>Rock</li>
          <li>Country</li>
          <li>Classical</li>
          <li>R&B</li>
        </ul>
      </div>
    </div>
  );
}

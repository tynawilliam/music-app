import React from "react";

export default function RightPanel() {
  return (
    <div className="h-full flex flex-col items-center bg-blue-100 ">
      <div className="h-16 w-4/5 mb-10">Nav</div>
      <div className="new_songs h-60 mb-20 w-4/5">
        <h3>New Songs</h3>
        <div className="h-48 overflow-auto">
          <ul className="">
            <li>song 1</li>
            <li>song 2</li>
            <li>song 3</li>
            <li>song 4</li>
            <li>song 5</li>
            <li>song 6</li>
            <li>song 7</li>
            <li>song 8</li>
            <li>song 9</li>
            <li>song 10</li>
            <li>song 6</li>
            <li>song 7</li>
            <li>song 8</li>
            <li>song 9</li>
            <li>song 10</li>
          </ul>
        </div>
      </div>
      <div className="new_albums h-60 w-4/5">
        <h3>New Albums</h3>
        <ul>
          <li>album 1</li>
          <li>album 2</li>
          <li>album 3</li>
          <li>album 4</li>
          <li>album 5</li>
          <li>album 6</li>
          <li>album 7</li>
          <li>album 8</li>
        </ul>
        <button>View All</button>
      </div>
    </div>
  );
}

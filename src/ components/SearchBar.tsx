import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <div className="relative hidden md:block w-1/2 my-5">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute text-zinc-500 left-3 top-1/2 transform -translate-y-1/2"
      />
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 pl-10 bg-secondary placeholder-zinc-500 text-white rounded outline-none"
      />
    </div>
  );
}

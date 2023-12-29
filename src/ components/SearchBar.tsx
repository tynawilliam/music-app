import React from "react";

export default function SearchBar() {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="hidden md:block w-1/2 h-10 my-5 pl-3 bg-secondary placeholder-zinc-500"
      />
    </>
  );
}

import React from "react";

export default function SearchBar() {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="hidden md:block w-1/2 my-5 p-2 bg-secondary placeholder-zinc-500 rounded"
      />
    </>
  );
}

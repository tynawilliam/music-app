import React from "react";

export default function Favorites() {
  return (
    <div className="bg-primary text-white min-h-screen flex flex-col items-center justify-center">
      <div className="text-center px-6">
        <h1
          className="text-8xl font-extrabold mb-8"
          style={{ textShadow: "0 5px 15px rgba(255, 255, 255, 0.15)" }}
        >
          Favorites
        </h1>
        <p className="text-3xl font-semibold mb-4">Favorite music Here</p>
      </div>
    </div>
  );
}

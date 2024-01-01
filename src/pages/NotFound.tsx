import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="text-center px-6">
        <h1
          className="text-8xl font-extrabold mb-8"
          style={{ textShadow: "0 5px 15px rgba(255, 255, 255, 0.15)" }}
        >
          404
        </h1>
        <p className="text-3xl font-semibold mb-4">Lost in the Music?</p>
        <p className="mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Maybe you hit a
          bad note?
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-lg text-lg font-medium transition-colors"
        >
          Take me back
        </Link>
      </div>
    </div>
  );
}

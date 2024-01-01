import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./ components/Layout";
import Library from "./pages/Library";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/library"
          element={
            <Layout>
              <Library />
            </Layout>
          }
        />
        <Route
          path="/favorites"
          element={
            <Layout>
              <Favorites />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

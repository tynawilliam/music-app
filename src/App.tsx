import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./ components/Layout";
import Browse from "./pages/Browse";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";

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
          path="/browse"
          element={
            <Layout>
              <Browse />
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
        <Route
          path="/search"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

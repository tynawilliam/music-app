import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { FeaturedMusicCarousel } from "./FeaturedMusicCarousel";
import { getFeaturedMusic } from "../utils/api";

jest.mock("../utils/api", () => ({
  getFeaturedMusic: jest.fn(),
}));

describe("Featured Music Carousel", () => {
  it("displays loading state initialy", async () => {
    (getFeaturedMusic as jest.Mock).mockResolvedValueOnce([]);
    render(<FeaturedMusicCarousel />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders music returned from the API", async () => {
    const mockMusicData = [
      { id: "1", title: "Song 1", artist: "Artist 1", image: "image1.jpg" },
      { id: "2", title: "Song 2", artist: "Artist 2", image: "image2.jpg" },
    ];

    (getFeaturedMusic as jest.Mock).mockResolvedValueOnce(mockMusicData);
    render(<FeaturedMusicCarousel />);

    await waitFor(() => {
      expect(screen.getByText("Song 1")).toBeInTheDocument();
      expect(screen.getByText("Song 2")).toBeInTheDocument();
    });
  });
});

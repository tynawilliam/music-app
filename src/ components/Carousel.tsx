import React from "react";
import Slider from "react-slick";

export default function Carousel() {
  const images = [
    "/images/album1.webp",
    "/images/album2.jpeg",
    "/images/album3.jpeg",
    "/images/album4.webp",
    "/images/album5.webp",
  ];
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img className="mx-10" src={image} alt="Album image" />
        </div>
      ))}
    </Slider>
  );
}

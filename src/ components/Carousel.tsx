import React from "react";
import Slider from "react-slick";

export default function Carousel() {
  const images = [
    "/images/spotlight1.avif",
    "/images/spotlight2.webp",
    "/images/spotlight3.jpeg",
    "/images/spotlight4.jpeg",
    "/images/spotlight5.png",
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
          <img className="pt-5 my-10" src={image} alt="Album image" />
        </div>
      ))}
    </Slider>
  );
}

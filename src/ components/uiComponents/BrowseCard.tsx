import React from "react";
import { CardProps } from "../../types/types";

const BrowseCard: React.FC<CardProps> = ({
  id,
  title,
  image,
  // category,
  songIds,
}) => {
  const handleClick = () => {
    console.log(songIds);
  };
  return (
    <div id={id} className=" m-5 overflow-hidden " onClick={handleClick}>
      <img className="w-80 h-64 rounded-md" src={image} alt={title} />
      <div className="px-6 py-4 text-white">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};

export default BrowseCard;

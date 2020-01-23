import React from "react";
import Gif from "../Gif/Gif";
import "./style.scss";

const GifList = ({ gifs }) => {
  return (
    <div className="gif__container container">
      {gifs.map(gif => (
        <Gif key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

export default GifList;

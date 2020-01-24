import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
const Gif = ({ gif }) => {
  const { title, rating, id } = gif;
  const { url } = gif.images.downsized_medium;
  return (
    <Link to={`/gifs/${id}`}>
      <div className="gif">
        <img src={url} alt={title} />
        <div className="gif__description">
          <p>{title || "No description"}</p>
          <div className="gif__rating">{rating}</div>
        </div>
      </div>
    </Link>
  );
};

export default Gif;

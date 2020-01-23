import React from "react";
import "./style.scss";
const Gif = ({ gif }) => {
  const { title } = gif;
  const { url } = gif.images.downsized_medium;
  console.log(url);
  return (
    <div className="gif">
      <img src={url} alt={title} />
      <div className="gif__description">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Gif;

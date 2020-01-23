import React from "react";
import "./style.scss";
const Gif = ({ gif }) => {
  const { title } = gif;
  const { url } = gif.images.downsized_large;
  console.log(url);
  return (
    <div className="gif">
      <img src={url} alt={title} />
    </div>
  );
};

export default Gif;

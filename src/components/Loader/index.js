import React from "react";
const Loader = ({ message, height }) => {
  return (
    <div className="loader" style={{ height }}>
      <img src="/loader.svg" alt="" />
      <p>{message || "Fetching gif in a jiffy..."}</p>
    </div>
  );
};

export default Loader;

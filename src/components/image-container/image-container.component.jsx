import React from "react";

import "./image-container.style.scss";

const ImageContainer = ({ src, alt }) => (
  <div className="image-container">
    <img src={src} alt={alt} />
  </div>
);

export default ImageContainer;

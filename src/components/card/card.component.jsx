import React from "react";

import "./card.style.scss";
import ImageContainer from "../image-container/image-container.component";
import Button from "../button/button.component";

const Card = ({ src, alt, price, title, onClick, preview }) => (
  <div className="card">
    <ImageContainer src={src} alt={alt} />
    <h1 className="card-title">{title}</h1>
    {price && <span className="card-price">${price}</span>}
    {!preview && <Button onClick={onClick} text="Add to card" />}
  </div>
);

export default Card;

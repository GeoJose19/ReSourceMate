import React from 'react';
import "./Card.css"
const Card = ({ product }) => {
  const { name, description, price, imageUrl } = product;
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default Card;

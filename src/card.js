import React from 'react';
import './card.css';

const Card = ({ title, description, cimagesFolder, imageFileName }) => {
    return (
      <div className="card" style={{ backgroundImage: `url(${require(`./${cimagesFolder}/${imageFileName}`)}` }}>
        <div className="card-content">
         <div className="card-text">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
        </div>
      </div>
    );
  };

export default Card;

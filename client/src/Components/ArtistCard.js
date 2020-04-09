import React from "react";
import "./ArtistCard.css";

const ArtistCard = ({ name, photo, type }) => {
  return (
    <div id="card" className="dib br4 pa3 ma2 dim h5 mw5">
      <div>
        <img alt={name} src={photo} width={100} height={100} />
      </div>
      <div id="about">
        <h4>{name}</h4>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default ArtistCard;

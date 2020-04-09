import React from "react";
import ArtistCard from "./ArtistCard";
import "./RecentlyPlayedCards.css";

const RecentlyPlayedCards = ({ Artists }) => {
  const cardComponents = Artists.map((user) => {
    return (
      <ArtistCard
        key={user.id}
        name={user.name}
        photo={user.photo}
        type={user.type}
      />
    );
  });
  return (
    <div>
      <h1 className="Head">Recently played</h1>
      {cardComponents}
    </div>
  );
};

export default RecentlyPlayedCards;

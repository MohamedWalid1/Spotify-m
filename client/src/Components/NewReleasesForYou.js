import React from "react";
import ArtistCard from "./ArtistCard";

const NewReleasesForYou = ({ Artists }) => {
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
      <h1 className="Head">New Releases For You</h1>
      {cardComponents}
    </div>
  );
};

export default NewReleasesForYou;

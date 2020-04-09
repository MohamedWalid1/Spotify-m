import React from 'react';
import AlbumCard from './AlbumCard';

const AlbumList = ({ albums }) => {
  return (
    <div>
      {
        albums.map((user, i) => {
          return (
            <AlbumCard
              key={i}
              id={albums[i].id}
              name={albums[i].name}
              
              />
          );
        })
      }
    </div>
  );
}

export default AlbumList;
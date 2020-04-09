import React from 'react';
import SongCard from './SongCard';

const SongList = ({ songs }) => {
  return (
    <div>
      {
        songs.map((user, i) => {
          return (
            <SongCard
              key={i}
              id={songs[i].id}
              name={songs[i].name}
              
              />
          );
        })
      }
    </div>
  );
}

export default SongList;
import React from 'react';
import ReactDOM from 'react-dom';
import ArtistCard from './ArtistCard';



it("Artist Cards renders right",() =>{
    const div = document.createElement("div");
    ReactDOM.render(<ArtistCard></ArtistCard>, div);
})
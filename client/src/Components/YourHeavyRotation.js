import React from 'react';
import ArtistCard from './ArtistCard';


const YourHeavyRotation = ({Artists}) =>{
    const cardComponents=Artists.map(user => {
        return <ArtistCard key={user.id}  name={user.name} photo={user.photo} type={user.type} />
    })
    return(
        <div >
            <h1 className='Head'>Your Heavy Rotation</h1>
            {cardComponents}
        </div> 
    );
}


export default YourHeavyRotation;
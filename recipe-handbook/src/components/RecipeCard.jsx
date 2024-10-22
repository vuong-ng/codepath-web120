// import { useState } from 'react';
const RecipeCard = ({ name, tags, address }) => {
    return (
        <div className='card'>
            {/* <img src={`${img}`} alt={`${description}`} /> */}
            <h3>{name}</h3>
            <h2>{tags}</h2>
            <p>{address}</p>
        </div>
    )
}
export default RecipeCard;
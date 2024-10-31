// import { useState } from 'react';
import { Link } from "react-router-dom";
const RecipeCard = ({ name, tags, state, id }) => {
    return (
        <div className='card'>
            {/* <img src={`${img}`} alt={`${description}`} /> */}
            {/* <h3>{name}</h3>
            <h4>{tags}</h4>
            <p>{state}</p> */}
            <Link
                style={{ color: "Black" }}
                to={`/brewDetails/${id}`}
                key={id}
            >
                        <h3>{name}</h3>
                        <h4>{tags}</h4>
                        <p>{state}</p>
                    </Link>
        </div>
    )
}
export default RecipeCard;
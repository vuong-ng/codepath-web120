import React from "react";
const Card = (props) => {
    return (
        <div className="Card">
            <div id="img"><img src={props.img} alt={props.alt} width="300" height="300" /></div>
            <h2>{props.resName}</h2>
            <h4>{props.location}</h4>
            <a href={props.link}>
            <button>View Menu</button>
            </a>
        </div>
    )
}
export default Card;
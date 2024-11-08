import React from 'react'
import { useState } from 'react'
import './Card.css'
import chick from './chick.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={chick} width={250} height={40} align={'center'} /></Link>
          <h2 className="title">Name: {props.name}</h2>
      <h3 className="author">{"Skills: " + props.skills}</h3>
      <h4 className='personality'>Personality: {props.personality}</h4>
      </div>
  );
};

export default Card;
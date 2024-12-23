import React from "react";
import "./card.style.css";

export const Card  = (props) => 
    (<div className="card-container">
        <img alt="monsters" src={`https://robohash.org/${props.monstores.id}?set=set2&size=180x180`}/>
        <h3>{props.monstores.name}</h3>
        <p>{props.monstores.email}</p>
    </div>);

import React from "react";
import "./card-list.style.css";
import {Card} from "../card/card.component";

export const CardList = props =>
    // console.log(props);
    (<div className="card-list"> 
        {props.monstores.map(monst=>(
        <Card key ={monst.id} monstores={monst}/>
        )
      )}
    
    </div>);

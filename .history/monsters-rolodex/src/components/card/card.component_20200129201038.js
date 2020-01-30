import React from 'react';

import './card-styles.css';

export const Card = (props) => {
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}.png?set=set2&size=150x150`} alt="monster"/>
            <h1>{props.monster.name}</h1>
        </div>
    );
}
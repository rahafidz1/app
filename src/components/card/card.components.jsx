import React from 'react'
import './card.style.css'

export const Card = props => (
    <div className="card-containers">
        <img alt="theName" src={`https://robohash.org/${props.theName.id}?set=set2&size=180x180`} />
        <h2>{props.theName.name}</h2>
        <p>{props.theName.email}</p>        
    </div>
)

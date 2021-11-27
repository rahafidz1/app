import React from 'react'
import './card-list.style.css'
import { Card } from '../card/card.components'


export default function CardList(props) {
    return <div className="card-list">
        {props.theName.map(theName => (
            <Card key={theName.id} theName={theName}/>
        ))}
      </div>
    
}

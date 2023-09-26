import React from 'react';
import { Card } from '../Card/Card';

export const Cards = props => {
    return (
      <div className="Cards">
        {props.cards.map((card) => (<Card card={card}>{card.cardImg}</Card>))}
      </div>
    )
  }
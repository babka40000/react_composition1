import React from 'react'
import "./css/card.css";

export const Card = props => {
    const {cardTitle, cardText, cardLinkText } = props.card;
  
    return (
        <div class="card">
            {props.children}
            <div class="card-body">
                <h5 class="card-title">{cardTitle}</h5>
                <p class="card-text">{cardText}</p>
                <a href="#" class="btn btn-primary">{cardLinkText}</a>
            </div>
        </div>
    )
  }
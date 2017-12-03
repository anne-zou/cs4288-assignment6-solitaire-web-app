/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {} from './card.css';

/*************************************************************************/

export const Card = ({ card, top, left, onClick, pileId }) => {
    if (card.up == 'true') card.up = true;
    else if (card.up == 'false') card.up = false;
    const source = card.up ? `/images/${card.value}_of_${card.suit}.png` : "/images/face_down.jpg";
    const style = { left: `${left}%`, top: `${top}%` };
    const id = `${card.suit}:${card.value}`;
    return <img
    id = { id }
    onClick = { onClick }
    className = "card"
    style = { style }
    src = { source }
    data-pileid = { pileId } // used to identify the pile when clicked
    />;
};

export class Pile extends Component {
    render() {
        const cards = this.props.cards.map((card, index) => {
            let top = this.props.horizontal ? 0 : index * this.props.spacing;
            let left = this.props.horizontal ? index * this.props.spacing : 0;
            return <Card
            key = { index }
            card = { card }
            up = { this.props.up }
            top = { top }
            left = { left }
            onClick = { this.props.onClick }
            pileId = { this.props.pileId }
            />;
        });
        const className = this.props.className ?
            "card-pile " + this.props.className :
            "card-pile";
        return <div onClick = { this.props.onClick } id = { this.props.pileId } className = { className }>
            <div className = "card-pile-frame"/> { cards } 
        </div>;
    }
}

Pile.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func,
    horizontal: PropTypes.bool,
    spacing: PropTypes.number,
    maxCards: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number
};
Pile.defaultProps = {
    horizontal: false, // Layout horizontal?
    spacing: 17 // In percent
};
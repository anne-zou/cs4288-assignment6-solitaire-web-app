/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component } from 'react';
import { withRouter } from 'react-router';

/*************************************************************************/

import { Pile } from './pile';

class Game extends Component { // TODO make draw count configurable
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            startDrag: { x: 0, y: 0 },
            pile1: [],
            pile2: [],
            pile3: [],
            pile4: [],
            pile5: [],
            pile6: [],
            pile7: [],
            stack1: [],
            stack2: [],
            stack3: [],
            stack4: [],
            draw: [],
            discard: [],
        };

        this.onClick = this.onBackgroundClick.bind(this);
        this.onTableauPileClick = this.onTableauPileClick.bind(this);
        this.onFoundationPileClick = this.onFoundationPileClick.bind(this);
        this.onDrawPileClick = this.onDrawPileClick.bind(this);
        this.onDiscardPileClick = this.onDiscardPileClick.bind(this);
        this.onBackgroundClick = this.onBackgroundClick.bind(this);
        this.verifyMoveToTableau = this.verifyMoveToTableau.bind(this);
        this.verifyMoveToFoundation = this.verifyMoveToFoundation.bind(this);
        this.validateAndMakeMove = this.validateAndMakeMove.bind(this);
    }

    validateAndMakeMove(move) {
        this.setState({ selected: null });

        // Send move to server to be validated
        $.ajax({
                url: `/v1/game/${this.props.match.params.id}`,
                method: "put",
                data: { move: move }
            }).then(newState => {
                console.log('Move is valid');
                this.setState(newState);
            })
            .fail(err => {
                console.log('Error making move');
                console.log(err.error);
            });
    }

    componentDidMount() {
        $.ajax({
            url: `/v1/game/${this.props.match.params.id}`
        }).then(data => {
            this.setState({
                pile1: data.pile1,
                pile2: data.pile2,
                pile3: data.pile3,
                pile4: data.pile4,
                pile5: data.pile5,
                pile6: data.pile6,
                pile7: data.pile7,
                stack1: data.stack1,
                stack2: data.stack2,
                stack3: data.stack3,
                stack4: data.stack4,
                draw: data.draw,
                discard: data.discard,
                drawCount: data.drawCount
            });
        }).fail(err => {
            // TODO: Should show a helpful error message that the game could not be found
            console.log(err);
        });
    }

    onBackgroundClick(ev) { // if background is clicked
        ev.stopPropagation();

        // Cancel any existing selection
        this.setState({
            selected: null
        });
         
    }

    onDrawPileClick(ev) { // one click, no need for separate from/to handling
        ev.stopPropagation(); // prevent event from bubbling up

        // Check if something is already selected
        if (this.state.selected) {
            // Cancel selection
            this.setState({ selected: null });
            return;
        }
         

        const drawPile = this.state.draw;
        const discardPile = this.state.discard;

        // Move drawCount cards (or all remaining cards, whichever is less) to discard pile
        let num = (this.state.draw.length > this.state.drawCount) ?
            this.state.drawCount : this.state.draw.length;

        if (num != 0) { // There are still cards left in the draw pile
            // Create the move
            const move = {
                // cards[0] should be the first to be appended to the destination pile
                cards: drawPile.slice(-1 * num).reverse().map(card => {
                    return { suit: card.suit, value: card.value, up: true };
                }),
                src: "draw",
                dst: "discard"
            };

            console.log(move);

            // Send move to server to be validated
            this.validateAndMakeMove(move);

        } else { // no cards left in the draw pile
            const move = {
                cards: discardPile.reverse().map(card => {
                    return { suit: card.suit, value: card.value, up: false };
                }),
                src: "discard",
                dst: "draw"
            }

            console.log(move);

            // Send move to server to be validated
            this.validateAndMakeMove(move);

        }
    }

    onDiscardPileClick(ev) { // can only move from, not to
        ev.stopPropagation(); // prevent event from bubbling up
        const targetAttributes = ev.target.id.split(':');
        const targetSuit = targetAttributes[0];
        const targetRank = targetAttributes[1];
        const discardPile = this.state.discard;

        // Check if something is already selected
        if (this.state.selected) {
            // Cancel selection
            this.setState({ selected: null });
            return;
        }
         

        // Otherwise, only allow the top card to be clicked
        if (discardPile.length > 0 &&
            targetSuit === discardPile[discardPile.length - 1].suit &&
            targetRank === discardPile[discardPile.length - 1].value) {
            // Select the top card
            this.setState({
                selected: {
                    cards: [discardPile[discardPile.length - 1]],
                    src: "discard",
                    index: discardPile.length - 1
                }
            });
             
        }
    }

    onFoundationPileClick(ev) {
        ev.stopPropagation(); // prevent event from bubbling up

        const targetid = ev.target.id;
        // if the target was not an empty stack, targetid would be 
        // <suit>:<rank> of the clicked card
        const isEmptyPile = targetid.startsWith('stack');

        // Which stack was clicked?
        let thisStackId = "";
        if (isEmptyPile) thisStackId = targetid;
        else thisStackId = ev.target.dataset.pileid;
        const thisStack = this.state[thisStackId];

        // Was anything already selected?
        const selected = this.state.selected;

        // Check if something is already selected
        if (selected) {

            // Check that only 1 card is selected, and that the move is allowed
            if (selected.cards.length === 1 &&
                ( // either pile is empty and selected card is an ace
                    (isEmptyPile && selected.cards[0].value === 'ace') || // or selected card has same suit & is one rank higher than the top card in the pile
                    this.verifyMoveToFoundation(targetid.split(':')[0],
                        targetid.split(':')[1], selected.cards[0].suit,
                        selected.cards[0].value)
                )
            ) {
                // Move is valid! Create move.
                const move = {
                    cards: selected.cards,
                    src: selected.src,
                    dst: thisStackId
                };

                console.log(move);

                // Send move to server to be validated
                this.validateAndMakeMove(move);

            } else {
                // Cancel selection
                this.setState({ selected: null });
                 
            }

            return;
        }

        // Nothing was already selected, so we try to select something
        if (!targetid.startsWith('stack')) { // make sure not an empty pile
            this.setState({
                selected: {
                    cards: [thisStack[thisStack.length - 1]], // top card
                    src: thisStackId,
                    index: thisStack.length - 1
                }
            });
             
        }
    }

    onTableauPileClick(ev) {
        ev.stopPropagation();

        const targetid = ev.target.id;
        const targetCardAttributes = targetid.split(':');
        const targetCardSuit = targetCardAttributes[0];
        const targetCardRank = targetCardAttributes[1];

        // if the target was not an empty stack, targetid would be 
        // <suit>:<rank> of the clicked card
        const isEmptyPile = targetid.startsWith('pile');

        // Which pile was clicked?
        let thisPileId = "";
        if (isEmptyPile) thisPileId = targetid;
        else thisPileId = ev.target.dataset.pileid;
        const thisPile = this.state[thisPileId];

        // Was anything already selected?
        const selected = this.state.selected;

        // Check if something is already selected
        if (selected) {

            // Check that the move is valid
            if ( // either the pile is empty and we are moving a king there
                (isEmptyPile && selected.cards[0].value === 'king') || // or the destination card is at the top of its pile and 
                // the root selected card can go directly below it
                (targetCardSuit === thisPile[thisPile.length - 1].suit &&
                    targetCardRank === thisPile[thisPile.length - 1].value &&
                    this.verifyMoveToTableau(targetCardSuit, targetCardRank,
                        selected.cards[0].suit, selected.cards[0].value))
            ) {
                // Move is valid! Create move.
                const move = {
                    cards: selected.cards,
                    src: selected.src,
                    dst: thisPileId
                };

                console.log(move);

                // Send move to server to be validated
                this.validateAndMakeMove(move);

            } else {
                // Cancel selection
                this.setState({ selected: null });
                 
            }

            return;
        }

        // Nothing was already selected, so we try to select something.
        // Find where the clicked Card is in the pile
        let index = -1;
        for (let i = 0; i < thisPile.length; ++i) {
            if (thisPile[i].suit === targetCardSuit &&
                thisPile[i].value === targetCardRank) {
                index = i;
                break;
            }
        }

        if (index >= 0 && thisPile[index].up) { // clicked card must be face up
            this.setState({
                selected: {
                    // cards south of (in front of) and including the clicked card in the pile;
                    // cards[0] should be the first card to be put down on the destination pile
                    cards: thisPile.slice(index),
                    src: thisPileId,
                    index: index // index of the bottommost card to be moved
                }
            });
             

        }
    }

    // bottomCardSuit, bottomCardRank, topCardSuit, and topCardRank
    // should both be strings representing the suits and ranks of the 
    // two respective cards.
    // Returns true if the cards have the same suit and topCard is one
    // rank higher than bottomcard.
    verifyMoveToFoundation(bottomCardSuit, bottomCardRank, topCardSuit, topCardRank) {
        if (bottomCardSuit != topCardSuit)
            return false; // false if suits are different
        const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            'jack', 'queen', 'king'
        ];
        const nextIndex = ranks.indexOf(bottomCardRank) + 1;
        if (nextIndex <= 0 && nextIndex >= ranks.length)
            return false; // false if higher index is invalid
        return ranks[nextIndex] === topCardRank; // verify correct rank
    }

    // higherCardSuit, higherCardRank, lowerCardSuit and lowerCardRank 
    // should both be strings representing the suits and ranks of the 
    // two respective cards.
    // Returns true if higherCard is of the opposite color and one rank 
    // higher than lowerCard, false otherwise.
    verifyMoveToTableau(higherCardSuit, higherCardRank, lowerCardSuit, lowerCardRank) {

        // Check colors
        const redSuits = ['diamonds', 'hearts'];
        const blackSuits = ['spades', 'clubs'];
        if ((redSuits.includes(higherCardSuit) && redSuits.includes(lowerCardSuit)) ||
            (blackSuits.includes(higherCardSuit) && blackSuits.includes(lowerCardSuit)))
            return false; // false if both red or both black

        // Check ranks
        const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            'jack', 'queen', 'king'
        ];
        const nextIndex = ranks.indexOf(lowerCardRank) + 1;
        if (nextIndex <= 0 || nextIndex >= ranks.length)
            return false; // false if higher index is invalid
        return ranks[nextIndex] === higherCardRank; // verify correct rank
    }

    render() {
        console.log(this.state);
        return <div onClick={this.onBackgroundClick}>
            <div className="card-row">
                <Pile
                    pileId = {'stack1'}
                    cards={this.state.stack1}
                    spacing={0}
                    onClick={this.onFoundationPileClick}
                />
                <Pile
                    pileId = {'stack2'}
                    cards={this.state.stack2}
                    spacing={0}
                    onClick={this.onFoundationPileClick}
                />
                <Pile
                    pileId = {'stack3'}
                    cards={this.state.stack3}
                    spacing={0}
                    onClick={this.onFoundationPileClick}
                />
                <Pile
                    pileId = {'stack4'}
                    cards={this.state.stack4}
                    spacing={0}
                    onClick={this.onFoundationPileClick}
                />
                <div className="card-row-gap"/>
                <Pile
                    cards={this.state.draw}
                    spacing={0}
                    onClick={this.onDrawPileClick}
                />
                <Pile
                    cards={this.state.discard.slice(-1 * this.state.drawCount)}
                    horizontal={true}
                    onClick={this.onDiscardPileClick}
                />
            </div>
            <div className="card-row">
                <Pile pileId = {'pile1'} cards={this.state.pile1} onClick={this.onTableauPileClick}/>
                <Pile pileId = {'pile2'} cards={this.state.pile2} onClick={this.onTableauPileClick}/>
                <Pile pileId = {'pile3'} cards={this.state.pile3} onClick={this.onTableauPileClick}/>
                <Pile pileId = {'pile4'} cards={this.state.pile4} onClick={this.onTableauPileClick}/>
                <Pile pileId = {'pile5'} cards={this.state.pile5} onClick={this.onTableauPileClick}/>
                <Pile pileId = {'pile6'} cards={this.state.pile6} onClick={this.onTableauPileClick}/>
                <Pile pileId = {'pile7'} cards={this.state.pile7} onClick={this.onTableauPileClick}/>
            </div>
        </div>
    }
}

export default withRouter(Game);
/* Copyright G. Hemingway, @2017 */
'use strict';


let shuffleCards = (includeJokers = false) => {

    /* Return an array of 52 cards (if jokers is false, 54 otherwise). Carefully follow the instructions in the README */
    let cards = [];
    ['spades', 'clubs', 'hearts', 'diamonds'].forEach(suit => {
        ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'].forEach(value => {
            cards.push({ suit: suit, value: value });
        });
    });
    // Add in jokers here
    if (includeJokers) { /*...*/ }
    // Now shuffle
    let deck = [];
    while (cards.length > 0) {
        // Find a random number between 0 and cards.length - 1
        const index = Math.floor((Math.random() * cards.length));
        deck.push(cards[index]);
        cards.splice(index, 1);
    }
    return deck;
};

let initialState = () => {
    /* Use the above function.  Generate and return an initial state for a game */
    let state = {
        id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10),
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
        discard: []
    };

    // Get the shuffled deck and distribute it to the players
    const deck = shuffleCards(false);
    // Setup the piles
    for (let i = 1; i <= 7; ++i) {
        let card = deck.splice(0, 1)[0];
        card.up = true;
        state[`pile${i}`].push(card);
        for (let j = i + 1; j <= 7; ++j) {
            card = deck.splice(0, 1)[0];
            card.up = false;
            state[`pile${j}`].push(card);
        }
    }
    // Finally, get the draw right
    state.draw = deck.map(card => {
        card.up = false;
        return card;
    });
    return state;
};


let filterForProfile = game => ({
    id: game._id,
    game: game.game,
    color: game.color,
    draw: game.drawCount,
    start: game.start,
    winner: game.winner,
    score: game.score,
    cards_remaining: 99,
    active: game.active,
    moves: game.moves.length
});


let validMoves = (state, drawCount) => {

    let validMoves = [];

    // Possible destination piles (other than the discard pile)
    const foundationPiles = ['stack1', 'stack2', 'stack3', 'stack4'];
    const tableauPiles = ['pile1', 'pile2', 'pile3', 'pile4', 'pile5', 'pile6', 'pile7'];

    // Strictly single-card-move source piles:
    const singleCardMoveSourcePiles = foundationPiles.concat(['discard']);

    // Possibly multi-card-move source piles are just the tableauPiles

    // Helper functions:
    const isValidMove = (srcPile, dstPile, srcIndex, dstBaseRank, condition) => {

        if (srcPile.size === 0 || srcIndex < 0 || srcIndex >= state[srcPile].length)
            return false;
        if (srcPile === dstPile)
            return false;
        const srcCard = state[srcPile][srcIndex];
        if (state[dstPile].length === 0) { // empty destination pile
            return srcCard.value === dstBaseRank;
            // dstBaseRank is the card rank that can go on an empty pile
        } else { // non-empty destination pile
            const dstCard = state[dstPile][state[dstPile].length - 1];
            return condition(srcCard, dstCard);
            // condition defines the relationship between the card being moved
            // and the top card of the destination pile (returns a boolean)
        }
    }

    const isOneRankHigher = (higherCard, lowerCard) => {
        const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        const indexOneRankHigher = ranks.indexOf(lowerCard.value) + 1;

        return (indexOneRankHigher > 0 &&
            indexOneRankHigher < ranks.length &&
            ranks[indexOneRankHigher] === higherCard.value)
    }

    const oppositeSuitColors = (card1, card2) => {
        const reds = ['hearts', 'diamonds'];
        const blacks = ['spades', 'clubs'];
        return ((reds.includes(card1.suit) && blacks.includes(card2.suit)) ||
            (blacks.includes(card1.suit) && reds.includes(card2.suit)));
    }

    const trySingleCardMoveToEachFoundationPile = (srcPile) => {
        // find all possible moves from srcPile to any of the 4 foundation piles
        // in this case only one card (the top card of srcPile) is moved
        foundationPiles.forEach(dstPile => {
            if (isValidMove(srcPile, dstPile, state[srcPile].length - 1, 'ace', (srcCard, dstCard) =>
                    srcCard.suit === dstCard.suit && isOneRankHigher(srcCard, dstCard))) {
                const srcCard = state[srcPile][state[srcPile].length - 1];
                validMoves.push({
                    cards: [{ suit: srcCard.suit, value: srcCard.value, up: srcCard.up }],
                    src: srcPile,
                    dst: dstPile
                });
            }
        });
    }

    const tryMultiCardMoveToEachTableauPile = (srcPile, index) => {
        // find all possible moves from srcPile to any of the 7 tableau piles
        tableauPiles.forEach(dstPile => {
            if (isValidMove(srcPile, dstPile, index, 'king', (srcCard, dstCard) =>
                    oppositeSuitColors(srcCard, dstCard) && isOneRankHigher(dstCard, srcCard))) {
                const cards = state[srcPile].slice(index).map(card => {
                    return {
                        suit: card.suit,
                        value: card.value,
                        up: card.up
                    };
                });
                validMoves.push({
                    cards: state[srcPile].slice(index).map(card => {
                        return {
                            suit: card.suit,
                            value: card.value,
                            up: card.up
                        };
                    }),
                    src: srcPile,
                    dst: dstPile
                });
            }
        });

    }

    // Find all valid moves from single card source piles to destination piles
    singleCardMoveSourcePiles.forEach(srcPile => {
        trySingleCardMoveToEachFoundationPile(srcPile);
        tryMultiCardMoveToEachTableauPile(srcPile, state[srcPile].length - 1);
    });

    // Find all valid moves from tableau piles to destination piles
    tableauPiles.forEach(srcPile => {
        trySingleCardMoveToEachFoundationPile(srcPile);
        state[srcPile].forEach((card, index) => {
            if (card.up)
                tryMultiCardMoveToEachTableauPile(srcPile, index);
        });
    });

    // The possible draw move
    if (state.draw.length === 0) { // empty draw pile
        validMoves.push({
            cards: state.discard.reverse().map(card => {
                return {
                    suit: card.suit,
                    value: card.value,
                    up: false
                };
            }),
            src: 'discard',
            dst: 'draw'
        });
    } else {
        const num = Math.min(state.draw.length, drawCount);
        validMoves.push({
            cards: state.draw.slice(state.draw.length - num).reverse().map(card => {
                return {
                    suit: card.suit,
                    value: card.value,
                    up: true
                };
            }),
            src: 'draw',
            dst: 'discard'
        });
    }

    return validMoves;
};

let getNewState = (oldState, move) => {
    const num = move.cards.length;

    // Clone old state, then modify src and dst piles
    let newState = JSON.parse(JSON.stringify(oldState));
    newState[move.src] = newState[move.src].slice(0, newState[move.src].length - num);
    newState[move.dst] = newState[move.dst].concat(move.cards);

    // If srcPile is a tableau pile and is not empty, flip the top card face up 
    const tableauPiles = ['pile1', 'pile2', 'pile3', 'pile4', 'pile5', 'pile6', 'pile7'];
    if (tableauPiles.includes(move.src) && newState[move.src].length > 0)
        newState[move.src][newState[move.src].length - 1].up = true;
    return newState;
};


let validateMove = (state, drawCount, requestedMove) => {

    const areEqualMoves = (move1, move2) => {
        if (move1.src !== move2.src || move1.dst !== move2.dst) {
            return false;
        }
        if (move1.cards.length !== move2.cards.length) {
            return false;
        }
        for (let i = 0; i < move1.cards.length; ++i)
            if (move1.cards[i].suit !== move2.cards[i].suit ||
                move1.cards[i].value !== move2.cards[i].value ||
                move1.cards[i].up.toString() !== move2.cards[i].up.toString()) {
                return false;
            }
        return true;
    }

    const moves = validMoves(state, drawCount);

    if (moves.some(move => areEqualMoves(move, requestedMove)))
        return getNewState(state, requestedMove);

    return { error: "The requested move is invalid" };
};



module.exports = {
    shuffleCards: shuffleCards,
    initialState: initialState,
    filterForProfile: filterForProfile,
    validateMove: validateMove
};
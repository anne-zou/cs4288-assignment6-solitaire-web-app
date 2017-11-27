/* Copyright G. Hemingway @2017 - All rights reserved */
"use strict";

let Joi = require('joi'),
    _ = require('underscore'),
    Solitare = require('../../solitare'),
    mongoose = require('mongoose');


module.exports = app => {

    // Create a new game
    app.post('/v1/game', (req, res) => {
        if (!req.session.user) {
            res.status(401).send({ error: 'unauthorized' });
        } else {
            // Schema for user info validation
            let schema = Joi.object().keys({
                game: Joi.string().lowercase().required(),
                color: Joi.string().lowercase().required(),
                draw: Joi.any()
            });
            // Validate user input
            Joi.validate(req.body, schema, { stripUnknown: true }, (err, data) => {
                if (err) {
                    const message = err.details[0].message;
                    console.log(`Game.create validation failure: ${message}`);
                    res.status(400).send({ error: message });
                } else {
                    // Set up the new game
                    let newGame = {
                        owner: req.session.user._id,
                        active: true,
                        cards_remaining: 52,
                        color: data.color,
                        game: data.game,
                        score: 0,
                        start: Date.now(),
                        winner: "",
                        moves: [],
                        state: []
                    };
                    switch (data.draw) {
                        case 'Draw 1':
                            newGame.drawCount = 1;
                            break;
                        case 'Draw 3':
                            newGame.drawCount = 3;
                            break;
                    }
                    // Generate a new initial game state
                    newGame.state.push(Solitare.initialState());
                    let game = new app.models.Game(newGame);
                    game.save(err => {
                        if (err) {
                            console.log(`Game.create save failure: ${err}`);
                            res.status(400).send({ error: 'failure creating game' });
                            // TODO: Much more error management needs to happen here
                        } else {
                            const query = { $push: { games: game._id } };
                            // Save game to user's document too
                            app.models.User.findOneAndUpdate({ _id: req.session.user._id }, query, () => {
                                res.status(201).send({
                                    id: game._id
                                });
                            });
                        }
                    });
                }
            });
        }
    });

    // Fetch game information
    app.get('/v1/game/:id', (req, res) => {
        if (!req.session.user) {
            res.status(401).send({ error: 'unauthorized' });
        } else {
            app.models.Game.findById(req.params.id)
                .then(
                    game => {
                        if (!game) {
                            res.status(404).send({ error: `unknown game: ${req.params.id}` });
                        } else {
                            const state = game.state[game.state.length - 1].toJSON();
                            let results = _.pick(game.toJSON(), 'start', 'moves', 'winner', 'score', 'drawCount', 'color', 'active');
                            results.start = Date.parse(results.start);
                            results.cards_remaining = 52 - (state.stack1.length + state.stack2.length + state.stack3.length + state.stack4.length);
                            res.status(200).send(_.extend(results, state));
                        }
                    }, err => {
                        console.log(`Game.get failure: ${err}`);
                        res.status(404).send({ error: `unknown game: ${req.params.id}` });
                    }
                );
        }
    });

    // Update game state with move
    app.put('/v1/game/:id', (req, res) => {
        if (!req.session.user) { // verify user is logged in
            console.log('Must be logged in to update game');
            res.status(401).send({ error: 'unauthorized' });
            return;
        }
        app.models.User.findOne({ username: req.session.user.username })
            .then(
                user => {
                    if (!user) { // verify user has been identified
                        console.log(`User not found: ${req.session.user.username}`);
                        res.status(500).send({ error: 'could not find user' });
                        return;
                    }

                    if (!user.games.some(game => game.equals(req.params.id))) { // verify the user owns the game
                        console.log(`Current user does not own the game being updated`);
                        res.status(401).send({ error: `unauthorized` });
                        return;
                    }
                    // Fetch the game
                    app.models.Game.findById(req.params.id)
                        .then(
                            game => {
                                // See if move is valid
                                const newState = Solitare.validateMove(game.state[game.state.length - 1], game.drawCount, req.body.move);
                                if (newState.error) { // if move is invalid
                                    console.log('Invalid move');
                                    res.status(401).send({ error: newState.error });
                                    return;
                                }
                                // Update the game in mongo with the new state and move
                                const update = { $push: { state: newState, moves: req.body.move } };
                                app.models.Game.findOneAndUpdate({ _id: req.params.id }, update, { new: true })
                                    .then(
                                        game => {
                                            // Send client the new state
                                            res.status(200).send(newState);
                                        }, err => {
                                            console.log(`Game not found: ${req.params.id}`);
                                            res.status(500).send({ error: 'could not find game' });
                                        }
                                    );

                            }, err => {
                                console.log(`Game not found: ${req.params.id}`);
                                res.status(500).send({ error: 'could not find game' });
                            }
                        );

                }, err => {
                    console.log(`User not found: ${req.session.user.username}`);
                    res.status(500).send({ error: 'could not find user' });
                }
            );

    });


    // Provide end-point to request shuffled deck of cards and initial state - for testing
    app.get('/v1/cards/shuffle', (req, res) => {
        res.send(Solitare.shuffleCards(false));
    });
    app.get('/v1/cards/initial', (req, res) => {
        res.send(Solitare.initialState());
    });

};
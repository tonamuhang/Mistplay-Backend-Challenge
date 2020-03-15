const router = require('express').Router();
let Games = require('../models/Games.model');


/**
 * @Get
 * The /get endpoint
 */
router.route('/').get((req, res) => {
    Games.find()
        .then(games => res.json(games))
        .catch(err => res.status(400).json('Error: ' + err));
});


/**
 * @Search
 * The /search endpoint
 */
router.route('/search').get((req, res) => {


});

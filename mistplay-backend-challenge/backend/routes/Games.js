const router = require('express').Router();
let Games = require('../models/Games.model');


/**
 * @Get
 * The /get endpoint
 */
router.route('/').get((req, res) => {
    Games.find()
        .limit(5)
        .then(games => res.json(games))
        .catch(err => res.status(400).json('Error: ' + err));
});


/**
 * @Search
 * The /search endpoint
 * Sorts the query result first by rating then by rating count.
 * The flaw of the solution is that a game that's rated 5 star which has only 1 rating can
 * rank higher than a game of 4.9 star with 9999 ratings. This is not okay because we would
 * like to have rank a game that's considered excellent by many people higher.
 * TODO: 1. Change the sort algorithm. Maybe we can do rating*rCount.
 * TODO: 2. Find relevant games by the given query
 */
router.route('/search').post((req, res) => {

    const titleQuery = req.query.title;


    Games.find({
        'title': {$regex: titleQuery, $options: 'i'}
        },
        {'_id':0, 'title':1, 'rating':1, 'rCount':1})
        .limit(5)
        .sort({
            'rating': -1,
            'rCount': -1
        })
        .then(games => res.json(games))
        .catch(err => res.status(400).json('Error: ' + err));

});


module.exports = router;

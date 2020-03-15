const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    genre:{
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    imgURL:{
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    subgenre:{
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    title:{
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    pid:{
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    rating:{
        type: Number,
        required: true,
        unique: false,
        trim: true
    },
    rCount:{
        type: Number,
        required: true,
        unique: false,
        trim: true
    }
});

const Games = mongoose.model('Games', gameSchema);

module.exports = Games;

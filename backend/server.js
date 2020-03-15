const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Create an express server
const app = express();
const port = process.env.PORT || 5000;


// Cors middleware to pass JSON
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


// Set up the endpoint
const gameRouter = require('./routes/Games');

app.use('/Games', gameRouter);


// Starts server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

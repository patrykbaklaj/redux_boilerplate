const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());
// app.use(express.json());

// If in production
// const db = process.env.MONGO_URI;
const db = config.get('mongoURI');

// connect to mongoDB
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true }, err => {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

// USE ROUTES
app.use('/api/items', require('./routes/api/items'));

// Select port 5000, and if in production environment variables
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port} ...`));

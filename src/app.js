require('dotenv').config();
require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const itemsRouter = require('./routes/items.router');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/items', itemsRouter);

app.use((err, req, res, next) => {
    if (err) {
        return res.status(500).json({ message: err.message });
    }
    next();
});

module.exports = app;

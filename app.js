'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');

const apiRoute = require('./routes/api');

var app = express();

////////////////
// MIDDLEWARE //
////////////////
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// DEMO MIDDLEWARE
app.use((req, res, next) => {
	console.log(`${(new Date().toISOString())} | ${req.ip} Hit ${req.url}`);
	next();
})

app.get('/', (req, res, next) => {
	res.sendStatus(204);
});

app.use('/api', apiRoute);

////////////////////
// ERROR HANDLING //
////////////////////

// RESPONSE
app.use(function(err, req, res, next) {
	res.sendStatus(err.statusCode || 500);
});

module.exports = app;

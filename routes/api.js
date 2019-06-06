'use strict';

// LOAD LIBS
const router = require('express').Router();

// LOAD SCRIPTS
const placeholder = require('./api/placeholder');

// ROUTES
router.use('/placeholder', placeholder);

module.exports = router;

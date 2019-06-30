'use strict';

// LOAD LIBS
const path = require('path');
const router = require('express').Router();

// LOAD SCRIPTS
const {placeholder} = require(path.join(app_root, 'controllers'));

// ROUTES
router.use('/placeholder', placeholder);

module.exports = router;

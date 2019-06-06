'use strict';

// LOAD LIBS
const router = require('express').Router();

router.get('/', (req, res, next) => {
	res.status(200).json({message: 'Yeargh!'})
})

module.exports = router

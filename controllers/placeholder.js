'use strict';

// LOAD LIBS
const path = require('path');
const router = require('express').Router();
const {placeholder} = require(path.join(app_root, 'services'));

router.get('/', (req, res, next) => {
	res.status(200).json({status: 'Woot woot!'});
});

router.post('/', (req, res, next) => {
	try {
		var {allGood} = req.body;
		var response = placeholder(allGood);

		res.status(200).json({message: response})
	} catch (error) {
		res.status(400).json({message: error.message})
	}
})

module.exports = router

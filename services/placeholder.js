'use strict';

function placeholderFunc(arg) {
	// All the functional logic not related to server communication goes here
	if (!arg) {throw new Error('Agh!')}

	return `It's good!`;
}

module.exports = placeholderFunc;

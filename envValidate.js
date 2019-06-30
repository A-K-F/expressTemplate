'use strict';

const assert = require('assert');

console.log('Checking ENV Vars');

assert(['development', 'production'].includes(process.env.NODE_ENV), `NODE_ENV must be set to 'development' or 'production'`)

console.log('ENV Vars pass basic validation');

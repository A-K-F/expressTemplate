'use strict';

// GET ENVS LOADED IN DEV
require('dotenv').config();

// TEST ENVS
require('./envValidate');

// REQUIRE LIBS
const http = require('http');

// REQUIRE SCRIPTS
const app = require('./app');

// LOAD ENV VARS
const port = parseInt(process.env.PORT) || 3000;

// CONFIG SERVER
app.set('port', port);

var server = http.createServer(app);

// STAND UP SERVER
server.on('error', onError);
server.on('listening', onListening);
server.listen(port);


// DEFINE LISTENERS
function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	var bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port;

	const listenErrHandlers = {
		'EACCES': (error) => {
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
		},
		'EADDRINUSE': (error) => {
			console.error(bind + ' is already in use');
			process.exit(1);
		},
		default:  (error) => {
			throw error;
		}
	};

	// HANDLE SPECIFIC LISTEN ERRORS WITH FRIENDLY MESSAGES
	(listenErrHandlers[error.code] || listenErrHandlers['default'])()
}

function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port;
	console.log('--------------------------------------------------------------------------------');
	console.log(`${new Date().toISOString()} | Server running, listening on ${bind}`);
	console.log('--------------------------------------------------------------------------------');
}

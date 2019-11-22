const Logger = require('./logger'); // import Logger from './logger.js'

const logger = new Logger(); // instantiates a new Logger

logger.on('message', data => console.log('Called Listener', data));

// Triggers events
logger.log('Hello World');
logger.log('My name is Peter');
logger.log('I am learning Node.js');

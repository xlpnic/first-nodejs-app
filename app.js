
const Logger = require('./logger');
const logger = new Logger();

// Register a listener (before the event is raised).
// 'logging' is the name of the event we want to listen for
// The second param is a callback function that should be called when that event is raised.
logger.on('logging', (arg) => {
    console.log('Logger about to start logging.', arg.logMessage);
});

logger.on('messageLogged', (arg) => {
    console.log('Logger finished logging.', arg.logMessage);
});

logger.log('hello!');

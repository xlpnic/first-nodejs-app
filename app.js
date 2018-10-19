
const Logger = require('./logger');
const logger = new Logger();

// Register a listener (before the event is raised).
logger.on('logging', (arg) => {
    console.log('Listener called.', arg);
});

logger.log('hello!');


const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {

        // Raise an event
        this.emit('logging', { message: 'hello!' })
    
        // Send an HTTP request
        console.log(message);
    }
}

module.exports = Logger;

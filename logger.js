const EventEmitter = require('events');
const uuid = require('uuid');

// uuid.v4() // generates a random id

class Logger extends EventEmitter {
  log(messsage) {
    // Call Event
    this.emit('message', { id: uuid.v4(), msg });
  }
}

module.exports = Logger;

const EventEmitter = require('events');

// Create Class
class MyEmitter extends EventEmitter {

}

// Initialize Object
const emitter = new MyEmitter();

// Event Listener
emitter.on('event', () => console.log('Event fired!'));

// Initialize Event
emitter.emit('event');
emitter.emit('event');
emitter.emit('event');

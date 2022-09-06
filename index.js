// run `node index.js` in the terminal
const fs = require('events');

// Appel du gestionnaire d’événements
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function () {});

emitter.emit('messageLogged');

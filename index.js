// run `node index.js` in the terminal

// Appel du gestionnaire d’événements
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

logger.log('message');

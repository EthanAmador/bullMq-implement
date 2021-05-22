const {
  constants: { QUEUE_NAMES }
} = require('../utils');

const startWorkers = () => {
  require('./sayHello')(QUEUE_NAMES.SAY_HELLO);
};

module.exports = {
  startWorkers
};

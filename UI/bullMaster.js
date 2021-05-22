const bullMaster = require('bull-master');
const { getQueue } = require('../queue');
const {
  constants: { QUEUE_NAMES }
} = require('../utils');

const startUI = app => {
  let queues = [];
  for (const key in QUEUE_NAMES) {
    const queueName = QUEUE_NAMES[key];
    const queue = getQueue(queueName);
    queues.push(queue);
  }
  const bullMasterApp = bullMaster({
    queues
  });
  app.use('/bull-master', bullMasterApp);
};

module.exports = startUI;

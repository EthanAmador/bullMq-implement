const { createBullBoard } = require('bull-board');
const { BullMQAdapter } = require('bull-board/bullMQAdapter');
const { getQueue } = require('../queue');
const {
  constants: { QUEUE_NAMES }
} = require('../utils');

const startUI = app => {
  let queues = [];
  for (const key in QUEUE_NAMES) {
    const queueName = QUEUE_NAMES[key];
    const queue = getQueue(queueName);
    const bullAdapter = new BullMQAdapter(queue);
    queues.push(bullAdapter);
  }
  const { router } = createBullBoard(queues);
  app.use('/bull-board', router);
};

module.exports = startUI;

const bullArena = require('bull-arena');
const { Queue } = require('bullmq');
const {
  constants: { QUEUE_NAMES },
  config: { REDIS_CONFIG: redisConf }
} = require('../utils');

const startUI = app => {
  let queues = [];
  for (const key in QUEUE_NAMES) {
    const queueName = QUEUE_NAMES[key];
    queues.push({
      type: 'bullmq',
      name: queueName,
      hostId: 'bullMQ',
      redis: redisConf
    });
  }
  const arenaConfig = bullArena(
    { BullMQ: Queue, queues },
    { basePath: '/bull-arena', disableListen: true }
  );
  app.use('/', arenaConfig);
};

module.exports = startUI;

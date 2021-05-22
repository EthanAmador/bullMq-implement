require('dotenv').config();
const { Queue } = require('bullmq');
const { REDIS_HOST, REDIS_PORT, REDIS_AUTH, REDIS_PASSWORD, REDIS_DB_INDEX } =
  process.env;

const queues = {};

const getQueue = queueName => {
  if (!queues[queueName]) {
    queues[queueName] = new Queue(queueName, {
      host: REDIS_HOST,
      port: REDIS_PORT,
      username: REDIS_AUTH || null,
      password: REDIS_PASSWORD || null,
      db: REDIS_DB_INDEX || 0
    });
  }
  return queues[queueName];
};

const addToQueue = async (queueName, data) => {
  const queue = getQueue(queueName);
  await queue.add(queueName, data);
};

module.exports = {
  getQueue,
  addToQueue
};

const { Worker } = require('bullmq');
const {
  config: { REDIS_CONFIG: connection }
} = require('../utils');

const workers = {};
const initializeWorker = ({ workerName, concurrency = 1, start }) => {
  if (!workers[workerName]) {
    workers[workerName] = new Worker(
      workerName,
      async job => {
        await start(job);
      },
      {
        connection,
        concurrency
      }
    );
  }
  return workers[workerName];
};

module.exports = {
  initializeWorker
};

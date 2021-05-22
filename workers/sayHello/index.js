const { initializeWorker } = require('../helper');
const { start } = require('./worker');
const sayHello = workerName => {
  const worker = initializeWorker({ workerName, concurrency: 1, start });

  worker.on('completed', job =>
    console.info(`Completed job ${job.id} successfully, data: ${job.data}`)
  );
  worker.on('failed', (job, err) =>
    console.info(`Failed job ${job.id} with ${err}`)
  );
};

module.exports = sayHello;

require('dotenv').config();

const { addToQueue } = require('./queue');
const { startWorkers } = require('./workers');
const {
  constants: { QUEUE_NAMES },
  utils: { delay }
} = require('./utils');
const bullUI = require('./UI');
const {
  ENABLE_BULL_ARENA,
  ENABLE_BULL_BOARD,
  ENABLE_BULL_MASTER,
  UI_PORT: port = 4000
} = process.env;

const enableBullArena = ENABLE_BULL_ARENA && JSON.parse(ENABLE_BULL_ARENA);
const enableBullBoard = ENABLE_BULL_BOARD && JSON.parse(ENABLE_BULL_BOARD);
const enableBullMaster = ENABLE_BULL_MASTER && JSON.parse(ENABLE_BULL_MASTER);

const startUI = () => {
  const express = require('express');
  const app = express();
  if (enableBullArena) bullUI.bullArena(app);
  if (enableBullBoard) bullUI.bullBoard(app);
  if (enableBullMaster) bullUI.bullMaster(app);

  app.listen(port, () => {
    console.log(`UI Running on port ${port}`);
  });
};

(async () => {
  if (enableBullArena || enableBullBoard) startUI();
  startWorkers();
  addToQueue(QUEUE_NAMES.SAY_HELLO, { name: 'Ethan' });
  await delay(3000);
  addToQueue(QUEUE_NAMES.SAY_HELLO, { name: 'Ethan2' });
})();

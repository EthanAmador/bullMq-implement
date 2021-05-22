# IMPLEMENT [BULLMQ](https://github.com/taskforcesh/bullmq#readme)

## **Description**

In this project we have made a simple implementation of job manager. Which could become the new version of [Bull](https://github.com/OptimalBits/bull)

---

## **UI implement**

[bull-arena]: img/bull-arena.png 'Bull Arena'
[bull-board]: img/bull-board.png 'Bull Board'
[bull-master]: img/bull-master.png 'Bull Master'

[Bull Arena](https://github.com/bee-queue/arena)
![alt text][bull-arena]

[Bull Board](https://github.com/felixmosh/bull-board)
![alt text][bull-board]

[Bull Master](https://github.com/hans-lizihan/bull-master)
![alt text][bull-master]

---

## scaffolding

```sh
.
├── README.md
├── UI
│   ├── bullArena.js
│   ├── bullBoard.js
│   ├── bullMaster.js
│   └── index.js
├── img
│   ├── bull-arena.png
│   ├── bull-board.png
│   └── bull-master.png
├── index.js
├── package.json
├── queue
│   └── index.js
├── utils
│   ├── config.js
│   ├── constants.js
│   ├── index.js
│   └── utils.js
└── workers
    ├── helper.js
    ├── index.js
    └── sayHello
        ├── index.js
        └── worker.js
```

**env.example**

```javascript
# Redis config
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_AUTH=
REDIS_PASSWORD=
REDIS_DB_INDEX

UI_PORT=4000
ENABLE_BULL_ARENA=true
ENABLE_BULL_BOARD=true
ENABLE_BULL_MASTER=true
```

`ENABLE_BULL_ARENA` => Allow to show Bull Arena UI.

`ENABLE_BULL_BOARD` => Allow to show Bull Board UI.

`ENABLE_BULL_MASTER` => Allow to show Bull Master UI.

const { REDIS_HOST, REDIS_PORT, REDIS_AUTH, REDIS_PASSWORD, REDIS_DB_INDEX } =
  process.env;

const REDIS_CONFIG = {
  host: REDIS_HOST,
  port: REDIS_PORT,
  username: REDIS_AUTH || null,
  password: REDIS_PASSWORD || null,
  db: REDIS_DB_INDEX || 0
};

module.exports = {
  REDIS_CONFIG
};

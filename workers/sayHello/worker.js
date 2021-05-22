const start = async job => {
  const {
    data: { name }
  } = job;
  console.log(`Hello ${name}`);
};

module.exports = {
  start
};

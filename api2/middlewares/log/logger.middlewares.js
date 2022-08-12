const logger = (message) => (req, res, next) => {
  console.log(message);
  next(); // chạy tiếp tực tới các middleware khác
};

module.exports = {
  logger,
};

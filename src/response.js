/* eslint-disable no-unused-vars */
const response = (status, data, message, res) => {
  res.status(status).json({
    payload: {
      status,
      message,
      data,
    },
    pagination: {
      prev: '',
      next: '',
      max: '',
    },
  });
};

module.exports = response;

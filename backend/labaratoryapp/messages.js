const successResponse = (message, data) => {
  return {
    error: false,
    message: message || "ok",
    data: data || null,
  };
};
const errorResponse = (message, data) => {
  return {
    error: true,
    message: message || "something went worng",
    data: data || null,
  };
};

module.exports = { successResponse, errorResponse };

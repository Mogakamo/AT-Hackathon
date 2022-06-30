const httpStatus = require("http-status");
const expressValidate = require("express-validation");
const APIError = require("../helpers/APIError");
const { env } = require("../config/vars");

// Error handler
const handler = (err, req, res, next) => {
  const response = {
    code: err.status,
    message: err.message || httpStatus[err.status],
    errors: err.errors,
  };

  if (env !== "test") {
    delete response.stack;
  }

  res.status(err.status), res.json(response);
  res.end();
};

exports.handler = handler;

/**
 * If error is not of instanceOf APIError, convert it.
 * @public
 */

exports.converter = (err, req, res, next) => {
  let converterError = err;

  if (err instanceof expressValidate.ValidationError) {
    converterError = new APIError({
      message: "Erro de Validação",
      status: err.status,
      stack: err.stack,
      errors: err.errors,
    });
  } else if (!(err instanceof APIError)) {
    converterError = new APIError({
      message: err.message,
      status: err.status,
      stack: err.stack,
    });
  }

  return handler(converterError, req, res);
};

/**
 * Catch 404 and forward to error handler
 * @public
 */
exports.notFound = (req, res, next) => {
  const err = new APIError({
    message: "Not found",
    status: httpStatus.NOT_FOUND,
  });
  return next(err);
};

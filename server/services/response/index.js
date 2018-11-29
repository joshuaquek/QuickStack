// ------- Logging Tools -------
const SIGNALE = require('signale') // Used for more readable CLI Logging

// ---- Exported Methods ----

exports.success = (res, data) => {
  return sendResponse(res, 200, 'success', data)
}

exports.failure = (res, error) => {
  SIGNALE.error(error)
  if (error.name === 'ValidationError') return sendResponse(res, 602, 'INVALID_INPUT', error.message)
  if (error.name === 'SyntaxError') return sendResponse(res, 601, 'MALFORMED_PAYLOAD', error.message)
  if (error.name === 'UserNotFoundAuthError') return sendResponse(res, 401, 'UNAUTHORIZED', error.message)
  if (error.name === 'PasswordIncorrectAuthError') return sendResponse(res, 401, 'UNAUTHORIZED', error.message)
  if (error.name === 'AccessTokenError') return sendResponse(res, 401, 'UNAUTHORIZED', error.message)
  if (error.name === 'NotFoundError') return sendResponse(res, 404, 'NOT_FOUND', error.message)
  if (error.name === 'UnderConstructionError') return sendResponse(res, 501, 'NOT_IMPLEMENTED', error.message)
  if (error.name === 'PostgresInitialConnectionError') return sendResponse(res, 1001, 'POSTGRES_CONNECTION_FAILED', error.message)
  if (error.name === 'PostgresQueryTimeoutError') return sendResponse(res, 1002, 'POSTGRES_TIMEOUT', error.message)
  if (error.name === 'EmptyPostgresResultsetError') return sendResponse(res, 1003, 'POSTGRES_EMPTY_CONTENT', error.message)
  if (error.name === 'PostgresQueryError') return sendResponse(res, 1004, 'POSTGRES_QUERY_ERROR', error.message)
  return sendResponse(res, 500, 'INTERNAL_SERVER_ERROR', error.message) // Last kind of error to be caught will be this, which is why its at the end.
}

// ---- Supporting Methods ----

let sendResponse = (res, code, description, data) => {
  res.removeHeader('X-Powered-By')
  res.status(200).send({
    'status': {
      'code': code,
      'description': description
    },
    'data': data
  })
}

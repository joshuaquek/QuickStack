// ------- UserNotFoundAuthError class -------
exports.UserNotFoundAuthError = class UserNotFoundAuthError extends Error {
  constructor (message) {
    super()
    this.name = this.constructor.name
    this.message = 'User does not exist.'
  }
}

// ------- PasswordIncorrectAuthError class -------
exports.PasswordIncorrectAuthError = class PasswordIncorrectAuthError extends Error {
  constructor (message) {
    super()
    this.name = this.constructor.name
    this.message = 'User exists but password is incorrect.'
  }
}

// ------- AccessTokenError Error class -------
exports.AccessTokenError = class AccessTokenError extends Error {
  constructor (message) {
    super()
    this.name = this.constructor.name
    this.message = 'Access token is not found or invalid.'
  }
}

// ------- AccessTokenError Error class -------
exports.NotFoundError = class NotFoundError extends Error {
  constructor (message) {
    super()
    this.name = this.constructor.name
    this.message = 'API endpoint with specified HTTP method does not exist.'
  }
}

// ------- AccessTokenError Error class -------
exports.UnderConstructionError = class UnderConstructionError extends Error {
  constructor (message) {
    super()
    this.name = this.constructor.name
    this.message = 'API endpoint exists but is still under construction.'
  }
}

// ------- AccessTokenError Error class -------
exports.PostgresInitialConnectionError = class PostgresInitialConnectionError extends Error {
  constructor (message) {
    super()
    this.name = this.constructor.name
    this.message = 'Initial Postgres connection has failed to be established.'
  }
}

// ------- AccessTokenError Error class -------
exports.PostgresQueryError = class PostgresQueryError extends Error {
  constructor (message) {
    super()
    this.name = this.constructor.name
    this.message = 'Internal Postgres query is malformed.'
  }
}

// ------- AccessTokenError Error class -------
exports.PostgresQueryTimeoutError = class PostgresQueryTimeoutError extends Error {
  constructor (message) {
    super()
    this.name = this.constructor.name
    this.message = 'Postgres query has timed out.'
  }
}

// ------- AccessTokenError Error class -------
exports.EmptyPostgresResultsetError = class EmptyPostgresResultsetError extends Error {
  constructor (message) {
    super()
    this.name = this.constructor.name
    this.message = 'Postgres resultset is empty.'
  }
}

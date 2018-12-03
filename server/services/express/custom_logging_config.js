const SIGNALE = require('signale') // Used for more readable CLI Logging
const chalk = require('chalk') // Used for more readable CLI Logging

exports.customLoggingFormat = function (tokens, req, res) {
  let logString = [
    `Status: ${tokens.status(req, res)},`,
    tokens.method(req, res),
    `${tokens.url(req, res)},`,
    `at ${chalk.yellow(tokens.date(req, res))}`,
    `from remote address ${chalk.white(tokens['remote-addr'](req, res))}`,
    `${tokens.url(req, res).includes('/_next/') || tokens.url(req, res).includes('/static/') ? chalk.magenta('(Native NextJs Call)') : chalk.cyan('(Custom API Call)')}`
  ].join(' ')
  return SIGNALE.info(logString)
}

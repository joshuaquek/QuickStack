const session = require('express-session')
const LokiStore = require('connect-loki')(session) // Must use this for prod as default session store leaks memory.
const genuuid = require('uuid/v1')

exports.expressSession = session({ // Session Store to store JWT tokens
  store: new LokiStore({}), // Uses LokiJS as the local session store
  genid: (req) => genuuid(), // Generates the random identifier used in the session store
  secret: process.env.SESSION_SECRET || 'S3cr3tC@t', // The secret is used to hash the session with HMAC. The session is then protected against session hijacking by checking the fingerprint against the hash with the secret.
  resave: false, // If true, persistently resaves JWT token to session store even when there is no change
  saveUninitialized: true, // If true, saves JWT token to session store
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000, // Token will be stored for 30 days max
    secure: true
  }
})

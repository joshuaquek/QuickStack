
# ⚡️QuickStack

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/joshuaquek/QuickStack/graphs/commit-activity)
[![Build Status](https://travis-ci.org/joshuaquek/QuickStack.svg?branch=master)](https://travis-ci.org/joshuaquek/QuickStack)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/joshuaquek/QuickStack.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/joshuaquek/QuickStack/badge.svg)](https://snyk.io/test/github/joshuaquek/QuickStack)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) 

This was a side project of mine in 2018, and no major changes were made since then.

Original Repo: https://github.com/joshuaquek/QuickStack

## Setup

Install NPM modules:
```bash
npm install
```

The backend user management and authentication relies on PostgresDB. You can install it here:
https://www.postgresql.org/

If you intend to only run the frontend microservice (NextJS), then PostgresDB is not required.

Next, create a `.env` file inside your directory. You can use the following sample that will work on localhost:

```bash
# ARCHITECTURE= <-- This is defined in your start script and would not need to be in your .env file. Defines the architecture of the app, whether to start it as a monolith, microservices, only as a nextjs app, or only as an api server. Options for this would be "monolith", "microservices", "nextjs-only", "api-server-only"

# NODE_ENV= <-- This is defined in your start script and would not need to be in your .env file. This determines whether NextJs is run in dev or in production. It will run the HMR (Hot Module Reloading server) when set to 'development'. When set to 'production', it will not run the HMR for better performance.

# Sets the port number for the Monolith version of the app to run on, if the ARCHITECTURE variable is set to "monolith"
MONOLITH_APP_PORT=8080

# Sets the port number for the NextJs Frontend app to run on, if you the ARCHITECTURE variable is set to "nextjs-microservice"
FRONTEND_NEXTJS_APP_PORT=7501

# Sets the port number for the API Server Backend app to run on, if the ARCHITECTURE variable is set to "api-server-microservice"
BACKEND_API_SERVER_APP_PORT=9001

# Backend and Frontend Base URLs
NEXT_JS_BASE_URL=/
BACKEND_API_SERVER_BASE_URL=/api

# When set to 'on', API endpoints that require a JWT token would only work when a valid JWT token is provide. When not set to 'on', no JWT token is required for all API endpoints.
API_PROTECTION=on

# Sets the secrets used for seeding and storing JWT tokens.
JWT_SECRET=myJWTsecret123
SESSION_SECRET=mySessionSecret123

# PostgredDB Connection Details.
POSTGRES_DATABASE_USERNAME=myCustomUsername
POSTGRES_DATABASE_PASSWORD=myCustomPassword
POSTGRES_DATABASE_URL=localhost
POSTGRES_DATABASE_PORT=5432
POSTGRES_DATABASE_DBNAME=myquickstackdb
POSTGRES_DATABASE_SCHEMA=quickstack-dev
```

Lastly, since you have postgres locally, you will need to create a db instance within your local postgres called `myquickstackdb`, since you have defined it above in the `.env` to be that.

## Running

Please refer to `package.json` for the various startup scripts to run, based on your desired architecture.

If you want to simply run it locally you can use:
```bash
npm run dev
```

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Currently, we are using StandardJS for maintaining the coding style.

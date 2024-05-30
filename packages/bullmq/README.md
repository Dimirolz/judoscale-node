# Judoscale for BullMQ

Official [Judoscale](https://judoscale.com) adapter package for autoscaling BullMQ job queues.

## Set up your app for autoscaling

1. Install the judoscale-bullmq package:

```sh
npm install judoscale-bullmq --save
```

2. In your worker script, import and start the Judoscale reporter:

```javascript
// ESM
import { Judoscale } from 'judoscale-bullmq'

// CommonJS
const { Judoscale } = require('judoscale-bullmq')

// Initialize Judoscale with default configuration
const judoscale = new Judoscale()
```

3. If you want to scale your workers all the way down, you also need to install judoscale-bullmq in your web process:

```javascript
// ESM
import { Judoscale, middleware as judoscaleMiddleware } from 'judoscale-express'
import 'judoscale-bullmq'

// CommonJS
const { Judoscale, middleware: judoscaleMiddleware } = require('judoscale-express')
require('judoscale-bullmq')

// Judoscale will automatically be initialized for both BullMQ and Express/Fastify
const judoscale = new Judoscale()
```

## Troubleshooting

Once installed, you should see something like this in your development log:

> [Judoscale] Reporter not started: JUDOSCALE_URL is not set

In your production app where you've installed Judoscale, you should see this in your logs:

> [Judoscale] Reporter starting, will report every 10 seconds

If you don't see either of these, ensure "judoscale-bullmq" is in your `Package.lock` file, and restart your app.

You can see more detailed (debug) logging by setting the environment variable `JUDOSCALE_LOG_LEVEL=debug` on your deployed application. Here's how you would do that on Heroku:

```
heroku config:set JUDOSCALE_LOG_LEVEL=debug
```

Reach out to help@judoscale.com if you run into any other problems.
# judoscale-node

Official NodeJS adapter for JudoScale—the Heroku autoscaler that will bring you joy.

This module provides a middleware that logs the request queue time for each request. These metrics can then be consumed by the JudoScale log drain.

## Installation

```sh
npm install judoscale-node
```

## Usage

```javascript
import judoscale from 'judoscale-node'

// express.js
app.use(judoscale())

// custom logging function
app.use(judoscale({ log: logger.info }))
```
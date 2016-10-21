const express = require('express');
const app = express();
const logger = require('morgan');

// app.use(logger, 'dev');

app.get('/', (req, res) => {
  res.status(200).send('server')
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

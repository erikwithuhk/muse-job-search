const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const router = require('./config/router.js');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', router);

module.exports = app;

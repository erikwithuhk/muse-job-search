const express = require('express');
const JobsController = require('../controllers/JobsController');

const router = express.Router();

router.get('/jobs', JobsController.index);

module.exports = router;

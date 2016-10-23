const express = require('express');
const JobsController = require('../controllers/JobsController');

const router = express.Router();

router.get('/jobs', JobsController.index);
router.get('/jobs/:id', JobsController.show);

module.exports = router;

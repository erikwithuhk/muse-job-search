const Job = require('../models/Job');

class JobsController {
  static index(req, res) {
    Job.all(req.query)
           .then(jobs => res.status(200).json(jobs))
           .catch(err => res.status(500).json(err));
  }
}

module.exports = JobsController;

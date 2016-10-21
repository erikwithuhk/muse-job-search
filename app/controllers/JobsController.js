const MuseAPI = require('../services/MuseAPI');

class JobsController {
  static index(req, res) {
    MuseAPI.all(req.query)
           .then(jobs => res.status(200).json(jobs))
           .catch(err => res.status(500).json(err));
  }
}

module.exports = JobsController;

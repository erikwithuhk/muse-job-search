const MuseAPI = require('../services/MuseAPI');

class JobsController {
  static index(req, res) {
    MuseAPI.all(req.query)
           .then(jobs => res.status(200).json(jobs))
           .catch(err => res.status(500).json(err));
  }
  static show(req, res) {
    const { id } = req.params;
    res.status(200).send(`Just this one little job. It's number is ${id}`);
  }
}

module.exports = JobsController;

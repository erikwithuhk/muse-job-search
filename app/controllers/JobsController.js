const JobDAO = require('../services/JobDAO');

class JobsController {
  static index(req, res) {
    res.status(200).send('ALL THA JOBS');
  }
  static show(req, res) {
    const { id } = req.params;
    res.status(200).send(`Just this one little job. It's number is ${id}`);
  }
}

module.exports = JobsController;

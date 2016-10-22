const MuseAPI = require('../services/MuseAPI');

class Job {
  static all(queries) {
    return MuseAPI.all(queries)
                  .then((response) => {
                    const jobs = response.results;
                    return jobs.map(jobData => new Job(jobData));
                  })
                  .catch(err => err);
  }
  static getLocations(locations) {
    return locations.map(location => location.name).join(', ');
  }
  constructor({ id, name, company, locations, publication_date }) {
    this.id = id;
    this.name = name;
    this.company = company.name;
    this.locations = Job.getLocations(locations);
    this.publicationDate = publication_date;
  }
}

module.exports = Job;

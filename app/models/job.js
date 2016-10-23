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
  constructor({ id, name, company, locations, publication_date, short_name }) {
    this.id = id;
    this.title = name;
    this.company = company.name;
    this.locations = Job.getLocations(locations);
    this.postedDate = Date.parse(publication_date);
    this.shortName = short_name;
  }
}

module.exports = Job;

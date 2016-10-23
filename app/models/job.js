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
  static find(id) {
    return MuseAPI.find(id)
                  .then(response => new Job(response))
                  .catch(err => err);
  }
  static getLocations(locations) {
    return locations.map(location => location.name).join(', ');
  }
  constructor({ id, name, company, contents, landing_page, locations, publication_date, short_name }) {
    this.id = id;
    this.title = name;
    this.company = company.name;
    this.description = contents;
    this.locations = Job.getLocations(locations);
    this.museLink = landing_page;
    this.postedDate = Date.parse(publication_date);
    this.shortName = short_name;
  }
}

module.exports = Job;

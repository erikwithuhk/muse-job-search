const MuseAPI = require('../services/MuseAPI');

class Job {
  static all(queries) {
    return MuseAPI.all(queries)
                  .then((response) => {
                    const jobs = response.results;
                    return jobs;
                  })
                  .catch(err => err);
  }
  // constructor({ id, name, company, locations, publication_date }) {
  //   this.id = id;
  //   this.name = name;
  //   this.company = company;
  //   this.locations = locations;
  //   this.publication_date = publication_date;
  // }
}

module.exports = Job;

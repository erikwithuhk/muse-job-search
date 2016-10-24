const MuseAPI = require('../services/MuseAPI');

class Job {
  static all(queries) {
    return MuseAPI.all(queries)
                  .then((response) => {
                    const jobs = response.results.map(jobData => new Job(jobData));
                    return { results: jobs, total: response.total };
                  })
                  .catch(err => err);
  }
  static find(id) {
    return MuseAPI.find(id)
                  .then(response => new Job(response))
                  .catch(err => err);
  }
  static getStringFromArray(array) {
    return array.map(item => item.name).join(', ');
  }
  constructor({
    id,
    name,
    categories,
    company,
    contents,
    landing_page,
    levels,
    locations,
    publication_date,
    short_name,
  }) {
    this.id = id;
    this.title = name;
    this.category = Job.getStringFromArray(categories);
    this.company = company.name;
    this.description = contents;
    this.levels = Job.getStringFromArray(levels);
    this.locations = Job.getStringFromArray(locations);
    this.museLink = landing_page;
    this.postedDate = Date.parse(publication_date);
    this.shortName = short_name;
  }
}

module.exports = Job;

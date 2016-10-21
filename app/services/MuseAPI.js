require('dotenv').config();
const request = require('superagent');

const apiKey = process.env.API_KEY;
const baseURL = `https://api-v2.themuse.com/jobs?api_key=${apiKey}`;

class MuseAPI {
  static createQueryString(queries) {
    const queryArray = Object.keys(queries).map(key => `&${key}=${queries[key]}`);
    return queryArray.join('');
  }
  static all(queries) {
    const queryString = MuseAPI.createQueryString(queries);
    return request.get(`${baseURL}${queryString}`)
                  .then(response => response.body.results)
                  .catch(err => err);
  }
}

module.exports = MuseAPI;

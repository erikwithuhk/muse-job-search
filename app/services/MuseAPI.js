require('dotenv').config();
const request = require('superagent');

const apiKey = process.env.API_KEY;
const baseURL = 'https://api-v2.themuse.com/jobs';

class MuseAPI {
  static createQueryString(queries) {
    const queryArray = Object.keys(queries).map(key => `&${key}=${queries[key]}`);
    return queryArray.join('');
  }
  static all(queries) {
    const queryString = MuseAPI.createQueryString(queries);
    return request.get(`${baseURL}?api_key=${apiKey}${queryString}`)
                  .then(response => response.body)
                  .catch(err => err);
  }
  static find(id) {
    return request.get(`${baseURL}/${id}?api_key=${apiKey}`)
    .then(response => response.body)
    .catch(err => err);
  }
}

module.exports = MuseAPI;

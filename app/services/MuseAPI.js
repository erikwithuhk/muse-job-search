require('dotenv').config();
const request = require('superagent');

const apiKey = process.env.API_KEY;
const baseURL = `https://api-v2.themuse.com/jobs?api_key=${apiKey}`;

class MuseAPI {
  static all({ page }) {
    return request.get(`${baseURL}&page=${page}`)
                  .then(response => response.body.results)
                  .catch(err => err);
  }
}

module.exports = MuseAPI;

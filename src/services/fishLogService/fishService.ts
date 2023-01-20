import axios from 'axios';
const config = require('../../../config');

const fishLogService = axios.create({
  baseURL: `https://eupescador-fishlog.herokuapp.com`,
  timeout: 120000
});

export { fishLogService };

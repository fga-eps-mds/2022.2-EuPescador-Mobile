import axios from 'axios';

const fishLogService = axios.create({
  baseURL: 'https://eupescador-fishlog.herokuapp.com',
  timeout: 120000,
});

export {fishLogService};

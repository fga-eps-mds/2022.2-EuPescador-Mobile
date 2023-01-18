import axios from 'axios';
const config = require('../../../config');

const wikiService = axios.create({
  baseURL: `https://eupescador-fishwiki2022-2.herokuapp.com/`,
});

export default wikiService;

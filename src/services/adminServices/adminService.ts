import axios from 'axios';
const config = require('../../../config');

const adminService = axios.create({
  baseURL: `https://eupescador-fishwiki2022-2.herokuapp.com/`,
});

export {adminService};

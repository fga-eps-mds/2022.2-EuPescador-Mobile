import axios from 'axios';
const config = require('../../../config');

const adminService = axios.create({
  baseURL: `https://eupescador-user.herokuapp.com/`,
});

export {adminService};

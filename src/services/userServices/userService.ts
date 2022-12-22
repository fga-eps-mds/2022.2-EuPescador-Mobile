import axios from 'axios';
const config = require('../../../config');

const userService = axios.create({
  baseURL: `https://eupescador-user.herokuapp.com`,
});

export {userService};

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://randomuser.me/api/',
  timeout: 60000,
});

export default instance;

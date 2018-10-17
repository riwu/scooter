import axios from 'axios';
import queryString from 'query-string';

axios.defaults.baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000/'
  : `${process.env.REACT_APP_API_URL}/`;

const [get] = ['get'].map(method => (path, data) => axios({
  method,
  url: path,
  data,
}).then(response => response.data));

export const getScooters = info => get(`scooters?${queryString.stringify(info)}`);

/**
 * @author Maria Fernanda Serna
 */
import Config from '../utils/config';
import axios from 'axios';

const uploadData = (events, period) => {
  return axios.post(`${Config.API}/uploadFile`, { data: events, type: true, period });
};

const generateReport = report => {
  return fetch(`${Config.API}/${report}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
};

export default {
  uploadData,
  generateReport
};

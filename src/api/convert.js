/**
 * @author Maria Fernanda Serna
 */
import Config from '../utils/config';


const uploadData = (events, period) => {
  return fetch(`${Config.API}` + '/uploadFile', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({ data: events, type: true, period }),
  });

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

import axios from 'axios';
import { baseUrl } from './env';

export default async (type = "GET", url = '', data = {}) => {
  let Url;
  type = type.toUpperCase();
  if (type === 'GET') {
    let params = '';
    Object.keys(data).forEach(item => {
      params = params + item + '=' + data[item] + '&';
    })
    if (params) {
      Url = baseUrl + url + '?' + params.substring(0, params.lastIndexOf('&'));
    } else {
      Url = baseUrl + url;
    }
    try {
      var res = await axios.get(Url);
    } catch (err) {
      throw new Error(err);
    }
  } else {
    Url = baseUrl + url;
    try {
      var res = await axios.post(Url, data);
    } catch (err) {
      throw new Error(err);
    }
  }
  return res.data;
}

import { Dimensions, Alert } from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import { camelizeKeys } from 'humps';

export const getDeviceWidth = () => Dimensions.get('window').width;

export const getDeviceHeight = () => Dimensions.get('window').height;

export const callPostApi = (url, params, authToken) => {
  return new Promise((resolve, reject) => {
    if (authToken) {
      axios.defaults.headers.common.Authorization = authToken;
    }

    axios
      .post(Config.API_URL.concat(url), params, {headers: {
        'Content-Type': 'application/json',
      }})
      .then(res => {
        try {
          resolve(camelizeKeys(res.data));
        } catch (error) {
          reject(error);
        }
      })
      .catch(error => reject(error));
  });
};

export const callGetApi = (url, params, authToken) => {
  return new Promise((resolve, reject) => {
    if (authToken) {
      axios.defaults.headers.common.Authorization = authToken;
    }

    axios
      .get(Config.API_URL.concat(url), { params })
      .then(res => {
        try {
          resolve(camelizeKeys(res.data));
        } catch (error) {
          reject(error);
        }
      })
      .catch(error => reject(error));
  });
};

export const callPutApi = (url, params, authToken) => {
  return new Promise((resolve, reject) => {
    if (authToken) {
      axios.defaults.headers.common.Authorization = authToken;
    }

    axios
      .put(Config.API_URL.concat(url), params)
      .then(res => {
        try {
          resolve(camelizeKeys(res.data));
        } catch (error) {
          reject(error);
        }
      })
      .catch(error => reject(error));
  });
};

export const callDeleteApi = (url, params, authToken) => {
  return new Promise((resolve, reject) => {
    if (authToken) {
      axios.defaults.headers.common.Authorization = authToken;
    }

    axios
      .delete(Config.API_URL.concat(url), params)
      .then(res => {
        try {
          resolve(camelizeKeys(res.data));
        } catch (error) {
          reject(error);
        }
      })
      .catch(error => reject(error));
  });
};

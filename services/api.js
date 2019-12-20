import axios from 'axios';

export const servicesAPIs = {
  seasonList: 'http://ergast.com/api/f1/seasons.json',
  raceList:   'http://ergast.com/api/f1/{0}.json',
  driverList: 'http://ergast.com/api/f1/{0}/drivers.json'
};

const api = axios.create();

export default api;
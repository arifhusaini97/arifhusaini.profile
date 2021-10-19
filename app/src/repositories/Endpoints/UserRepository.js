import Client from '../Clients/AxiosClient';
const resource = '/api/user';

export default {
  getUser(payload) {
    return Client.post(`${resource}`, payload);
  },
};

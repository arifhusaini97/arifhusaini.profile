import Client from '../Clients/AxiosClient';
const resource = '/api/candidate';

export default {
  getCandidatesRanked(payload) {
    return Client.get(`${resource}/ranked`, {
      params: {
        skipCount: payload.first,
        takeCount: payload.rows,
      },
    });
  },

  getCandidatesFavorite(payload) {
    return Client.get(`${resource}/favorite`, {
      params: {
        skipCount: payload.first,
        takeCount: payload.rows,
      },
    });
  },

  getCandidatesSheet(payload) {
    return Client.get(`${resource}/sheet`, {
      params: {
        skipCount: payload.first,
        takeCount: payload.rows,
      },
    });
  },
  getCategories(payload) {
    return Client.get(`${resource}/categories`, {
      params: {
        skipCount: payload.first,
        takeCount: payload.rows,
      },
    });
  },
  getSubCategories(payload) {
    return Client.get(`${resource}/subcategories`, {
      params: {
        skipCount: payload.first,
        takeCount: payload.rows,
      },
    });
  },
  getTopics(payload) {
    return Client.get(`${resource}/topics`, {
      params: {
        skipCount: payload.first,
        takeCount: payload.rows,
      },
    });
  },
};

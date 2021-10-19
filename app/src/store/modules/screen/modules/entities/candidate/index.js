import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true, // put true if want enable modules
  state: {
    candidates_ranked: [
      {
        id: 1,
        rank: 1,
        username: 'arifhusaini97',
        represent: {
          flag: '🏳',
          name: 'Klang',
        },

        is_favorite: false,

        description: `this is a description`,
        local: {
          total_round: 0,
          total_cumulative_win: 0,
          total_cumulative_lose: 0,
        },

        global: {
          total_round: 20,
          total_cumulative_win: 10,
          total_cumulative_lose: 10,
        },
      },
      {
        id: 2,
        rank: 2,
        username: 'ammaraziz',
        represent: {
          flag: '🏳',
          name: 'Shah Alam',
        },

        is_favorite: false,

        description: `this is a description`,
        local: {
          total_round: 0,
          total_cumulative_win: 0,
          total_cumulative_lose: 0,
        },

        global: {
          total_round: 20,
          total_cumulative_win: 8,
          total_cumulative_lose: 12,
        },
      },
    ],
    candidates_favorite: [],
    candidates_sheet: [
      {
        persons: [
          {
            id: 1,
            rank: 1,
            username: 'arifhusaini97',
            represent: {
              flag: '🏳',
              name: 'Klang',
            },

            description: `this is a description`,

            voted: 0,

            local: {
              total_round: 0,
              total_cumulative_win: 0,
              total_cumulative_lose: 0,
            },

            global: {
              total_round: 20,
              total_cumulative_win: 10,
              total_cumulative_lose: 10,
            },
          },
          {
            id: 2,
            rank: 2,
            username: 'ammaraziz',
            represent: {
              flag: '🏳',
              name: 'Shah Alam',
            },

            description: `this is a description`,

            voted: 0,

            local: {
              total_round: 0,
              total_cumulative_win: 0,
              total_cumulative_lose: 0,
            },

            global: {
              total_round: 20,
              total_cumulative_win: 8,
              total_cumulative_lose: 12,
            },
          },
        ],
      },
      {
        persons: [
          {
            id: 3,
            rank: 3,
            username: 'azzan_amin',
            represent: {
              flag: '🏳',
              name: 'Klang',
            },

            description: `this is a description`,

            voted: 0,

            local: {
              total_round: 0,
              total_cumulative_win: 0,
              total_cumulative_lose: 0,
            },

            global: {
              total_round: 18,
              total_cumulative_win: 6,
              total_cumulative_lose: 12,
            },
          },
          {
            id: 4,
            rank: 4,
            username: 'hilmi97',
            represent: {
              flag: '🏳',
              name: 'Kuala Terengganu',
            },

            description: `this is a description`,

            voted: 0,

            local: {
              total_round: 0,
              total_cumulative_win: 0,
              total_cumulative_lose: 0,
            },

            global: {
              total_round: 15,
              total_cumulative_win: 5,
              total_cumulative_lose: 10,
            },
          },
        ],
      },
    ],
    candidates_round_rank: [],
    categories: [
      {
        id: 1,
        name: 'Artists',
      },
      {
        id: 2,
        name: 'Politicians',
      },
      {
        id: 3,
        name: 'Businessman',
      },
      {
        id: 4,
        name: 'States',
      },
    ],
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};

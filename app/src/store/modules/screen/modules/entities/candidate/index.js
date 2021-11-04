import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true, // put true if want enable modules
  state: {
    round: 0,
    filters: {
      category: localStorage.getItem('filters')
        ? JSON.parse(localStorage.getItem('filters'))['category']
        : null,
      sub_category: localStorage.getItem('filters')
        ? JSON.parse(localStorage.getItem('filters'))['sub_category']
        : null,
      topic: localStorage.getItem('filters')
        ? JSON.parse(localStorage.getItem('filters'))['topic']
        : null,
    },

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
          total_point: 0,
        },

        global: {
          total_round: 20,
          total_cumulative_win: 10,
          total_cumulative_lose: 10,
          total_point: 0,
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
          total_point: 0,
        },

        global: {
          total_round: 20,
          total_cumulative_win: 8,
          total_cumulative_lose: 12,
          total_point: -4,
        },
      },
    ],
    candidates_favorite: [],
    candidates_sheet: [
      {
        id: 1,
        is_done: false,
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
              total_point: 0,
            },

            global: {
              total_round: 20,
              total_cumulative_win: 10,
              total_cumulative_lose: 10,
              total_point: 0,
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
              total_point: 0,
            },

            global: {
              total_round: 20,
              total_cumulative_win: 8,
              total_cumulative_lose: 12,
              total_point: -4,
            },
          },
        ],
      },
      {
        id: 2,
        is_done: false,
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
              total_point: 0,
            },

            global: {
              total_round: 18,
              total_cumulative_win: 6,
              total_cumulative_lose: 12,
              total_point: -6,
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
              total_point: 0,
            },

            global: {
              total_round: 15,
              total_cumulative_win: 5,
              total_cumulative_lose: 10,
              total_point: -5,
            },
          },
        ],
      },
      {
        id: 3,
        is_done: false,
        persons: [
          {
            id: 5,
            rank: 5,
            username: 'khairul',
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
              total_point: 0,
            },

            global: {
              total_round: 18,
              total_cumulative_win: 6,
              total_cumulative_lose: 12,
              total_point: -6,
            },
          },
          {
            id: 6,
            rank: 6,
            username: 'jamil',
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
              total_point: 0,
            },

            global: {
              total_round: 15,
              total_cumulative_win: 5,
              total_cumulative_lose: 10,
              total_point: -5,
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
    sub_categories: [
      {
        id: 1,
        name: 'Malaysia',
      },
      {
        id: 2,
        name: 'Korea',
      },
      {
        id: 3,
        name: 'India',
      },
      {
        id: 4,
        name: 'America',
      },
    ],
    topics: [
      {
        id: 1,
        name: 'Popularity (General)',
      },
      {
        id: 2,
        name: 'Popularity (Attitude)',
      },
    ],
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};

export default {
  SET_candidates_ranked: (state, data) => {
    state.candidates_ranked = data.result;
  },
  SET_candidates_favorite: (state, data) => {
    state.candidates_favorite = data.result;
  },
  SET_candidates_sheet: (state, data) => {
    state.candidates_sheet = data.result;
  },

  SET_categories: (state, data) => {
    state.categories = data.result;
  },

  SET_vote: (state, data) => {
    let array = state.candidates_round_rank;
    if (array.length === 0) {
      data.person_win.voted++;
      data.person_win.local.total_round++;
      data.person_win.local.total_cumulative_win++;

      data.person_win.global.total_round++;
      data.person_win.global.total_cumulative_win++;

      data.person_lose.local.total_round++;
      data.person_lose.local.total_cumulative_lose++;

      data.person_lose.global.total_round++;
      data.person_lose.global.total_cumulative_lose++;

      array.push(data.person_win);
    } else {
      data.person_win.voted++;

      data.person_win.local.total_round++;
      data.person_win.local.total_cumulative_win++;

      data.person_win.global.total_round++;
      data.person_win.global.total_cumulative_win++;

      data.person_lose.local.total_round++;
      data.person_lose.local.total_cumulative_lose++;

      data.person_lose.global.total_round++;
      data.person_lose.global.total_cumulative_lose++;

      const index_win = array.findIndex((x) => x.id === data.person_win.id);
      if (index_win !== -1) {
        array.splice(index_win, 1);
        // array.splice(index_win, 1, data.person_win);
      }

      const index_win2 = array.findIndex(
        (x) => x.voted < data.person_win.voted,
      );
      if (index_win2 === -1) {
        array.push(data.person_win);
      } else {
        array.splice(index_win2, 0, data.person_win);
      }

      const index_lose = array.findIndex((x) => x.id === data.person_lose.id);
      if (index_lose !== -1) {
        array.splice(index_lose, 1);
        // array.splice(index_lose, 1, data.person_lose);
      }

      const index_lose2 = array.findIndex(
        (x) => x.voted < data.person_lose.voted,
      );
      if (index_lose2 === -1) {
        array.push(data.person_lose);
      } else {
        array.splice(index_lose2, 0, data.person_lose);
      }
    }
  },

  SET_favorite: (state, data) => {
    state.candidates_ranked.find((x) => {
      return x.id === data.id;
    }).is_favorite = !data.is_favorite;
    // data.is_favorite = !data.is_favorite;

    let array = state.candidates_favorite;
    let index;
    if (data.is_favorite) {
      index = array.findIndex((x) => x.rank > data.rank);
      if (index === -1) {
        array.push(data);
      } else {
        array.splice(index, 0, data);
      }
    } else {
      index = array
        .map((x) => {
          return x.id;
        })
        .indexOf(data.id);
      array.splice(index, 1);
    }
  },
};

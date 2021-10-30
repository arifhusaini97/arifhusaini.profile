<template>
  <div class="screen__content">
    <div class="vote-center">
      <div class="vote-center__question-title">
        <span class="center text--title"
          >A Better High School StudentA Better High School StudentA Better
          High School StudentA Better High School StudentA Better High School
          StudentA Better High School StudentA Better High School StudentA
          Better High School Student</span
        >
      </div>
      <div class="vote-center__question-detail">
        <table class="table">
          <tbody>
            <tr class="row">
              <td class="cell cell--radius-top-left header">Category</td>
              <td class="cell cell--radius-top-right">
                <span class="text--single-line">Student in Campus</span>
              </td>
            </tr>
            <tr class="row">
              <td class="cell cell--radius-bottom-left header">Session</td>
              <td class="cell cell--radius-bottom-right">
                <span class="text--single-line">June-December 2021</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="vote-center__timer">
        <Timer
          :is_stop="is_stop"
          :reset="is_reset_timer"
          @toggle-reset-off="toggleResetOff"
          @skip-timeout="skipTimeout" />
      </div>
      <div class="vote-center__sheet">
        <div
          v-if="vote_status === 0"
          class="vote-center__sheet-start card center form-group neumorphism"
          style="width: 100%">
          <h1 class="card-header"><span>Welcome!</span></h1>
          <div class="card-description">
            <div class="form__note">
              <span>{{ note }}</span>
              <button
                type="submit"
                class="btn btn-block btn-large btn-primary mt-4r"
                @click="updateVoteStatus(1)">
                Let's start!
              </button>
            </div>
          </div>
        </div>
        <div
          v-else-if="vote_status === 1 && candidates_sheet_active.length > 0"
          class="vote-center__sheet-run">
          <div class="vote-center__sheet-run-candidate">
            <IndividualDetailsCard
              type="vote"
              :is_active="false"
              :person="candidates_sheet_active[index].persons[0]"
              :key="candidates_sheet_active[index].persons[0].id + round"
              @activate="
                vote(
                  candidates_sheet_active[index].persons[0],
                  candidates_sheet_active[index].persons[1],
                  candidates_sheet_active[index].id,
                )
              " />
          </div>
          <div class="vote-center__sheet-run-candidate">
            <IndividualDetailsCard
              type="vote"
              :is_active="false"
              :person="candidates_sheet_active[index].persons[1]"
              :key="candidates_sheet_active[index].persons[1].id + round"
              @activate="
                vote(
                  candidates_sheet_active[index].persons[1],
                  candidates_sheet_active[index].persons[0],
                  candidates_sheet_active[index].id,
                )
              " />
          </div>
        </div>
        <div
          v-else-if="vote_status === 2"
          class="vote-center__sheet-end card center form-group neumorphism"
          style="width: 100%">
          <h1 class="card-header"><span>Thank You!</span></h1>
          <div class="card-description">
            <div class="form__note">
              Your vote have been submitted! You can make a vote for this
              category once every 6 hours only (
              <span style="color: red"> 6 hours left</span> for another vote ).
            </div>
          </div>
        </div>
        <div
          v-else-if="vote_status === -1"
          class="vote-center__sheet-warning"></div>

        <div
          v-if="is_load"
          class="popup"
          style="
            opacity: 1;
            visibility: visible;
            position: absolute;
            height: 100%;
          ">
          <div
            class="popup__content"
            style="
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
              height: 50%;
              width: 50%;
              background-color: var(--color-primary-1);
              border-radius: 1rem;
            ">
            <div
              class="popup__center"
              style="
                color: var(--color-white-dark);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
              ">
              {{ loading_notes }}
            </div>
          </div>
        </div>
        <div
          v-if="is_new_round"
          class="popup"
          style="
            opacity: 1;
            visibility: visible;
            position: absolute;
            height: 100%;
          ">
          <div
            class="popup__content"
            style="
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
              height: 50%;
              width: 50%;
              background-color: var(--color-primary-1);
              border-radius: 1rem;
            ">
            <div
              class="popup__center"
              style="
                color: var(--color-white-dark);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
              ">
              <span>Round {{ round + 1 }}</span>
              <button
                type="submit"
                class="btn btn-block btn-large btn-primary mt-4r"
                @click="roundStartFn()">
                Start Now!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="vote_status === 1 && candidates_sheet_active.length > 0"
        class="vote-center__paginator">
        <span class="vote-center__paginator-current">{{
          candidates_sheet_active[index].id
        }}</span
        ><span class="vote-center__paginator-total">{{
          candidates_sheet.length
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Timer from '@/components/sub-components/Timer';
  import IndividualDetailsCard from '@/components/sub-components/IndividualDetailsCard';
  export default {
    name: 'VoteCenter',
    components: { Timer, IndividualDetailsCard },
    data() {
      return {
        roundStart: null,
        index: null,
        round: 0,
        is_stop: false,
        is_reset_timer: false,
        is_load: false,
        is_new_round: false,
        load_timeout: 3000,
        loading_notes: 'Loading .',
        vote_status: 0,
        note: `This is a vote center. You may put your vote to any of
          the available option as you like.`,
      };
    },
    computed: {
      candidates_sheet() {
        const data = this.$store.getters['screen/candidate/candidates_sheet'];

        // console.log(data[0].persons[1]);
        return data;
      },
      candidates_sheet_active() {
        return this.candidates_sheet.filter((x) => x.is_done === false);
      },
    },

    watch: {
      roundStart(newVal) {
        if (newVal === true) {
          this.is_stop = true;
          this.is_new_round = true;
        }
      },
    },

    mounted() {
      this.is_stop = true;
    },

    methods: {
      roundStartFn() {
        this.is_stop = false;
        this.is_reset_timer = true;
        this.is_new_round = false;
      },
      updateVoteStatus(value) {
        this.vote_status = value;
        if (value === 1) {
          this.roundStart = true;
          this.index = 0;
          this.is_stop = false;
          this.is_reset_timer = true;
        } else if (value !== 1) {
          this.is_reset_timer = true;
          this.is_stop = true;
        }
      },
      vote(person_win, person_lose, candidates_sheet_id) {
        this.is_stop = true;
        this.is_load = true;
        var loading = setInterval(() => {
          if (this.loading_notes.includes('...')) {
            this.loading_notes = 'Loading .';
          } else {
            this.loading_notes += '.';
          }
        }, 1000);

        this.$store
          .dispatch('screen/candidate/setVote', {
            payload: {
              person_win,
              person_lose,
            },
          })
          .then(() => {
            this.sheetTransition(loading, 'vote', candidates_sheet_id);
          });
      },
      sheetTransition(loading, type, candidates_sheet_id) {
        if (this.candidates_sheet_active.length === 1 && type === 'vote') {
          setTimeout(() => {
            this.is_load = false;
            clearInterval(loading);
            this.loading_notes = 'Loading .';

            if (this.index > 0) {
              this.index--;
            }

            this.$store.dispatch('screen/candidate/setVoteDone', {
              payload: {
                candidates_sheet_id,
              },
            });

            this.$store
              .dispatch('screen/candidate/setNewRound')
              .then((response) => {
                if (response.is_done_entirely === true) {
                  this.roundStart = false;
                  this.updateVoteStatus(2);
                } else {
                  this.index = 0;
                  this.round++;
                  this.is_stop = false;
                  this.is_reset_timer = true;
                  this.roundStart = true;
                }
              });
          }, this.load_timeout);
        } else {
          // do something before proceed to next round.
          setTimeout(() => {
            this.is_stop = false;
            this.is_reset_timer = true;
            this.is_load = false;
            clearInterval(loading);
            this.loading_notes = 'Loading .';

            this.roundStart = false;
            if (type === 'vote') {
              if (this.index > 0) {
                this.index--;
              }

              this.$store.dispatch('screen/candidate/setVoteDone', {
                payload: {
                  candidates_sheet_id,
                },
              });
            } else if (type === 'timeout') {
              if (
                this.candidates_sheet_active.length !== 0 &&
                this.index + 1 >= this.candidates_sheet_active.length
              ) {
                this.index = 0;
              } else {
                this.index++;
              }
            }
          }, this.load_timeout);
        }
      },
      toggleResetOff() {
        this.is_reset_timer = false;
      },
      skipTimeout() {
        this.is_stop = true;
        this.is_load = true;
        var loading = setInterval(() => {
          if (this.loading_notes.includes('...')) {
            this.loading_notes = 'Loading .';
          } else {
            this.loading_notes += '.';
          }
        }, 1000);
        this.sheetTransition(loading, 'timeout', null);
      },
    },
  };
</script>

<style></style>

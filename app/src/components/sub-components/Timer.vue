<template>
  <div id="timer" class="timer">
    <span
      id="timer-bar"
      class="timer-bar"
      :class="timer_status"
      :style="barStyle"></span>
    <div id="timer-number" class="timer-number">{{ display }}</div>
  </div>
</template>

<script>
  export default {
    name: 'Timer',
    props: {
      is_stop: { default: false, type: Boolean },
      reset: { default: false, type: Boolean },
    },
    data() {
      return {
        display: '00:00',
        timer: 1 / 12,
        rest: 1 / 12,
        toggle: true,
        barStyle: '',
        pomInterval: null,
        pomTimeout: null,
        sound: new Audio(
          'http://www.freesound.org/data/previews/22/22627_7037-lq.mp3',
        ),
      };
    },

    created() {
      // this.restartTimer();
      document.elementFromPoint(0, 0).click();
    },

    unmounted() {
      this.resetTimer();
    },

    computed: {
      timer_status: function () {
        return this.toggle === true
          ? 'timer-background-run'
          : 'timer-background-rest';
      },
    },

    watch: {
      reset() {
        this.toggle = true;
        this.restartTimer();
        this.toggleResetOff();
      },

      is_stop() {
        this.toggle = false;
        this.stopTimer();
      },
    },

    methods: {
      toggleResetOff() {
        this.$emit('toggle-reset-off');
      },
      startTimer() {
        // Set initial variables within function scope
        var limit;
        var countdown;

        // Toggle between timer and rest countdowns
        if (this.toggle) {
          limit = this.timer;
          countdown = this.timer;
          // this.toggle = false;
        } else {
          limit = this.rest;
          countdown = this.rest;
          // this.toggle = true;
        }

        // Set initial countdown value and display it
        countdown = countdown * 60;
        var minutes = [
          Math.floor(countdown / 60),
          countdown % 60 < 10 ? '0' + (countdown % 60) : countdown % 60,
        ];
        this.display = minutes.join(':').toString();

        // Set initial barWidth value and display it
        var barWidth = (countdown / (limit * 60)) * 100;
        this.barStyle = 'width: ' + barWidth + '%;';

        this.pomInterval = setInterval(() => {
          // Increment countdown down
          countdown--;

          // Update minutes with new countdown value and display it
          minutes = [Math.floor(countdown / 60), countdown % 60];
          if (minutes[1] < 10) {
            minutes[1] = '0' + minutes[1];
          }
          this.display = minutes.join(':').toString();

          // Update barWidth with new countdown value and display it
          barWidth = (countdown / (limit * 60)) * 100;
          this.barStyle = 'width: ' + barWidth + '%;';
        }, 1000);

        // Reset timer after countdown
        this.pomTimeout = setTimeout(() => {
          clearInterval(this.pomInterval);
          this.sound.play();
          this.startTimer();
          this.$emit('skip-timeout');
        }, limit * 60000);
      },

      restartTimer() {
        clearInterval(this.pomInterval);
        clearTimeout(this.pomTimeout);
        this.toggle = true;
        if (!this.is_stop) {
          this.startTimer();
        } else {
          // Set initial variables within function scope
          var limit;
          var countdown;
          this.toggle = false;
          // Toggle between timer and rest countdowns
          if (this.toggle) {
            limit = this.timer;
            countdown = this.timer;
            // this.toggle = false;
          } else {
            limit = this.rest;
            countdown = this.rest;
            // this.toggle = true;
          }

          // Set initial countdown value and display it
          countdown = countdown * 60;
          this.display = '00:00';

          // Set initial barWidth value and display it
          var barWidth = (countdown / (limit * 60)) * 100;
          this.barStyle = 'width: ' + barWidth + '%;';
        }
      },

      resetTimer() {
        clearInterval(this.pomInterval);
        clearTimeout(this.pomTimeout);
        this.display = '';
      },

      stopTimer() {
        clearInterval(this.pomInterval);
        clearTimeout(this.pomTimeout);
      },
    },
  };
</script>

<style></style>

<template>
  <div class="floating-compose-button">
    <input
      type="checkbox"
      class="floating-compose-button__checkbox"
      id="button-toggle-search"
      :onchange="conserveBackground" />
    <label for="button-toggle-search" class="floating-compose-button__button"
      ><span class="floating-compose-button__button-icon">&nbsp;</span></label
    >
    <div
      class="floating-compose-button__background"
      id="floating-compose-button__background"
      :style="backgroundHeight">
      <div
        class="floating-compose-button__background-upper"
        :style="backgroundHeightUpper">
        <div class="form-filter__background"></div>
      </div>
      <div class="floating-compose-button__background-bottom">
        <input
          type="checkbox"
          class="form__checkbox"
          id="button-toggle-form"
          :onchange="expandBackground" />
        <label for="button-toggle-form" class="form__checkbox-icon">
          <div class="icon">&#9757;</div></label
        >
        <button class="form-search__button">
          <div class="form-search__icon">&#9918;</div>
        </button>
        <input
          type="text"
          class="form__input"
          placeholder="Search"
          id="search" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FloatingComposeButton',
    data() {
      return { backgroundHeight: '', backgroundHeightUpper: '' };
    },

    methods: {
      expandBackground($event) {
        if ($event.target.checked) {
          this.backgroundHeight = 'height:40rem;';
          this.backgroundHeightUpper = 'height:35rem;';
        } else {
          this.backgroundHeight = '';
          this.backgroundHeightUpper = 'height:0rem;';
        }
      },

      conserveBackground($event) {
        if (!$event.target.checked) {
          /*
            NOTE: Change the element state manually will
            not trigger eventListener
          */
          document.getElementById('button-toggle-form').checked = false;

          // NOTE: This is use to trigger event manually in coding
          var evt = document.createEvent('HTMLEvents');
          evt.initEvent('change', false, true);
          document.getElementById('button-toggle-form').dispatchEvent(evt);
        }
      },
    },
  };
</script>

<style></style>

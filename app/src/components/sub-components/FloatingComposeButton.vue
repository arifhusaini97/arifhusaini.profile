<template>
  <div class="floating-compose-button">
    <input
      type="checkbox"
      class="floating-compose-button__checkbox"
      id="button-toggle" />
    <label for="button-toggle" class="floating-compose-button__button"
      ><span class="floating-compose-button__button-icon">&nbsp;</span></label
    >
    <div class="floating-compose-button__background">
      <div class="icon">&#9757;</div>
      <input
        type="text"
        class="form__input"
        placeholder="Search"
        id="search" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FloatingComposeButton',
  };
</script>

<style></style>

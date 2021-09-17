<template>
  <div class="screen">
    <div class="screen__sidebar">
      <div class="navigation">
        <div class="navigation-logo"></div>
        <ul class="navigation-list">
          <li class="navigation-list__item navigation-list__item--active">
            <a href="#" class="navigation-list__item-link">Global</a>
          </li>
          <li class="navigation-list__item">
            <a href="#" class="navigation-list__item-link">List</a>
          </li>
          <li class="navigation-list__item">
            <a href="#" class="navigation-list__item-link">Form</a>
          </li>
        </ul>
      </div>
      <div class="legal">
        &copy; 2021 by arifhusaini.com.<br />All rights reserved.
      </div>
    </div>
    <div class="screen__header">
      {{ msg }}
    </div>
    <div class="screen__content">
      {{ msg }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Screen',
    props: {
      msg: String,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

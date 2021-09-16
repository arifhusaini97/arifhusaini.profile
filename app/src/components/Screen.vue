<template>
  <div class="screen">
    <div class="screen__sidebar">
      <div class="screen__sidebar-navigation">
        {{ msg }}
      </div>
      <div class="screen__sidebar-legal">
        &copy; 2021 by arifhusaini.com. All rights reserved.
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

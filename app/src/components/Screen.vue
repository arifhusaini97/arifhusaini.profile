<template>
  <div class="container">
    <div class="screen">
      <div class="screen__sidebar">
        <Navigation :navigation_list_items="navigation_list_items" />
        <div class="legal">
          &copy; 2021 by arifhusaini.com.<br />All rights reserved.
        </div>
      </div>
      <div class="screen__header">
        {{ header }}
      </div>
      <router-view />
    </div>
    <div class="screen-broken">
      <div class="screen-broken__logo-box">
        <img
          src="../assets/system_logo.png"
          alt="Aniaxu Logo"
          class="logo--small" />
      </div>
      <div class="screen-broken__message">
        Your device is too narrow to display the contain.
      </div>
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/sub-components/Navigation';

  export default {
    name: 'Screen',
    props: {
      header: { type: String, required: true },
    },
    components: {
      Navigation,
    },
    data() {
      return {
        navigation_list_items: [
          { name: 'podium', url: '/podium', active: true },
          { name: 'favourite', url: '/favourite', active: false },
          { name: 'vote', url: '/vote-center', active: false },
        ],
      };
    },
  };
</script>

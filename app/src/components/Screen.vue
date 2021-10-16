<template>
  <div class="container">
    <div class="screen">
      <div class="screen__sidebar">
        <Navigation
          :navigation_list_items="navigation_list_items"
          @activate-navigation="activateNavigation" />
        <div class="legal">
          &copy; 2021 by arifhusaini.com.<br />All rights reserved.
        </div>
      </div>
      <div class="screen__header">
        <div class="abs left-0 mx-2r">
          <span
            v-if="session.is_logged_in"
            @click="logout"
            style="cursor: pointer"
            >🚪<small class="px-1">logout</small></span
          ><router-link :to="{ name: 'Login' }" v-else
            >🔑<small class="px-1">login</small></router-link
          >
        </div>
        {{ header }}

        <div class="abs right-0 mx-8r" v-if="session.is_logged_in">
          <router-link :to="{ name: 'Profile' }">👦</router-link>
        </div>
        <div class="abs right-0 mx-4r">
          <input
            type="checkbox"
            id="button-toggle-list"
            hidden
            :onchange="toggleModel" />
          <label for="button-toggle-list"> <a href="#popup">🥇</a></label>
        </div>
      </div>
      <router-view />
    </div>
    <Popup />
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
  import Popup from '@/components/sub-components/Popup';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Screen',
    props: {
      header: { type: String, required: true },
    },

    components: {
      Navigation,
      Popup,
    },

    data() {
      return { header2: 'test' };
    },

    created() {
      this.navigation_list_items.forEach((item) => {
        if (this.$route) {
          if (item.url === this.$route.path) {
            return (item.active = true);
          }
        }
      });
    },

    computed: {
      navigation_list_items() {
        let data = this.$store.getters['screen/getNavigationListItems'];
        return data;
      },

      ...mapGetters(['session']),
    },

    methods: {
      activateNavigation(index) {
        console.log(index);
      },

      // ...mapActions(['logout']),
      logout() {
        this.$store.dispatch('logout');
        if (this.$route.meta.requiresAuth) {
          this.$router.push({ name: 'Login' });
        }
      },
      toggleModel($event) {
        console.log($event);
      },
    },
  };
</script>

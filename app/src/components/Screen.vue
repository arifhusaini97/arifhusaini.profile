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

        <div class="abs mx-8r right-0" v-if="session.is_logged_in">
          <router-link :to="{ name: 'Profile' }">👦</router-link>
        </div>
        <div class="abs mx-4r right-0">
          <input
            type="checkbox"
            id="button-toggle-list"
            hidden
            :onchange="toggleModel" />
          <label for="button-toggle-list">
            <a href="javascript:;" @click="show_hide_popup">🥇</a></label
          >
        </div>
      </div>
      <router-view />
    </div>
    <Popup1
      v-if="is_show_popup_1 || is_show_popup_2"
      :categories="categories"
      :sub_categories="sub_categories"
      :topics="topics"
      @show-hide="show_hide_popup" />
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
  import Popup1 from '@/components/sub-components/Popup1';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Screen',
    props: {
      header: { type: String, required: true },
    },

    components: {
      Navigation,
      Popup1,
    },

    data() {
      return { is_show_popup_2: null };
    },

    created() {
      this.navigation_list_items.forEach((item) => {
        if (this.$route) {
          if (item.url === this.$route.path) {
            return (item.active = true);
          }
        }
      });

      this.is_show_popup_2 = this.is_show_popup_1;
    },

    computed: {
      is_show_popup_1() {
        let data = this.filters
          ? this.filters.category &&
            this.filters.sub_category &&
            this.filters.topic
            ? false
            : true
          : true;
        return data;
      },

      filters() {
        let data = this.$store.getters['screen/candidate/filters'];
        return data;
      },

      navigation_list_items() {
        let data = this.$store.getters['screen/getNavigationListItems'];
        return data;
      },

      categories() {
        const data = this.$store.getters['screen/candidate/categories'];
        return data;
      },

      sub_categories() {
        const data = this.$store.getters['screen/candidate/sub_categories'];
        return data;
      },

      topics() {
        const data = this.$store.getters['screen/candidate/topics'];
        return data;
      },

      ...mapGetters(['session']),
    },

    methods: {
      activateNavigation(index) {
        console.log('activateNavigation: ' + index);
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

      show_hide_popup() {
        this.is_show_popup_2 = !this.is_show_popup_2;
      },
    },
  };
</script>

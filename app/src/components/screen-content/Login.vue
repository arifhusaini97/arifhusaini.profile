<template>
  <div class="screen__content">
    <div class="login">
      <div class="login__head">
        <img src="@/assets/system_logo.png" alt="Aniaxu Logo" class="logo" />
      </div>
      <div class="login__auth" :style="expend_authentication">
        <Authentication @toggle-hide-notes="toggleHideNotes" />
      </div>
      <div class="login__note" v-if="!hide_notes"><Note /></div>
    </div>
  </div>
</template>

<script>
  import Authentication from '@/components/sub-components/Authentication';
  import Note from '@/components/sub-components/Note';
  export default {
    name: 'Login',
    data() {
      return { hide_notes: false, expend_authentication: '' };
    },

    components: { Authentication, Note },
    methods: {
      toggleHideNotes() {
        this.hide_notes = !this.hide_notes;
        if (this.hide_notes) {
          this.expend_authentication = `
          grid-row-start: auth-start;
          grid-row-end: -1;
          grid-column-start:auth-start;
          grid-column-end:-1;
          `;
        } else {
          this.expend_authentication = '';
        }
      },
    },
  };
</script>

<style></style>

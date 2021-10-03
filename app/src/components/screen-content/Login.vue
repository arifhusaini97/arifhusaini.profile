<template>
  <div class="screen__content">
    <div class="login">
      <div class="login__head">
        <img src="@/assets/system_logo.png" alt="Aniaxu Logo" class="logo" />
      </div>
      <div class="login__auth"><Authentication /></div>
      <div class="login__note"><Note /></div>
    </div>
  </div>
</template>

<script>
  import Authentication from '@/components/sub-components/Authentication';
  import Note from '@/components/sub-components/Note';
  export default {
    name: 'Login',
    components: { Authentication, Note },
  };
</script>

<style></style>

<template>
  <div class="authentication">
    <div class="center card neumorphism form-group">
      <h1>Login</h1>
      <form method="post" class="form pt-1">
        <input
          type="text"
          name="u"
          placeholder="Username"
          required="required" />
        <input
          type="password"
          name="p"
          placeholder="Password"
          required="required" />
        <button type="submit" class="btn btn-primary btn-block btn-large">
          Let me in.
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Authentication',
  };
</script>

<style></style>

<template>
  <div class="note">
    <div class="center card neumorphism form-group">
      <h1>Note</h1>
      <div class="form">
        <div class="form__note">{{ note }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Note',
    data() {
      return {
        note: `
        Please login to use the system.
        Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Possimus voluptas nam quaerat
        impedit, est enim fuga, sint dolores eaque dolor
        labore unde veritatis modi, accusantium ut. Dolores
        enim perspiciatis nulla. modi, accusantium ut. Dolores
        enim perspiciatis nulla.`,
      };
    },
  };
</script>

<style></style>

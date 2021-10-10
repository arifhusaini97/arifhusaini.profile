<template>
  <div class="note">
    <div class="card center neumorphism">
      <h1 class="card-header"><span>Note</span></h1>
      <div class="card-description">
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

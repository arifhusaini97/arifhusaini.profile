<template>
  <div class="container">
    <div class="card">
      <figure class="card__image-shape">
        <img
          id="profile-image"
          class="card__image"
          src="@/assets/profile_1.jpg" />
      </figure>
      <div class="card__description">
        <div class="card__description-name">@arifhusaini97</div>
        <div class="card__description-region">
          <div class="card__description-region-flag"></div>
          <div class="card__description-region-name"></div>
        </div>
        <div class="card__description-details"></div>
        <div class="card__description-voters"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IconDetailsCard',
  };
</script>

<style></style>

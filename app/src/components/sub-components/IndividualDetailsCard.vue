<template>
  <div class="container" :class="custom_class">
    <div class="card">
      <figure class="card__image-shape">
        <img
          id="profile-image"
          class="card__image"
          src="@/assets/profile_1.jpg" />
        <div class="card__image-number">1</div>
      </figure>
      <div class="card__description">
        <div class="card__description-header">
          <div class="card__description-header-name">@arifhusaini97</div>
          <div class="card__description-header-region">
            <div class="card__description-header-region-flag">&copy;</div>
            <div class="card__description-header-region-name">malaysia</div>
          </div>
        </div>
        <div class="card__description-details">
          student with many skills and dedication who strive for the best
          student with many skills and dedication who strive for the best
          student with many skills and dedication who strive for the best
        </div>
        <div class="card__description-voters">200/350</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndividualDetailsCard',
    props: {
      custom_class: { type: String, required: false },
    },
  };
</script>

<style></style>

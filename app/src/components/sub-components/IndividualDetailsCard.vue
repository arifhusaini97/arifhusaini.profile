<template>
  <div class="container" :class="custom_class">
    <div class="card-candidate glassmorphism">
      <figure class="card-candidate__image-shape">
        <img
          id="profile-image"
          class="card-candidate__image"
          src="@/assets/profile_1.jpg" />
        <div class="card-candidate__image-number">1</div>
      </figure>
      <div class="card-candidate__description">
        <div class="card-candidate__description-header">
          <div class="card-candidate__description-header-name">
            @arifhusaini97
          </div>
          <div class="card-candidate__description-header-region">
            <div class="card-candidate__description-header-region-flag">
              &copy;
            </div>
            <div class="card-candidate__description-header-region-name">
              malaysia
            </div>
          </div>
        </div>
        <div class="card-candidate__description-details">
          student with many skills and dedication who strive for the best
          student with many skills and dedication who strive for the best
          student with many skills and dedication who strive for the best
        </div>
        <div class="card-candidate__description-voters">200/350</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndividualDetailsCard',
    props: {
      custom_class: { default: '', type: String, required: false },
    },
  };
</script>

<style></style>

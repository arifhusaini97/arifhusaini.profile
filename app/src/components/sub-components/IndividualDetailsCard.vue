<template>
  <div class="container" :class="custom_class">
    <div class="card-candidate glassmorphism">
      <figure class="card-candidate__image-shape">
        <img
          id="profile-image"
          class="card-candidate__image"
          src="@/assets/profile_1.jpg" />
        <div class="card-candidate__image-number">{{ person.rank }}</div>
      </figure>
      <div class="card-candidate__description">
        <div class="card-candidate__description-header">
          <div
            class="card-candidate__description-header-name text--single-line">
            <!-- @arifhusaini97 -->
            {{ person.username }}
          </div>
          <div class="card-candidate__description-header-region">
            <div class="card-candidate__description-header-region-flag pr-1">
              {{ person.represent.flag }}
            </div>
            <div
              class="
                card-candidate__description-header-region-name
                text--single-line
              ">
              <!-- malaysia -->
              {{ person.represent.name }}
            </div>
          </div>
        </div>
        <div class="card-candidate__description-details">
          <!-- 15 Characters max for one word -->
          {{ person.description }}
        </div>
        <div class="card-candidate__description-voters">
          <!-- 200/350 -->
          {{ person.totalVoted }}/{{ person.totalAppearances }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndividualDetailsCard',
    props: {
      custom_class: { default: '', type: String, required: false },
      person: {
        default: () => {
          return {
            rank: 12345,
            username: 'usernameusernameusernameusernameusername',
            represent: {
              flag: '🏳',
              name: 'representusernameusernameusernameusername',
            },
            description:
              'descriptionusern ameusernameus  ernameusername ernameusername',
            totalVoted: 10,
            totalAppearances: 20,
          };
        },

        type: Object,
        required: true,
      },
    },
  };
</script>

<style></style>

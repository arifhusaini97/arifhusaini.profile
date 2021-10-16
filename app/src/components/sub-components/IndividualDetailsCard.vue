<template>
  <!-- if the height is greater than the width, then make the card vertically
  displayed -->
  <!-- use https://codepen.io/skwbr/pen/zqQwVZ 
  to solve description overflow issue -->
  <div class="container" :class="custom_class">
    <div
      ref="card"
      class="card-candidate glassmorphism"
      :class="card_candidate_style">
      <figure
        class="card-candidate__image-shape"
        :class="card_candidate_image_style">
        <img
          id="profile-image"
          class="card-candidate__image"
          src="@/assets/profile_1.jpg" />
        <div class="card-candidate__image-number">{{ person.rank }}</div>
      </figure>
      <div
        class="card-candidate__description"
        :class="card_candidate_description_style">
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
        <div
          ref="description"
          id="description"
          class="card-candidate__description-details"
          :class="descriptionAdditionalClass">
          <!-- <div class="text-ellipsis multiline line-4"> -->
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
    data() {
      return {
        descriptionAdditionalClass: '',
        card_candidate_style: 'card-candidate-row',
        card_candidate_image_style: ' card-candidate__image-shape-row',
        card_candidate_description_style: 'card-candidate__description-row',
      };
    },
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

            description: `
            1descriptionusern
            2ameusernameus
            3ernameusername
            4ernameusername
              5descriptionusern
              6ameusernameus
              7ernameusername
              8ernameusername
              9descriptionusern
              10ameusernameus
              11ernameusername
              12ernameusername
              13ernameusername`,

            totalVoted: 10,
            totalAppearances: 20,
          };
        },

        type: Object,
        required: true,
      },
    },
    created() {
      window.addEventListener('resize', this.screenResizeHandler);
    },
    destroyed() {
      window.removeEventListener('resize', this.screenResizeHandler);
    },
    mounted() {
      this.screenResizeHandler();
    },
    methods: {
      descriptionHeight() {
        const marginTop = parseInt(
          window
            .getComputedStyle(this.$refs.description)
            .marginTop.replace(/\D/g, ''),
        );
        const marginBottom = parseInt(
          window
            .getComputedStyle(this.$refs.description)
            .marginBottom.replace(/\D/g, ''),
        );
        return this.$refs.description.clientHeight - marginTop - marginBottom;
      },
      screenResizeHandler() {
        setTimeout(() => {
          const fontSize = parseInt(
            window
              .getComputedStyle(this.$refs.description)
              .fontSize.replace(/px/g, ''),
          );
          let clamp = Math.trunc(
            Math.round((this.descriptionHeight() / fontSize) * 10) / 10,
          );
          clamp += 1;
          if (clamp % 9 != 0) {
            clamp -= Math.floor(clamp / 9);
          } else if (clamp <= 0) {
            clamp = 0;
          }
          this.descriptionAdditionalClass = 'clamp-' + clamp;

          const cardHeight = this.$refs.card.clientHeight;
          const cardWidth = this.$refs.card.clientWidth;

          if (cardHeight > cardWidth) {
            this.card_candidate_style = 'card-candidate-column';
            this.card_candidate_image_style =
              ' card-candidate__image-shape-column';
            this.card_candidate_description_style =
              'card-candidate__description-column';
          } else {
            this.card_candidate_style = 'card-candidate-row';
            this.card_candidate_image_style =
              ' card-candidate__image-shape-row';
            this.card_candidate_description_style =
              'card-candidate__description-row';
          }
        }, 2000);
      },
    },
  };
</script>

<style></style>

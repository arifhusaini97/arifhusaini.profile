<template>
  <!-- if the height is greater than the width, then make the card vertically
  displayed -->
  <!-- use https://codepen.io/skwbr/pen/zqQwVZ 
  to solve description overflow issue -->
  <div class="container" :class="custom_class" @click="activate">
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
          {{ person.global.total_cumulative_win }}/{{
            person.global.total_round
          }}
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
        custom_class: '',
        descriptionAdditionalClass: '',
        card_candidate_style: 'card-candidate-row',
        card_candidate_image_style: ' card-candidate__image-shape-row',
        card_candidate_description_style: 'card-candidate__description-row',
      };
    },
    props: {
      type: { default: '', type: String, required: true },

      is_active: { default: false, type: Boolean, required: true },
      person: {
        default: () => {
          return {
            rank: 0,
            username: 'username',
            represent: {
              flag: '🏳',
              name: 'country',
            },

            description: `description`,
            local: {
              total_round: 0,
              total_cumulative_win: 0,
              total_cumulative_lose: 0,
            },

            global: {
              total_round: 0,
              total_cumulative_win: 0,
              total_cumulative_lose: 0,
            },
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
      setTimeout(() => {
        this.screenResizeHandler();
      }, 0);

      if (this.type === 'favorite') {
        this.custom_class = `card-candidate__border
        card-candidate__border-favourite`;
        if (this.is_active) {
          this.custom_class += ` card-candidate__border-favourite--active`;
        }
      } else if (this.type === 'vote') {
        this.custom_class = `card-candidate__border
        card-candidate__border-vote`;
        if (this.is_active) {
          this.custom_class += ` card-candidate__border-vote--active`;
        }
      }
    },
    methods: {
      activeClass() {
        if (this.type === 'favorite') {
          this.custom_class += ` card-candidate__border-favourite--active`;
        } else if (this.type === 'vote') {
          this.custom_class += ` card-candidate__border-vote--active`;
        }
      },

      deactiveClass() {
        if (this.type === 'favorite') {
          this.custom_class = `card-candidate__border
        card-candidate__border-favourite`;
        } else if (this.type === 'vote') {
          this.custom_class = `card-candidate__border
        card-candidate__border-vote`;
        }
      },
      activate() {
        if (!this.is_active) {
          this.activeClass();
        } else {
          this.deactiveClass();
        }

        this.$emit('activate', this.person);
      },
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
        // setTimeout(() => {
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
          this.card_candidate_image_style = ' card-candidate__image-shape-row';
          this.card_candidate_description_style =
            'card-candidate__description-row';
        }
        // }, 200);
      },
    },
  };
</script>

<style></style>

<template>
  <div class="screen__content">
    <div class="grid">
      <IndividualDetailsCard
        v-for="person in persons"
        :key="person.id"
        :person="person"
        type="favorite"
        :is_active="person.is_favorite"
        @activate="favorite(person)" />
    </div>
    <FloatingComposeButton />
  </div>
</template>

<script>
  import IndividualDetailsCard from '@/components/sub-components/IndividualDetailsCard';
  import FloatingComposeButton from '@/components/sub-components/FloatingComposeButton';
  // import { mapGetters } from 'vuex';
  export default {
    name: 'Podium',
    components: { IndividualDetailsCard, FloatingComposeButton },

    computed: {
      persons() {
        const data = this.$store.getters['screen/candidate/candidates_ranked'];
        return data;
      },
      // ...mapGetters(['candidate']),
    },

    methods: {
      favorite(person) {
        this.$store.dispatch('screen/candidate/setFavorite', {
          payload: person,
        });
      },
    },
  };
</script>

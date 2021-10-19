<template>
  <div class="screen__content">
    <div class="grid">
      <IndividualDetailsCard
        v-for="person in persons"
        :key="person.id"
        type="favorite"
        :person="person"
        :is_active="person.is_favorite"
        @activate="favorite(person)" />
    </div>
  </div>
</template>

<script>
  import IndividualDetailsCard from '@/components/sub-components/IndividualDetailsCard';
  export default {
    name: 'Favourite',
    components: { IndividualDetailsCard },

    computed: {
      persons() {
        const data =
          this.$store.getters['screen/candidate/candidates_favorite'];
        return data;
      },
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

<style></style>

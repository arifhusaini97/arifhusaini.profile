<template>
  <div class="screen__content">
    <div class="grid">
      <IndividualDetailsCard
        custom_class="card-candidate__border
        card-candidate__border-favourite
        card-candidate__border-favourite--active" />
      <IndividualDetailsCard
        custom_class="card-candidate__border
        card-candidate__border-favourite" />
      <IndividualDetailsCard
        custom_class="card-candidate__border
        card-candidate__border-favourite" />
    </div>
  </div>
</template>

<script>
  import IndividualDetailsCard from '@/components/sub-components/IndividualDetailsCard';
  export default {
    name: 'Favourite',
    components: { IndividualDetailsCard },
  };
</script>

<style></style>

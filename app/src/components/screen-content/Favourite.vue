<template>
  <div class="screen__content">
    <div class="grid">
      <IndividualDetailsCard />
      <IndividualDetailsCard />
      <IndividualDetailsCard />
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

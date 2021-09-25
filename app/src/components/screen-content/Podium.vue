<template>
  <div class="screen__content">
    <div class="screen__main-content">
      <IndividualDetailsCard />
      <IndividualDetailsCard />
      <IndividualDetailsCard />
      <IndividualDetailsCard />
      <IndividualDetailsCard />
      <IndividualDetailsCard />
      <IndividualDetailsCard />
      <IndividualDetailsCard />
      <IndividualDetailsCard />
      <IndividualDetailsCard />
      <IndividualDetailsCard />
      <IndividualDetailsCard />
      <IndividualDetailsCard />
      <IndividualDetailsCard />
      <IndividualDetailsCard />
    </div>
    <FloatingComposeButton />
  </div>
</template>

<script>
  import IndividualDetailsCard from '@/components/sub-components/IndividualDetailsCard';
  import FloatingComposeButton from '@/components/sub-components/FloatingComposeButton';
  export default {
    name: 'Podium',
    components: { IndividualDetailsCard, FloatingComposeButton },
  };
</script>

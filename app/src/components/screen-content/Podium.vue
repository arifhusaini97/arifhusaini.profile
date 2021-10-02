<template>
  <div class="screen__content">
    <div class="grid">
      <IndividualDetailsCard
        custom_class="card__border
        card__border-favourite
        card__border-favourite--active" />
      <IndividualDetailsCard
        custom_class="card__border card__border-favourite" />
      <IndividualDetailsCard
        custom_class="card__border card__border-favourite" />
      <IndividualDetailsCard
        custom_class="card__border card__border-favourite" />
      <IndividualDetailsCard
        custom_class="card__border card__border-favourite" />
      <IndividualDetailsCard
        custom_class="card__border card__border-favourite" />
      <IndividualDetailsCard
        custom_class="card__border card__border-favourite" />
      <IndividualDetailsCard
        custom_class="card__border card__border-favourite" />
      <IndividualDetailsCard
        custom_class="card__border card__border-favourite" />
      <IndividualDetailsCard
        custom_class="card__border card__border-favourite" />
      <IndividualDetailsCard
        custom_class="card__border card__border-favourite" />
      <IndividualDetailsCard
        custom_class="card__border card__border-favourite" />
      <IndividualDetailsCard
        custom_class="card__border card__border-favourite" />
      <IndividualDetailsCard
        custom_class="card__border card__border-favourite" />
      <IndividualDetailsCard
        custom_class="card__border card__border-favourite" />
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

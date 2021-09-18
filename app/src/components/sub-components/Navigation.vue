<template>
  <div class="navigation">
    <div class="navigation-logo"></div>
    <ul class="navigation-list">
      <li
        v-for="item in navigation_list_items"
        :key="item.name"
        class="navigation-list__item"
        :class="[{ 'navigation-list__item--active': item.active === true }]">
        <a :href="item.url" class="navigation-list__item-link">{{
          item.name
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    props: {
      navigation_list_items: { type: Object, required: true },
    },
  };
</script>

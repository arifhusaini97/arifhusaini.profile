<template>
  <div class="navigation">
    <div class="navigation-logo"></div>
    <ul class="navigation-list">
      <li
        v-for="(item, index) in navigation_list_items"
        :key="item.name"
        class="navigation-list__item"
        :class="[{ 'navigation-list__item--active': item.active === true }]">
        <a
          href=""
          class="navigation-list__item-link"
          @click.prevent="redirect(item.url, index)"
          >{{ item.name }}</a
        >
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

    methods: {
      redirect(url, index) {
        this.$emit('activate-navigation', index);
        this.$router.push({ path: url });
      },
    },
  };
</script>

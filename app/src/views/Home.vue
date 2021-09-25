<template>
  <div class="home">
    <Screen :header="title" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Screen from '@/components/Screen.vue';

  export default {
    name: 'Home',
    components: {
      Screen,
    },

    data() {
      return { title: 'Rank' };
    },

    mounted() {
      this.functionMsg();
    },

    methods: {
      functionMsg() {
        // console.log(this.msg);
      },
    },
  };
</script>

<template>
  <div class="home">
    <Screen :header="title" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Screen from '@/components/Screen';
  import { PascalCaseToSentenceCase } from '@/js/converter-pascal-case';

  export default {
    name: 'Home',
    components: {
      Screen,
    },

    // data() {
    //   return null;
    // },

    computed: {
      title() {
        return PascalCaseToSentenceCase(this.$route.name);
      },
    },

    mounted() {
      this.functionMsg();
    },

    methods: {
      functionMsg() {
        console.log(this.$route);
      },
    },
  };
</script>

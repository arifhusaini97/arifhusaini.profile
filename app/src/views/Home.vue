<template>
  <div class="home">
    <Screen :header="title" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Screen from '@/components/Screen';
  import { PascalCaseToSentenceCase } from '@/js/functions/converter-pascal-case';
  // import helper from '@/js/functions/helper';

  export default {
    name: 'Home',
    components: {
      Screen,
    },

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
        // this.helper.debug();
      },
    },
  };
</script>

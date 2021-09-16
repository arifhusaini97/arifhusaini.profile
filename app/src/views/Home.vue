<template>
  <div class="home">
    <Screen :msg="msg" />
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
      return { msg: 'arifhusaini.com' };
    },

    mounted() {
      this.functionMsg();
    },

    methods: {
      functionMsg() {
        console.log(this.msg);
      },
    },
  };
</script>

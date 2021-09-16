<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Test to Your Vue.js App" />
    <div class="msg">
      {{ msg }}
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue';

  export default {
    name: 'Home',
    components: {
      HelloWorld,
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

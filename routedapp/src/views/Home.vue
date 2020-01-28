<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <img alt="Chomp" src="../assets/chomp.gif"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button v-on:click='clickContact'>contact bob</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    clickContact(){
      this.$router.push('contact')
    }
  }
}
</script>

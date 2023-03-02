<template>
  <div id="app">
    <NavBar />

  </div>
</template>

<script>
import NavBar from './components/components/NavBar.vue';


export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
</style>

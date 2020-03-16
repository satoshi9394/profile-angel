<template>
  <div id="app">
    <NavBar/>
    <div class="container" id="container-main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components:{
    NavBar
  }
  
}
</script>

<style>
  #container-main{
    width: 95vw;
  }
</style>

<template>
  <div>
    <div class="card">
      <div class="card-image">
        <img :src="img" alt="movie img">
      </div>
    </div>   
  </div>
</template>

<script>
//config
import configServices from '@/utils/configServices';

export default {
  name:'CardMovie',
  props:{
    img:String,
    default: '#'
  }
}
</script>

<style>

</style>
<template>
  <div>
    <h1>Movie</h1>
    <div class="container">
      <div class="row">
          <CardMovie class="col s3"
          v-for="movie in dataMovie" :key="movie.id"
          :img="urlImg + movie.poster_path"
          />
      </div>
    </div>
  </div>
</template>

<script>
//componets
import CardMovie from '@/components/CardMovie.vue'

//vuex
import { mapActions, mapState } from 'vuex'

//config
import configServices from '@/utils/configServices'

export default {
  name: 'MovieIndex',
  data() {
    return {
      urlImg: 'http://image.tmdb.org/t/p/w1280',
      typeSearch: 'popular'
    }
  },
  components: {
     CardMovie 
  },
  methods: {
    ...mapActions(['getMovie'])
  },
  
  created() {
    const url = `${configServices.apiUrl}movie/${this.typeSearch}?api_key=${configServices.apiKey}&language=en-US`
    this.getMovie(url)
  },

  computed: {
    ...mapState(['dataMovie'])
  },

}
</script>

<style>
  .container{
    width: 90vw;
  }

</style>
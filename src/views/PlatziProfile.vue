<template>
  <div>
    <h1>Profile</h1>
    <Card typeCard="card horizontal"/>
  </div>
</template>

<script>
//componets
import Card from '@/components/Card.vue'

//vuex
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PlatziProfile',

  components: {
    Card
  },

  methods: {
    ...mapActions(['getDataPlatzi'])
  },

  created() {
    this.getDataPlatzi()
  },

  computed: {
    ...mapState('dataPlatziProfile')
  },

  

}
</script>

<style>

</style>

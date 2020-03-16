<template>
  <div>
    <div class="nav-wrapper teal darken-2">
      <div class="row">
        <router-link to="/" class="col s1">
          <i class="medium material-icons">home</i>
        </router-link>
        <router-link to="/profile-platzi" class="col s2">
          <div class="col">
            <p>Perfil-Platzi</p>
          </div>
        </router-link>
        <router-link to="/Movie-store" class="col s2 pull-s1">
          <div class="col">
            <p>Movie index</p>
          </div>
        </router-link>
        <div class="col push-s9"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
  router-link{
    color: white;
  }

</style>
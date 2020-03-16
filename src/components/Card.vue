<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s3">
          <div :class="typeCard">
            <div class="card-image">
              <img :src="imgPlatzi" alt="platzi curso" height="200px">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>{{title}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props:{
    title:{
      name: String,
      default: 'title platzi'
    },
    imgPlatzi:{
      img: String,
      default: 'https://startupxplore.com/uploads/ff8080815235115101523595712a00de-large.png'
    },
    typeCard:{
      type: String,
      default: 'card'
    }

    }
}
</script>

<style>
  .container{
    width: 100vw;
  }
</style>
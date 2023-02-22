<template>
  <div id="home">
    <div id="home_search">
      <span>Let's find your dream roommates</span>
      <br />
      <div class="w-25 d-inline-block">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">title</h5>
            <h5 class="card-text">text</h5>
            <button class="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
      <div class="w-25 d-inline-block">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">title</h5>
            <h5 class="card-text">text</h5>
            <button class="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#home {
  position: relative;
  height: 85vh;
  background-color: #e5e5e5;
}
#home_search {
  text-align: center;
  position: relative;
  /* top: 3%; */
  font-size: 60px;
  font-weight: bolder;
}
#search {
  background-color: #fff;
}
</style>

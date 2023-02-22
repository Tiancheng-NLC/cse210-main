<template>
  <div id="home">
    <div id="home_search">
      <span>Let's find your dream roommates</span>
      <br />
      <span id="cards" v-for="user in users" :key="user.id">
        <div class="card w-25 d-inline-block">
          <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <h5 class="card-text">
              {{ user.age }} years ({{ user.gender }})
              <br />
              rent:{{ user.rent_min }} to {{ user.rent_max }}
            </h5>
            <button class="btn btn-primary">View details</button>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Alice",
          age: 24,
          gender: "Female",
          rent_min: 1000,
          rent_max: 2000,
        },
        {
          id: 2,
          name: "Bill",
          age: 24,
          gender: "Male",
          rent_min: 1000,
          rent_max: 2000,
        },
        {
          id: 2,
          name: "Bill",
          age: 24,
          gender: "Male",
          rent_min: 1000,
          rent_max: 2000,
        },
        {
          id: 2,
          name: "Bill",
          age: 24,
          gender: "Male",
          rent_min: 1000,
          rent_max: 2000,
        },
      ],
    };
  },
};
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
  font-size: 60px;
  font-weight: bolder;
}
#cards {
  width: 100%;
}
</style>

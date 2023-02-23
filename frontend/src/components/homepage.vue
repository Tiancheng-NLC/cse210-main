<template>
  <div id="home">
    <div id="home_search">
      <span>Let's find your dream roommates</span>
      <br />

      <div id="search" v-show="loggedIn">
        <!-- gender -->
        <select class="requirement" id="gender" v-model="filter.gender">
          <option value="" disabled selected>gender</option>
          <option value="F">Female</option>
          <option value="M">Male</option>
        </select>
        <!-- age -->
        <select class="requirement" id="age" v-model="filter.ageCategory">
          <option value="" disabled selected>age range</option>
          <option value="1">below 25</option>
          <option value="2">25 to 35</option>
          <option value="3">35 to 45</option>
          <option value="4">above 45</option>
        </select>
        <!-- ethnicity -->
        <select class="requirement" id="ethnicity" v-model="filter.nationality">
          <option value="" disabled selected>ethnicity</option>
          <option value="White">White</option>
          <option value="Black or African American">
            Black or African American
          </option>
          <option value="American Indian and Alaska Native">
            American Indian and Alaska Native
          </option>
          <option value="Asian">Asian</option>
          <option value="Native Hawaiian and Other Pacific Islander">
            Native Hawaiian and Other Pacific Islander
          </option>
          <option value="Other">Other</option>
        </select>
        <!-- occupation -->
        <select class="requirement" id="occupation" v-model="filter.occupation">
          <option value="" disabled selected>occupation</option>
          <option value="S">Student</option>
          <option value="P">Professor</option>
        </select>
        <!-- rent range -->
        <input
          class="requirement"
          type="number"
          placeholder="min budget"
          v-model="filter.minBudget"
        />
        <input
          class="requirement"
          type="number"
          placeholder="max budget"
          v-model="filter.maxBudget"
        />
        <!-- smoking -->
        <select class="requirement" id="smoking" v-model="filter.smoking">
          <option value="" disabled selected>smoking</option>
          <option value="Y">Yes</option>
          <option value="N">No</option>
        </select>
        <!-- pet -->
        <select class="requirement" id="pets" v-model="filter.pets">
          <option value="" disabled selected>pets</option>
          <option value="Y">Yes</option>
          <option value="N">No</option>
        </select>
        <!-- food -->
        <select class="requirement" id="food" v-model="filter.food">
          <option value="" disabled selected>food</option>
          <option value="V">Vegan</option>
          <option value="NV">Non-vegan</option>
        </select>
        <!-- rise -->
        <select class="requirement" id="riser" v-model="filter.riser">
          <option value="" disabled selected>riser</option>
          <option value="LR">Late riser</option>
          <option value="ER">Early riser</option>
        </select>
        <!-- sleep -->
        <select class="requirement" id="sleep" v-model="filter.sleep">
          <option value="" disabled selected>sleep</option>
          <option value="LS">Late sleeper</option>
          <option value="ES">Early sleeper</option>
        </select>
        <!-- search button -->
        <button class="btn btn-primary" @click="search()">Search</button>
      </div>
      <br />
      <!-- <span id="cards" v-for="user in users" :key="user.id">
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
      </span> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      filter: {
        gender: "",
        ageCategory: "",
        nationality: "",
        occupation: "",
        minBudget: "",
        maxBudget: "",
        smoking: "",
        pets: "",
        food: "",
        riser: "",
        sleep: "",
      },

      users: [],
    };
  },
  computed: {
    loggedIn() {
      var log = this.$store.getters.isLoggedIn;
      return log;
    },
  },
  methods: {
    search() {
      const filter = this.filter;
      axios
        .post(
          "http://localhost:8080/api/getRoomieProfilesBasedOnFilters",
          filter
        )
        .then(function (response) {
          if (response.status == 200) {
            console.log("search result");
          }
        })
        .catch(function (err) {
          console.log("no search result");
        });
    },
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
#search {
  background-color: white;
}
#cards {
  width: 100%;
}
.requirement {
  width: 90px;
  height: 40px;
  font-size: small;
  /* padding-left: 10px; */
  /* padding-right: 10px; */
  margin: 10px;
}
</style>

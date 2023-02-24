<template>
  <div id="home">
      <!-- v-show="loggedIn" -->
      <p id="home_search">Let's find your potential roommates</p>
      <div id="my-search">
        <div style="display: inline-block;margin-right:20px;">
          <label for="gender">Gender</label>
          <select class="requirement" id="gender" v-model="filter.gender">
            <option value="F">Female</option>
            <option value="M">Male</option>
          </select>
        </div>
        <!-- age -->
        <div style="display: inline-block;margin-right:20px;">
          <label for="age">Age Group</label>
          <select class="requirement" id="age" v-model.number="filter.ageCategory">
            <option value=1>Below 25</option>
            <option value=2>25 to 35</option>
            <option value=3>36 to 45</option>
            <option value=4>Above 45</option>
          </select>
        </div>
          <!-- ethnicity -->
        <div style="display: inline-block;margin-right:20px;">
          <label for="ethnicity">Ethnicity</label>
          <select class="requirement" id="ethnicity" v-model="filter.nationality">
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
        </div>
        <!-- occupation -->
        <div style="display: inline-block;margin-right:20px;">
          <label for="Occupation">Occupation</label>
          <select class="requirement" id="occupation" v-model="filter.occupation">
            <option value="S">Student</option>
            <option value="P">Professor</option>
          </select>
        </div>
        <div style="display: inline-block;margin-right:20px;">
          <label for="food">Food Preference</label>
          <select class="label-food-pref" id="food" v-model="filter.food">
            <option value="V">Vegan</option>
            <option value="NV">Non-Vegan</option>
          </select>
        </div>
        <div style="display: inline-block;margin-right:20px;">
          <br>
          <button class="requirement button-search" id="toggle" @click="toggleFilter"> More Filters</button>
          <div class="popup" id="pop" style="display: none" v-show="showFilter">
            <div style="display: inline-block;margin-right:20px; margin-top: 15px; margin-left: 15px;">
              <label for="budget">Montly Budget</label>
              <input
              class="requirement-popup"
              type="number"
              placeholder="Min."
              v-model.number="filter.minBudget"
              id="budget"
              style="margin-right: 20px;"
            />
            <input
              class="requirement-popup"
              type="number"
              placeholder="Max."
              v-model.number="filter.maxBudget"
              id="budget"
            />
            </div>
            <div style="display: inline-block;margin-right:20px; margin-left: 15px;">
              <label for="smoking">Smoking</label>
              <select class="requirement" id="smoking" v-model="filter.smoking">
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
            </div>
            <div style="display: inline-block;margin-right:20px;">
              <label for="pets">Pets</label>
              <select class="requirement" id="pets" v-model="filter.pets">
              <option value="Y">Yes</option>
              <option value="N">No</option>
              </select>
            </div>
            <div style="display: inline-block;margin-right:20px; margin-left: 15px;">
              <label for="riser">Wake Up Early</label>
              <select class="requirement" id="riser" v-model="filter.riser">
              <option value="ER">Yes</option>
              <option value="LR">No</option>
              </select>
            </div>
            <div style="display: inline-block;margin-right:20px;">
              <label for="riser">Sleep Early</label>
              <select class="requirement" id="sleep" v-model="filter.sleep">
                <option value="ES">Yes</option>
                <option value="LS">No</option>
              </select>
            </div>
            <div style="margin-top: 20px;">
            <input type="button" id="toggle" class="close" value="Apply" @click="toggleFilter"/>
            </div>
          </div>
        </div>
        <div style="display: inline-block;margin-right:20px;">
          <br>
          <button class="requirement button-search" style="background-color: #0a2351;" @click="search"> Search</button>
        </div>
      </div> 
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
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      filter: {
        gender: "",
        ageCategory: 0,
        nationality: "",
        occupation: "",
        minBudget: 0,
        maxBudget: 0,
        smoking: "",
        pets: "",
        food: "",
        riser: "",
        sleep: "",
      },
      showFilter: false,
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
    toggleFilter(){
      console.log(this.showFilter);
      this.showFilter = !this.showFilter;
    },
    search() {
      const filter = this.filter;
      console.log(filter.sleep);
      console.log(typeof(filter));
      axios
        .post(
          "http://localhost:8080/api/getRoomieProfilesBasedOnFilters", filter 
        )
        .then(function (response) {
          if (response.status == 200) {
            console.log(response.data)
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
#my-search {
  background-color: rgba(128, 225, 128, 0.2);
  margin-left: 80px;
  margin-right: 152px;
  padding-bottom: 15px;
  padding-top: 5px;
}
.label-food-pref{
  width: 130px;
  height: 32px;
  font-size: medium;
}
#home {
  position: relative;
  height: 85vh;
  background-color: rgba(211, 211, 211,0.15);
}
#home_search {
  text-align: left;
  font-size: 32px;
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 0;
  margin-top: 10px;
}
#cards {
  width: 100%;
}
.requirement {
  width: 110px;
  height: 32px;
  font-size: medium;
}
.requirement-popup {
  width: 110px;
  height: 32px;
  font-size: small;
}

select, label{
  display: block;
}
.button-search{
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
}
.popup {
  background-color: rgba(128, 225, 128, 0.2);
  width: 280px;
  height: 250px;
  position: absolute;
  z-index: 10;
  border-radius: 4px;
}

.close {
  float: center;
  width: 80%;
  color: white;
  background-color: #0a2351;
  border-radius: 4px;
  border: none;
}
</style>

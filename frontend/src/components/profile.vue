<template>
  <form @submit.prevent="sendMessage">
    <div id="profile">
      <!-- title -->
      <br />
      <h4>Let's find your roommates at Roomie!</h4>
      <h4>Please enter your information details below</h4>
      <!-- main box -->
      <div id="box">
        <!-- name -->
        <div class="profile_input">
          <label>Name:</label>
          <br />
          <input class="field" type="text" v-model="name" required />
        </div>
        <br />
        <!-- email -->
        <div class="profile_input">
          <label>Contact Email:</label>
          <br />
          <input class="field" type="text" v-model="email" required />
        </div>
        <br />
        <!-- age -->
        <div class="profile_input">
          <label>Age:</label>
          <br />
          <input class="field short" type="number" v-model="age" required />
        </div>
        <br />
        <!-- gender -->
        <div class="profile_input">
          <label>Gender:&nbsp;</label>
          <select name="gender" id="gender" v-model="gender">
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <br />
        <!-- nationality -->
        <div class="profile_input">
          <label>Nationality:&nbsp;</label>
          <select name="na" id="nationality" v-model="nationality">
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
        <br />
        <!-- occupation -->
        <div class="profile_input">
          <label>Occupation:&nbsp;</label>
          <select name="occupation" id="occupation" v-model="occupation">
            <option value="Student">Student</option>
            <option value="Professor">Professor</option>
          </select>
        </div>
        <br />
        <!-- rent range -->
        <div class="profile_input">
          <label>Rent Range(per month):</label>
          <br />
          <input
            class="field short"
            type="number"
            v-model="min_budget"
            required
          />
          -
          <input
            class="field short"
            type="number"
            v-model="max_budget"
            required
          />
        </div>
        <br />
        <!-- smoking -->
        <div class="profile_input">
          <label>Smoking:&nbsp;</label>
          <select name="smoking" id="smoking" v-model="smoking">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <br />
        <!-- pet -->
        <div class="profile_input">
          <label>Pets:&nbsp;</label>
          <select name="pet" id="pet" v-model="pet">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <br />
        <!-- food -->
        <div class="profile_input">
          <label>Food Preferences:&nbsp;</label>
          <select name="food" id="food" v-model="food">
            <option value="Vegan">Vegan</option>
            <option value="Non-vegan">Non-vegan</option>
          </select>
        </div>
        <br />
        <!-- sleep -->
        <div class="profile_input">
          <label>Sleep Cycle:</label>
          <br />
          <label>Riser:&nbsp;</label>
          <select name="sleep1" id="sleep1" v-model="sleep1">
            <option value="Early riser">Early riser</option>
            <option value="Late riser">Late riser</option>
          </select>
          <label>&nbsp;Sleeper:&nbsp;</label>
          <select name="sleep2" id="sleep2" v-model="sleep2">
            <option value="Early sleeper">Early sleeper</option>
            <option value="Late sleeper">Late sleeper</option>
          </select>
        </div>
        <br />
        <br />
        <!-- private -->
        <div class="profile_input">
          <label>Wish to keep your profile private?&nbsp;</label>
          <select name="private" id="private" v-model="private">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <br />
        <!-- submit button -->
        <button id="submit" @click="submit">Submit</button>
        <br /><br />
      </div>
    </div>
  </form>
  >
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      age: "",
      gender: "",
      nationality: "",
      occupation: "",
      min_budget: "",
      max_budget: "",
      smoking: "",
      pet: "",
      food: "",
      sleep1: "",
      sleep2: "",
      private: "",
    };
  },
  // if user already have profile, show it
  mounted() {
    var profile = this.$store.getters.getProfile;
    this.name = profile.name;
    this.email = profile.email;
    this.age = profile.age;
    this.gender = profile.gender;
    this.nationality = profile.nationality;
    this.occupation = profile.occupation;
    this.min_budget = profile.min_budget;
    this.max_budget = profile.max_budget;
    this.smoking = profile.smoking;
    this.pet = profile.pet;
    this.food = profile.food;
    this.sleep1 = profile.sleep_rise;
    this.sleep2 = profile.sleep_sleep;
    this.private = profile.isPrivate;
  },
  methods: {
    submit() {
      const data = {
        name: this.name,
        email: this.email,
        age: this.age,
        gender: this.gender,
        nationality: this.nationality,
        occupation: this.occupation,
        min_budget: this.min_budget,
        max_budget: this.max_budget,
        smoking: this.smoking,
        pet: this.pet,
        food: this.food,
        sleep_rise: this.sleep1,
        sleep_sleep: this.sleep2,
        isPrivate: this.private,
      };

      // identify empty input
      for (var key in data) {
        if (data[key] == null || data[key] == "") {
          return;
        }
      }
      var tempThis = this;
      tempThis.$store.commit("setProfile", data);
      this.$router.push("/");
      axios
        .post("http://localhost:8080/api/createRoomieProfile", data)
        .then(function (response) {
          if (response.status == 200) {
            console.log(response);
          }
        })
        .catch(function (err) {
          console.log("Error on Server.");
        });
    },
    direct(target) {
      this.$router.push("/" + target);
    },
  },
};
</script>

<style scoped>
#profile {
  font-size: small;
}
#box {
  background-color: #e5e5e5;
}
.profile_input {
  text-align: left;
}
.field {
  width: 80%;
  border-radius: 10px;
  border: 2px solid #fff;
}
.short {
  width: 200px;
}
</style>

<template>
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
          <option value="F">Female</option>
          <option value="M">Male</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <br />
      <!-- ethnicity -->
      <div class="profile_input">
        <label>Ethnicity:&nbsp;</label>
        <select name="na" id="ethnicity" v-model="ethnicity">
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
          <option value="S">Student</option>
          <option value="P">Professor</option>
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
          <option value="Y">Yes</option>
          <option value="N">No</option>
        </select>
      </div>
      <br />
      <!-- pet -->
      <div class="profile_input">
        <label>Pets:&nbsp;</label>
        <select name="pet" id="pet" v-model="pet">
          <option value="Y">Yes</option>
          <option value="N">No</option>
        </select>
      </div>
      <br />
      <!-- food -->
      <div class="profile_input">
        <label>Food Preferences:&nbsp;</label>
        <select name="food" id="food" v-model="food">
          <option value="V">Vegan</option>
          <option value="NV">Non-vegan</option>
        </select>
      </div>
      <br />
      <!-- sleep -->
      <div class="profile_input">
        <label>Wake up early?&nbsp;</label>
        <select name="sleep1" id="sleep1" v-model="sleep1">
          <option value="Y">Yes</option>
          <option value="N">No</option>
        </select>
        <label>&nbsp;Sleep early?&nbsp;</label>
        <select name="sleep2" id="sleep2" v-model="sleep2">
          <option value="Y">Yes</option>
          <option value="N">No</option>
        </select>
      </div>
      <br />
      <!-- intro -->
      <div class="profile_input">
        <label>Your Introduction:</label>
        <br />
        <textarea rows="4" class="field" v-model="introduction" required />
      </div>
      <br />
      <!-- private -->
      <div class="profile_input">
        <label>Wish to keep your profile private?&nbsp;</label>
        <select name="private" id="private" v-model="private">
          <option value="Y">Yes</option>
          <option value="N">No</option>
        </select>
      </div>
      <br />
      <!-- submit button -->
      <button id="submit" @click="submit">Submit</button>
      <br /><br />
    </div>
  </div>
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
      ethnicity: "",
      occupation: "",
      min_budget: "",
      max_budget: "",
      smoking: "",
      pet: "",
      food: "",
      sleep1: "",
      sleep2: "",
      private: "",
      introduction: "",
    };
  },
  // if user already have profile, show it
  mounted() {
    var temp = this;
    // if logged in, get profile
    if (temp.$store.getters.isLoggedIn) {
      var Email = temp.$store.getters.getUser;
      axios
        .post("http://localhost:8080/api/getRoomieProfile", "", {
          headers: { email: Email },
        })
        .then(function (response) {
          if (response.status == 200) {
            var data = response.data;
            temp.name = data.name;
            temp.email = data.email;
            temp.age = data.age;
            temp.gender = data.gender;
            temp.ethnicity = data.nationality;
            temp.occupation = data.occupation;
            temp.min_budget = data.minBudget;
            temp.max_budget = data.maxBudget;
            temp.smoking = data.smoking;
            temp.pet = data.pets;
            temp.food = data.food;
            temp.sleep1 = data.riser;
            temp.sleep2 = data.sleep;
            temp.private = data.isPrivate;
            temp.introduction = data.description;
          }
        })
        .catch(function (err) {
          console.log("no user profile");
        });
    }
  },
  methods: {
    submit() {
      const data = {
        name: this.name,
        email: this.email,
        age: this.age,
        gender: this.gender,
        nationality: this.ethnicity,
        occupation: this.occupation,
        minBudget: this.min_budget,
        maxBudget: this.max_budget,
        smoking: this.smoking,
        pets: this.pet,
        food: this.food,
        riser: this.sleep1,
        sleep: this.sleep2,
        isPrivate: this.private,
        description: this.introduction,
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
            console.log("submission success");
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

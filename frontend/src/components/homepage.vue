<template>
  <div id="home">
    <!-- v-show="loggedIn" -->
    <p id="home_search" v-show="loggedIn">
      Let's find your potential roommates
    </p>
    <div class="search-container" v-show="loggedIn">
      <div id="my-search">
        <!-- gender -->
        <div style="display: inline-block; margin-right: 20px">
          <label for="gender">Gender</label>
          <select class="requirement" id="gender" v-model="filter.gender">
            <option value="F">Female</option>
            <option value="M">Male</option>
          </select>
        </div>
        <!-- age -->
        <div style="display: inline-block; margin-right: 20px">
          <label for="age">Age Group</label>
          <select class="requirement" id="age" v-model="filter.ageCategory">
            <option value="1">Below 25</option>
            <option value="2">25 to 35</option>
            <option value="3">36 to 45</option>
            <option value="4">Above 45</option>
          </select>
        </div>
        <!-- ethnicity -->
        <div style="display: inline-block; margin-right: 20px">
          <label for="ethnicity">Ethnicity</label>
          <select
            class="requirement"
            id="ethnicity"
            v-model="filter.nationality"
          >
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
        <div style="display: inline-block; margin-right: 20px">
          <label for="Occupation">Occupation</label>
          <select
            class="requirement"
            id="occupation"
            v-model="filter.occupation"
          >
            <option value="S">Student</option>
            <option value="P">Professional</option>
          </select>
        </div>
        <!-- food -->
        <div style="display: inline-block; margin-right: 20px">
          <label for="food">Food Preference</label>
          <select class="label-food-pref" id="food" v-model="filter.food">
            <option value="V">Vegan</option>
            <option value="NV">Non-Vegan</option>
          </select>
        </div>
        <!-- more options -->
        <div style="display: inline-block; margin-right: 20px">
          <br />
          <button
            class="requirement button-search"
            id="toggle"
            @click="toggleFilter"
          >
            More Filters
          </button>
          <div class="popup" id="pop" style="display: none" v-show="showFilter">
            <!-- <div style="display: inline-block;margin-right:20px; margin-top: 15px; margin-left: 15px;"> -->
            <div
              style="
                display: inline-block;
                margin-right: 20px;
                margin-left: 15px;
                margin-top: 15px;
              "
            >
              <label for="min-budget">Min. Budget</label>
              <input
                class="requirement-popup"
                type="number"
                placeholder="Min."
                v-model="filter.minBudget"
                id="min-budget"
              />
            </div>
            <div
              style="
                display: inline-block;
                margin-right: 20px;
                margin-top: 15px;
              "
            >
              <label for="max-budget">Max. Budget</label>
              <input
                class="requirement-popup"
                type="number"
                placeholder="Max."
                v-model="filter.maxBudget"
                id="budget"
              />
            </div>
            <div
              style="
                display: inline-block;
                margin-right: 20px;
                margin-left: 15px;
              "
            >
              <label for="smoking">Smoking</label>
              <select class="requirement" id="smoking" v-model="filter.smoking">
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
            </div>
            <div style="display: inline-block; margin-right: 20px">
              <label for="pets">Pets</label>
              <select class="requirement" id="pets" v-model="filter.pets">
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
            </div>
            <div
              style="
                display: inline-block;
                margin-right: 20px;
                margin-left: 15px;
              "
            >
              <label for="riser">Wake Up Early</label>
              <select class="requirement" id="riser" v-model="filter.riser">
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
            </div>
            <div style="display: inline-block; margin-right: 20px">
              <label for="riser">Sleep Early</label>
              <select class="requirement" id="sleep" v-model="filter.sleep">
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
            </div>
            <div style="margin-top: 20px">
              <input
                type="button"
                id="toggle"
                class="close"
                value="Apply"
                @click="toggleFilter"
              />
            </div>
          </div>
        </div>
        <!-- search button -->
        <div style="display: inline-block; margin-right: 20px">
          <br />
          <button
            class="requirement button-search"
            style="background-color: #0a2351"
            @click="search"
          >
            Search
          </button>
        </div>
        <!-- notification -->
        <div style="display: inline-block; margin-right: 20px">
          <br />
          <button
            class="requirement button-search"
            style="background-color: #daa520"
            @click="createAlert"
          >
            {{ this.alertButton }}
          </button>
        </div>
      </div>
    </div>
    <!-- cards space -->
    <div class="cards-container" v-show="loggedIn">
      <!-- each card -->
      <span id="cards" v-for="user in users" :key="user.email">
        <div
          class="card"
          style="
            width: 13rem;
            height: 16rem;
            display: inline-block;
            margin-right: 10px;
            margin-top: 13px;
          "
        >
          <!-- image of user -->
          <img
            class="card-img-top"
            :src="getImgUrl(user)"
            alt="Card image cap"
          />
          <!-- img
            class="card-img-top"
            :src="getImgUrl(user)"
            alt="Card image cap"
            v-else-if="user.gender === 'F'"
          /-->
          <!-- main part of card -->
          <div class="card-body">
            <!-- name -->
            <h5 class="card-title">{{ user.name }}</h5>
            <!-- age and gender -->
            <p class="card-text" v-if="user.gender === 'F'">
              {{ user.age }} years (Female)
            </p>
            <p class="card-text" v-else-if="user.gender === 'M'">
              {{ user.age }} years (Male)
            </p>
            <!-- budget -->
            <p class="card-text">Approx Budget: ${{ user.approxBudget }}</p>
            <a
              href="#"
              class="stretched-link"
              @click="showModal(user)"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            ></a>
          </div>
        </div>
      </span>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="myModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLongTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div
          style="
            height: 255px;
            background-color: rgba(0, 128, 0, 0.2);
            padding: 8px;
            text-align: right;
          "
        >
          <!-- image of user -->
          <div class="h-100" style="width: 30%; display: inline-block">
            <img
              class="card-img-top-popup img-thumbnail"
              :src="getImgUrl(selectedUser)"
              alt="Card image cap"
            />
            <!-- img
              class="card-img-top-popup img-thumbnail"
              :src="getImgUrl(selectedUser)"
              alt="Card image cap"
              v-else-if="this.selectedUser.gender === 'F'"
            /-->
          </div>
          <div
            class="h-100 d-inline-block"
            style="
              width: 3%;
              padding-left: 5px;
              display: inline-block;
              float: right;
            "
          >
            <!-- close modal button -->
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="clearInfo"
            ></button>
          </div>
          <!-- other info -->
          <div
            class="h-100 float-right"
            style="
              width: 67%;
              padding-left: 10px;
              display: inline-block;
              float: right;
            "
          >
            <!-- name -->
            <h4 class="card-title" style="margin-top: 25px">
              {{ this.selectedUser.name }}
            </h4>
            <!-- age and gender -->
            <p
              class="profile-card-text"
              v-if="this.selectedUser.gender === 'F'"
            >
              {{ this.selectedUser.age }} years (Female)
            </p>
            <p
              class="profile-card-text"
              v-if="this.selectedUser.gender === 'M'"
            >
              {{ this.selectedUser.age }} years (Male)
            </p>
            <!-- budget -->
            <p class="profile-card-text">
              Approx Budget: ${{ this.selectedUser.approxBudget }} per month
            </p>
            <!-- table for other details of user -->
            <table
              class="table table-bordered"
              style="margin-top: 15px; text-align: center"
            >
              <!-- categories -->
              <thead>
                <tr class="table-dark">
                  <th scope="col">Occupation</th>
                  <th scope="col">Smoking</th>
                  <th scope="col">Pets</th>
                  <th scope="col">Vegan</th>
                  <th scope="col">Sleep Early</th>
                  <th scope="col">Wake Up Early</th>
                </tr>
              </thead>
              <!-- yes or no for each category -->
              <tbody>
                <tr class="table-secondary">
                  <td v-if="this.selectedUser.occupation === 'S'">Student</td>
                  <td v-else-if="this.selectedUser.occupation === 'P'">
                    Professional
                  </td>
                  <td v-if="this.selectedUser.smoking === 'Y'">Yes</td>
                  <td v-else-if="this.selectedUser.smoking === 'N'">No</td>
                  <td v-if="this.selectedUser.pets === 'Y'">Yes</td>
                  <td v-else-if="this.selectedUser.pets === 'N'">No</td>
                  <td v-if="this.selectedUser.food === 'V'">Yes</td>
                  <td v-else-if="this.selectedUser.food === 'NV'">No</td>
                  <td v-if="this.selectedUser.sleep === 'Y'">Yes</td>
                  <td v-else-if="this.selectedUser.sleep === 'N'">No</td>
                  <td v-if="this.selectedUser.riser === 'Y'">Yes</td>
                  <td v-else-if="this.selectedUser.riser === 'N'">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="modal-body" style="border-radius: 20px">
          <div style="float: left; width: 30%">
            <!-- optional msg -->
            <textarea
              cols="30"
              rows="5"
              placeholder="Send optional message"
              style="width: 100%; margin-top: 3px"
              v-model="optional_msg"
            ></textarea>
            <!-- send invite button -->
            <button
              class="btn btn-primary"
              style="width: 100%; margin-top: 3px"
              @click="sendEmailInvite"
            >
              {{ this.sendInviteButtonMsg }}
            </button>
          </div>
          <!-- description -->
          <div style="text-align: left; margin-left: 35%">
            {{ this.selectedUser.name }}'s description:
            <br />
            {{ this.selectedUser.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
export default {
  data() {
    return {
      filter: {
        email: this.$store.getters.getUser,
        gender: null,
        ageCategory: null,
        nationality: null,
        occupation: null,
        minBudget: null,
        maxBudget: null,
        smoking: null,
        pets: null,
        food: null,
        riser: null,
        sleep: null,
        description: null,
      },
      showFilter: false,
      users: [],
      image: "",
      selectedUser: "",
      sendInviteButtonMsg: "Send Invite",
      alertButton: "Notify Me",
      // optional msg for send invite
      optional_msg: "",
    };
  },
  computed: {
    loggedIn() {
      var log = this.$store.getters.isLoggedIn;
      return log;
    },
  },
  // you may use this code to check if refresh will keep user info
  // mounted() {
  //   console.log(this.$store.getters.isLoggedIn);
  //   console.log(this.$store.getters.getUser);
  // },
  methods: {
    getImgUrl(user) {
      console.log(user.photoURL);
      return user.photoURL;
    },
    clearInfo() {
      this.optional_msg = "";
    },
    toggleFilter() {
      console.log(this.showFilter);
      this.showFilter = !this.showFilter;
    },
    showModal(user) {
      var temp = this;
      temp.selectedUser = user;
      temp.sendInviteButtonMsg = "Send Invite";
      console.log(temp.selectedUser);
    },
    search() {
      const filter = this.filter;
      axios
        .post(
          "http://localhost:8080/api/getRoomieProfilesBasedOnFilters",
          filter
        )
        .then((response) => {
          if (response.status == 200) {
            this.users = response.data;
            if (this.users.length == 0) {
              alert("no result");
            }
          }
        })
        .catch(function (err) {
          console.log(err);
          console.log("no search result");
        });
    },
    sendEmailInvite() {
      var temp = this;
      axios
        .post("http://localhost:8080/api/sendEmailInvite", "", {
          headers: {
            requestSenderEmail: temp.$store.getters.getUser,
            requestReceiverEmail: temp.selectedUser.email,
            optionalMsg: temp.optional_msg,
          },
        })
        .then(function (response) {
          if (response.status == 200) {
            temp.sendInviteButtonMsg = "Invited";
          }
        })
        .catch(function (err) {
          console.log("server error");
          console.log(err);
        });
    },
  },
  createAlert() {
    const filter = this.filter;
    axios
      .post("http://localhost:8080/api/createAlertOnFilter", filter)
      .then((response) => {
        if (response.status == 200) {
          console.log("alert created on filter");
          this.alertButton = "Done";
          setTimeout(() => {
            this.alertButton = "Notify Me";
          }, 900);
        }
      })
      .catch(function (err) {
        console.log(err);
        console.log("no alert created");
      });
  },
};
</script>

<style scoped>
.cards-container {
  text-align: justify;
  margin-left: 35px;
  position: absolute;
  z-index: 0;
}
.modal-body-title {
  text-align: left;
  color: #006400;
  font-weight: 900;
}

.img-thumbnail {
  height: 100%;
  width: 100%;
}
.card-img-top {
  width: 100%;
  height: 10rem;
  object-fit: cover;
}
.card-img-top-popup {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}
h5 {
  margin: 0;
}
p {
  margin: 0;
}
.card-body {
  padding: 10px;
}
.card-title {
  text-align: left;
  color: black;
  font-weight: 900;
}
.card-text {
  text-align: left;
  color: black;
}
.profile-card-text {
  text-align: left;
  color: black;
  font-size: large;
}
#tempsearchresults {
  position: relative;
}
#temp_search {
  text-align: center;
  position: relative;
  top: 30%;
  font-size: 60px;
  font-weight: bolder;
}
#search {
  background-color: #fff;
}
table,
th,
td {
  border: 0.75px solid;
  border-bottom: 1px solid;
}
#my-search {
  background-color: rgba(128, 225, 128, 0.2);
  margin-left: 80px;
  margin-right: 20px;
  padding-bottom: 15px;
  padding-top: 5px;
}
.search-container {
  z-index: 1; /* Ensure it stays on top of other player divs */
  top: 0px;
  position: sticky;
  background-color: #f9f9f9fa;
}
.label-food-pref {
  width: 130px;
  height: 32px;
  font-size: medium;
}
#home {
  min-height: 110vh;
  /* margin: 0;  */
  background-color: rgba(211, 211, 211, 0.15);
  margin-bottom: 50px;
}
#home_search {
  text-align: left;
  font-size: 32px;
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 0;
  margin-top: 10px;
}
/* #cards {
  width: 100%;
  margin-left: 80px;
  margin-right: 80px;
} */
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

select,
label {
  display: block;
}
.button-search {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
}
.popup {
  background-color: rgba(128, 225, 128, 0.9);
  width: 280px;
  height: 250px;
  position: absolute;
  z-index: 100;
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

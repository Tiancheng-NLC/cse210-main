<template>
    <div id="connections">
        <div class="connections-container">
            <div class="tab">
                <button class="tablinks" @click="showMyConnections">My Connections</button>
                <button class="tablinks" @click="showSentRequests">Sent Requests</button>
                <button class="tablinks" @click="showReceivedRequests">Received Requests</button>
                <button class="refresh-button" style="float: right; margin-right: 75px;" @click="refreshData">Refresh</button>
            </div>
            <!-- My Connections Tab Content -->
            <div class="tabcontent" v-if="this.showMyConnectionsFlag">
                <!-- cards space -->
                <div class="cards-container" v-show="loggedIn">
                  <!-- each card -->
                  <span id="cards" v-for="(user,index) in allConnectionsUsers">
                    <div class="card" style="width: 20rem; height: 7rem; display: inline-block;margin-right: 10px; margin-top: 10px;">
                      <div style="margin: 0; padding: 0; height: 100%; width: 100%;">
                        <div class="h-100" style="width: 45%; display: inline-block; margin: 0; padding: 0;">
                          <img
                          class="card-img-top"
                          :src="getImgUrl(user)"
                          alt="Card image cap"
                          />
                        </div>
                        <div class="h-100" style="width: 55%; display: inline-block; float: right; margin: 0; padding: 0;">
                          <div class="card-body" style="display: inline-block;">
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
                              @click="showAllConnectionsModal(user, index)"
                              data-bs-toggle="modal"
                              data-bs-target="#myAllConnectionsModal"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
            </div>

            <div class="tabcontent" v-if="this.showSentRequestsFlag">
              <!-- cards space -->
              <div class="cards-container" v-show="loggedIn">
                <!-- each card -->
                <span id="cards" v-for="(user,index) in sentRequestsUsers">
                  <div class="card" style="width: 20rem; height: 7rem; display: inline-block;margin-right: 10px; margin-top: 10px;">
                    <div style="margin: 0; padding: 0; height: 100%; width: 100%;">
                      <div class="h-100" style="width: 45%; display: inline-block; margin: 0; padding: 0;">
                        <img
                        class="card-img-top"
                        :src="getImgUrl(user)"
                        alt="Card image cap"
                        />
                      </div>
                      <div class="h-100" style="width: 55%; display: inline-block; float: right; margin: 0; padding: 0;">
                        <div class="card-body" style="display: inline-block;">
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
                            @click="showSentRequestsModal(user, index)"
                            data-bs-toggle="modal"
                            data-bs-target="#mySentRequestsModal"
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>

            <div class="tabcontent" v-if="this.showReceivedRequestsFlag">
              <!-- cards space -->
              <div class="cards-container" v-show="loggedIn">
                <!-- each card -->
                <span id="cards" v-for="(user,index) in receivedRequestsUsers">
                  <div class="card" style="width: 20rem; height: 7rem; display: inline-block;margin-right: 10px; margin-top: 10px;">
                    <div style="margin: 0; padding: 0; height: 100%; width: 100%;">
                      <div class="h-100" style="width: 45%; display: inline-block; margin: 0; padding: 0;">
                        <img
                        class="card-img-top"
                        :src="getImgUrl(user)"
                        alt="Card image cap"
                        />
                      </div>
                      <div class="h-100" style="width: 55%; display: inline-block; float: right; margin: 0; padding: 0;">
                        <div class="card-body" style="display: inline-block;">
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
                            @click="showReceivedRequestsModal(user, index)"
                            data-bs-toggle="modal"
                            data-bs-target="#myReceivedRequestsModal"
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
        </div>
    </div>
<!-- My Connections Tab Modal -->
<div class="modal fade" id="myAllConnectionsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
  aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div style="height: 255px; background-color: rgba(0, 128, 0,0.2); padding: 8px; text-align: right;">
        <div class="h-100" style="width: 30%; display: inline-block;">
          <img
            class="card-img-top-popup img-thumbnail"
            :src="getImgUrl(selectedUser)"
            alt="Card image cap"
          />
          <button class="btn btn-primary" v-if="this.removeConnectionActive" style="width: 100%; margin-top: 3px; background-color: maroon; border-color: maroon;" @click="removeConnection(this.selectedConnectionIndex)">Remove Connection</button>
          <button class="btn btn-primary" v-else style="width: 100%; margin-top: 3px; background-color: maroon; border-color: maroon;" disabled><i>Connection Removed</i></button>        </div>
        <div class="h-100 d-inline-block" style="width: 3%; padding-left: 5px; display: inline-block; float: right;">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="h-100  float-right" style="width: 67%; padding-left: 10px; display: inline-block; float: right;">
          <!-- name -->
          <h4 class="card-title" style="margin-top: 28px">
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

      <div class="modal-body">
        <!-- <div style="float: left; width: 30%">
          <p style="text-align: justify;">
          <b>Sent Message:</b>
          <br/>{{this.selectedUser.description}}</p>          
        </div>
        <div style="text-align: justify; margin-left: 35%">
          <p>
          <b>{{this.selectedUser.name}}'s Introduction:</b>
          <br/>{{this.selectedUser.description}} </p>
        </div> -->
        <div style="text-align: justify;">
          <p>
          <b>{{this.selectedUser.name}}'s Introduction:</b>
          <br/>{{this.selectedUser.description}} </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Sent Requests Tab Modal -->
<div class="modal fade" id="mySentRequestsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
  aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div style="height: 255px; background-color: rgba(0, 128, 0,0.2); padding: 8px; text-align: right;">
        <div class="h-100" style="width: 30%; display: inline-block;">
          <img
            class="card-img-top-popup img-thumbnail"
            :src="getImgUrl(selectedUser)"
            alt="Card image cap"
          />
          <button class="btn btn-primary" disabled v-if="this.pendingConnectionActive" style="width: 100%; margin-top: 3px;"><i>Status: Pending</i></button>
          <button class="btn btn-primary" disabled v-else style="width: 100%; margin-top: 3px; background-color: maroon; border-color: maroon;"><i>Status: Rejected</i></button>        
        </div>
        <div class="h-100 d-inline-block" style="width: 3%; padding-left: 5px; display: inline-block; float: right;">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="h-100  float-right" style="width: 67%; padding-left: 10px; display: inline-block; float: right;">
          <!-- name -->
          <h4 class="card-title" style="margin-top: 28px">
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

      <div class="modal-body">
        <div style="float: left; width: 30%">
          <p style="text-align: justify;">
          <b>Sent Message:</b>
          <br/>{{this.selectedUserSentMessage}}</p>          
        </div>
        <div style="text-align: justify; margin-left: 35%">
          <p>
          <b>{{this.selectedUser.name}}'s Introduction:</b>
          <br/>{{this.selectedUser.description}} </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Received Requests Tab Modal -->
<div class="modal fade" id="myReceivedRequestsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
  aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div style="height: 255px; background-color: rgba(0, 128, 0,0.2); padding: 8px; text-align: right;">
        <div class="h-100" style="width: 30%; display: inline-block;">
          <img
            class="card-img-top-popup img-thumbnail"
            :src="getImgUrl(selectedUser)"
            alt="Card image cap"
          />
          <button class="btn btn-primary" v-if="this.acceptRejectConnectionActive" style="width: 48%; margin-top: 3px; background-color: green; border-color: green; float: left;" @click="acceptConnection(this.selectedConnectionIndex)">Accept</button>
          <button class="btn btn-primary" v-if="this.acceptRejectConnectionActive" style="width: 48%; margin-top: 3px; background-color: maroon; border-color: maroon;" @click="rejectConnection(this.selectedConnectionIndex)">Reject</button>
          <button class="btn btn-primary" v-else-if="this.acceptedConnectionActive" disabled style="width: 100%; margin-top: 3px; background-color: green; border-color: green;"><i>Accepted Connection</i></button>
          <button class="btn btn-primary" v-else style="width: 100%; margin-top: 3px; background-color: maroon; border-color: maroon;" disabled><i>Rejected Connection</i></button>        
        </div>
        <div class="h-100 d-inline-block" style="width: 3%; padding-left: 5px; display: inline-block; float: right;">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="h-100  float-right" style="width: 67%; padding-left: 10px; display: inline-block; float: right;">
          <!-- name -->
          <h4 class="card-title" style="margin-top: 28px">
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

      <div class="modal-body">
        <div style="float: left; width: 30%">
          <p style="text-align: justify;">
          <b>Received Message:</b>
          <br/>{{this.selectedUserReceivedMessage}}</p>          
        </div>
        <div style="text-align: justify; margin-left: 35%">
          <p>
          <b>{{this.selectedUser.name}}'s Introduction:</b>
          <br/>{{this.selectedUser.description}} </p>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        showMyConnectionsFlag: false,
        showSentRequestsFlag: false,
        showReceivedRequestsFlag: false,
        removeConnectionActive: true,
        acceptRejectConnectionActive: true,
        acceptedConnectionActive: false,
        pendingConnectionActive: true,
        TempconnectionsData:
        {
            userProfiles: {
              "hgondali@ucsd.edu": {"email":"hgondali@ucsd.edu","name":"Harsh Gondaliya","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp","photoURL":"https://roomie-user-photo-001.s3.us-west-2.amazonaws.com/hgondali@ucsd.edu.JPG","photoData":null},
              "a@ucsd.edu": {"email":"a@ucsd.edu","name":"Joe Biden","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp","photoURL":"https://roomie-user-photo-001.s3.us-west-2.amazonaws.com/hgondali@ucsd.edu.JPG","photoData":null},
              "b@ucsd.edu": {"email":"b@ucsd.edu","name":"Donald Trump","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp","photoURL":"https://roomie-user-photo-001.s3.us-west-2.amazonaws.com/hgondali@ucsd.edu.JPG","photoData":null},
              "c@ucsd.edu": {"email":"c@ucsd.edu","name":"Mark Zuckerberg","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp","photoURL":"https://roomie-user-photo-001.s3.us-west-2.amazonaws.com/hgondali@ucsd.edu.JPG","photoData":null},
              "d@ucsd.edu": {"email":"d@ucsd.edu","name":"Tim Cook","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp","photoURL":"https://roomie-user-photo-001.s3.us-west-2.amazonaws.com/hgondali@ucsd.edu.JPG","photoData":null},
              "e@ucsd.edu": {"email":"e@ucsd.edu","name":"Elon Musk","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp","photoURL":"https://roomie-user-photo-001.s3.us-west-2.amazonaws.com/hgondali@ucsd.edu.JPG","photoData":null},
              "f@ucsd.edu": {"email":"f@ucsd.edu","name":"Yifei Ning","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp","photoURL":"https://roomie-user-photo-001.s3.us-west-2.amazonaws.com/hgondali@ucsd.edu.JPG","photoData":null},
              "g@ucsd.edu": {"email":"g@ucsd.edu","name":"Tiancheng Ma","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp","photoURL":"https://roomie-user-photo-001.s3.us-west-2.amazonaws.com/hgondali@ucsd.edu.JPG","photoData":null},
              "h@ucsd.edu": {"email":"h@ucsd.edu","name":"Satya Nadella","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp","photoURL":"https://roomie-user-photo-001.s3.us-west-2.amazonaws.com/hgondali@ucsd.edu.JPG","photoData":null}
            }
            ,
            allConnections: [
            {"requestSenderEmail":"hgondali@ucsd.edu","requestReceiverEmail":"a@ucsd.edu","message":"hi there","status":"A"},
            {"requestSenderEmail":"hgondali@ucsd.edu","requestReceiverEmail":"b@ucsd.edu","message":"hi there","status":"A"},
            {"requestSenderEmail":"c@ucsd.edu","requestReceiverEmail":"hgondali@ucsd.edu","message":"hi there","status":"A"},
            ],
            sentRequests: [
            {"requestSenderEmail":"hgondali@ucsd.edu","requestReceiverEmail":"d@ucsd.edu","message":"hi there","status":"P"},
            {"requestSenderEmail":"hgondali@ucsd.edu","requestReceiverEmail":"f@ucsd.edu","message":"hi there","status":"R"},
            {"requestSenderEmail":"hgondali@ucsd.edu","requestReceiverEmail":"g@ucsd.edu","message":"hi there","status":"P"},
            ],
            receivedRequests: [
            {"requestSenderEmail":"e@ucsd.edu","requestReceiverEmail":"hgondali@ucsd.edu","message":"hi there","status":"P"},
            {"requestSenderEmail":"h@ucsd.edu","requestReceiverEmail":"hgondali@ucsd.edu","message":"hi there","status":"P"},
            ],
        },
        // connectionsData: "",
        allConnectionsUsers: "",
        sentRequestsUsers: "",
        receivedRequestsUsers: "",
        selectedUser: "",
        selectedConnectionIndex: "",
        selectedUserSentMessage: "",
        selectedUserReceivedMessage: "",
        connectionsData: "",
    };
  },
  mounted(){
    var tempThis = this;
    axios
      .post("http://localhost:8080/api/getConnections", "", {
        headers: {
          email: tempThis.$store.getters.getUser,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          tempThis.connectionsData = response.data;
          console.log(tempThis.connectionsData);
        }
      })
      .catch(function (err) {
        console.log(err);
        console.log("no search result");
      });
  },
  computed: {
    loggedIn() {
      var log = this.$store.getters.isLoggedIn;
      return log;
    },
  },
  methods: {
    getImgUrl(user) {
      if(user.photoURL === null){
        return "https://roomie-user-photo-001.s3.us-west-2.amazonaws.com/hgondali@ucsd.edu.JPG";
      }
      return user.photoURL;
    },
    showMyConnections() {
      var tempThis = this;
      tempThis.allConnectionsUsers =  this.getUserProfiles(tempThis.connectionsData.allConnections);
      tempThis.showSentRequestsFlag = false;
      tempThis.showReceivedRequestsFlag = false;
      tempThis.showMyConnectionsFlag = true;
    },
    showSentRequests(){
        var tempThis = this;
        tempThis.sentRequestsUsers =  this.getUserProfiles(tempThis.connectionsData.sentRequests);
        tempThis.showReceivedRequestsFlag = false;
        tempThis.showMyConnectionsFlag = false;
        tempThis.showSentRequestsFlag = true;
    },
    showReceivedRequests(){
        var tempThis = this;
        tempThis.receivedRequestsUsers =  this.getUserProfiles(tempThis.connectionsData.receivedRequests);
        tempThis.showSentRequestsFlag = false;
        tempThis.showMyConnectionsFlag = false;
        tempThis.showReceivedRequestsFlag = true;
    },
    getUserProfileFromConnection(connection){
      var tempThis = this;
      var currentUser = tempThis.$store.getters.getUser
      if(connection.requestSenderEmail === currentUser){
        return tempThis.connectionsData.userProfiles[connection.requestReceiverEmail];
      } else {
        return tempThis.connectionsData.userProfiles[connection.requestSenderEmail];
      }
    },
    getUserProfiles(connections){
      var tempThis = this;
      var userProfiles = [];
      for (let i = 0; i < connections.length; i++) {
        var userProfile = tempThis.getUserProfileFromConnection(connections[i]);
        userProfiles.push(userProfile);
      }
      return userProfiles;
    },
    showAllConnectionsModal(user, index) {
      var tempThis = this;
      tempThis.selectedUser = user;
      tempThis.selectedConnectionIndex = index;
      tempThis.removeConnectionActive = true;
    },
    showSentRequestsModal(user, index) {
      var tempThis = this;
      tempThis.selectedUser = user;
      tempThis.selectedConnectionIndex = index;
      tempThis.selectedUserSentMessage = tempThis.connectionsData.sentRequests[index].message;
      if(tempThis.connectionsData.sentRequests[index].status === 'P'){
        tempThis.pendingConnectionActive = true;
      } else{
        tempThis.pendingConnectionActive = false;
      }
    },
    showReceivedRequestsModal(user, index) {
      var tempThis = this;
      tempThis.selectedUser = user;
      tempThis.selectedConnectionIndex = index;
      if(tempThis.connectionsData.receivedRequests[index].status === 'P'){
        tempThis.acceptRejectConnectionActive = true;
      } else{
        tempThis.acceptRejectConnectionActive = false;
      }
      tempThis.acceptedConnectionActive = false;
      tempThis.selectedUserReceivedMessage = tempThis.connectionsData.receivedRequests[index].message;
    },
    removeConnection(index){
      var tempThis = this;
      axios
        .post("http://localhost:8080/api/rejectRequest", "", {
          headers: {
            requestSenderEmail: tempThis.connectionsData.allConnections[index].requestSenderEmail,
            requestReceiverEmail: tempThis.connectionsData.allConnections[index].requestReceiverEmail,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            tempThis.removeConnectionActive = false;
            tempThis.connectionsData.allConnections.splice(index, 1);
            tempThis.allConnectionsUsers =  this.getUserProfiles(tempThis.connectionsData.allConnections);
          }
        })
        .catch(function (err) {
          console.log(err);
          console.log("no search result");
        });
    },
    acceptConnection(index){
      var tempThis = this;
      axios
        .post("http://localhost:8080/api/acceptRequest", "", {
          headers: {
            requestSenderEmail: tempThis.connectionsData.receivedRequests[index].requestSenderEmail,
            requestReceiverEmail: tempThis.connectionsData.receivedRequests[index].requestReceiverEmail,
          },
        })
        .then((response) => {
          if (response.status == 200) {
            tempThis.acceptRejectConnectionActive = false;
            tempThis.acceptedConnectionActive = true;
            let copiedConnection = JSON.parse(JSON.stringify(tempThis.connectionsData.receivedRequests[index]));
            copiedConnection.status = 'A';
            tempThis.connectionsData.allConnections.push(copiedConnection);
            tempThis.connectionsData.receivedRequests.splice(index, 1);
            tempThis.receivedRequestsUsers =  this.getUserProfiles(tempThis.connectionsData.receivedRequests);
          }
        })
        .catch(function (err) {
          console.log(err);
          console.log("no search result");
        });
    },
    rejectConnection(index){
      var tempThis = this;
      axios
        .post("http://localhost:8080/api/rejectRequest", "", {
          headers: {
            requestSenderEmail: tempThis.connectionsData.receivedRequests[index].requestSenderEmail,
            requestReceiverEmail: tempThis.connectionsData.receivedRequests[index].requestReceiverEmail,
          },
        })
        .then((response) => {
          if (response.status == 200) {
            tempThis.acceptRejectConnectionActive = false;
            tempThis.acceptedConnectionActive = false;
            tempThis.connectionsData.receivedRequests.splice(index, 1);
            tempThis.receivedRequestsUsers =  this.getUserProfiles(tempThis.connectionsData.receivedRequests);          }
        })
        .catch(function (err) {
          console.log(err);
          console.log("no search result");
        });
    },
    refreshData(){
    var tempThis = this;
      axios
        .post("http://localhost:8080/api/getConnections", "", {
          headers: {
            email: tempThis.$store.getters.getUser,
          },
        })
        .then((response) => {
          if (response.status == 200) {
            tempThis.connectionsData = response.data;
            console.log(tempThis.connectionsData);
          }
        })
        .catch(function (err) {
          console.log(err);
          console.log("no search result");
        });
    },
  },
};
</script>

<style scoped>
#connections {
  min-height: 110vh;
  background-color: rgba(211, 211, 211, 0.15);
  margin-bottom: 50px;
}
.tab {
  z-index: 1; /* Ensure it stays on top of other player divs */
  top: 0px;
  position: sticky;
  background-color: #f9f9f9fa;
  margin-top: 5px;
}
/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

.refresh-button {
  color: white;
  background-color: rgb(10, 35, 81);
  border-radius: 4px;
  border: none;
  padding: 8px 10px;
  margin-top: 7px;
}

/* Style the buttons inside the tab */
.tablinks {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tablinks:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tablinks:focus{
  background-color: rgba(128, 225, 128, 0.7);
}

.refresh-button:hover {
    background-color: rgba(10,35,81,0.8);
}

/* Style the tab content */
.tabcontent {
  padding: 6px 12px;
}
.img-thumbnail {
  height: 100%;
  width: 100%;
}

.card-img-top {
  width: 100%;
  height: 100%;
  float: left;
  object-fit: cover;
  border-radius: 5px;
}

.card-img-top-popup {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}
.card-title {
  text-align: left;
  color: black;
  font-weight: 900;
}

.card-text {
  text-align: left;
  color: black;
  font-size: 13px;
}

.profile-card-text {
  text-align: left;
  color: black;
  font-size: large;
}
h5 {
  margin: 0;
}

p {
  margin: 0;
}
.cards-container {
  text-align: justify;
  margin-left: 5px;
  /* position: absolute; */
  z-index: 0;
}
table,
th,
td {
  border: 0.75px solid;
  border-bottom: 1px solid;
}

</style>
<template>
    <div id="connections">
        <div class="connections-container">
            <div class="tab">
                <button class="tablinks" @click="showMyConnections">My Connections</button>
                <button class="tablinks" @click="showSentRequests">Sent Requests</button>
                <button class="tablinks" @click="showReceivedRequests">Received Requests</button>
                <button class="refresh-button" style="float: right; margin-right: 75px;">Refresh</button>
            </div>
            <div class="tabcontent" v-if="this.showMyConnectionsFlag">
            <h3>My Connections</h3>
            </div>

            <div class="tabcontent" v-if="this.showSentRequestsFlag">
            <h3>Sent Requests</h3>
            </div>

            <div class="tabcontent" v-if="this.showReceivedRequestsFlag">
            <h3>Received Requests</h3>
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
        connectionsData:
        {
            userProfiles: [
              {"email":"hgondali@ucsd.edu","name":"Harsh Gondaliya","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp"},
              {"email":"a@ucsd.edu","name":"Joe Biden","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp"},
              {"email":"b@ucsd.edu","name":"Donald Trump","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp"},
              {"email":"c@ucsd.edu","name":"Mark Zuckerberg","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp"},
              {"email":"d@ucsd.edu","name":"Tim Cook","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp"},
              {"email":"e@ucsd.edu","name":"Elon Musk","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp"},
              {"email":"f@ucsd.edu","name":"Yifei Ning","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp"},
              {"email":"g@ucsd.edu","name":"King Tiancheng Ma","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp"},
              {"email":"h@ucsd.edu","name":"Satya Nadella","gender":"M","age":23,"nationality":"Asian","occupation":"S","approxBudget":1500,"smoking":"N","pets":"N","food":"V","riser":"Y","sleep":"Y","isPrivate":"N","description":"Temp"}
            ],
            allConnections: [
            {"requestSenderEmail":"hgondali@ucsd.edu","requestReceiverEmail":"a@ucsd.edu","message":"hi there","status":"A"},
            {"requestSenderEmail":"hgondali@ucsd.edu","requestReceiverEmail":"b@ucsd.edu","message":"hi there","status":"A"},
            {"requestSenderEmail":"c@ucsd.edu","requestReceiverEmail":"hgondali@ucsd.edu","message":"hi there","status":"A"},
            {"requestSenderEmail":"hgondali@ucsd.edu","requestReceiverEmail":"d@ucsd.edu","message":"hi there","status":"A"},
            {"requestSenderEmail":"e@ucsd.edu","requestReceiverEmail":"hgondali@ucsd.edu","message":"hi there","status":"A"},
            {"requestSenderEmail":"hgondali@ucsd.edu","requestReceiverEmail":"f@ucsd.edu","message":"hi there","status":"A"},
            {"requestSenderEmail":"hgondali@ucsd.edu","requestReceiverEmail":"g@ucsd.edu","message":"hi there","status":"A"},
            {"requestSenderEmail":"h@ucsd.edu","requestReceiverEmail":"hgondali@ucsd.edu","message":"hi there","status":"A"},
            ],
            sentRequests: [],
            receivedRequests: []
        }
    };
  },
  computed: {
    loggedIn() {
      var log = this.$store.getters.isLoggedIn;
      return log;
    },
  },
  methods: {
    showMyConnections() {
        var tempThis = this;
        tempThis.showSentRequestsFlag = false;
        tempThis.showReceivedRequestsFlag = false;
        tempThis.showMyConnectionsFlag = true;
    },
    showSentRequests(){
        var tempThis = this;
        tempThis.showReceivedRequestsFlag = false;
        tempThis.showMyConnectionsFlag = false;
        tempThis.showSentRequestsFlag = true;
    },
    showReceivedRequests(){
        var tempThis = this;
        tempThis.showSentRequestsFlag = false;
        tempThis.showMyConnectionsFlag = false;
        tempThis.showReceivedRequestsFlag = true;
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
.connections-container {
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

</style>
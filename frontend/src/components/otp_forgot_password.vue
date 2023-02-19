<template>
    <div id="otpforgotpassword">
        <!-- logo & app name -->
        <div id="top" @click="direct('')">
            <img class="logo" src="../img/logo.png" alt="logo missing" width="80" />
            <h2>Roomie</h2>
        </div>
        <!-- title -->
        <h3>Welcome to Roomie!</h3>
        <!-- main box -->
        <div id="box">
            <!-- email -->
            <div class="input">
                <div class="otp">{{msg}}</div>
                <input class="field" type="text" v-model="otp" />
                <div class="invalid" v-show="incorrectOTP">Incorrect Code</div>
                <div class="resent" v-show="resentOTP">Resent Code</div>
            </div>
            <br />
            <!-- resent OTP button -->
            <button id="submit" @click="sendOTP()">Resend Code</button>
            <!-- signup button -->
            <br /> <br />
            <button id="submit" @click="resetPassword()">Submit</button>
            <br /><br />
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
export default {
    data() {
        return {
            otp: this.otp,
            incorrectOTP: false,
            resentOTP: false,
            msg: "Please enter the code sent to ".concat(this.$store.state.user),
        };
    },
    methods: {
        resetPassword() {
            var tempThis = this;
            tempThis.resentOTP = false;
            const data = {
                email: tempThis.$store.state.user,
                password: tempThis.$store.state.password,
            };
            if (this.otp == tempThis.$store.state.otp) {
                tempThis.$router.push("/reset");
            } else {
                tempThis.incorrectOTP = true;
            }
        },
        direct(target) {
            this.$router.push("/" + target);
        },
        sendOTP() {
            var tempThis = this;
            tempThis.incorrectOTP = false;
            axios
                .post("http://localhost:8080/api/forgotPassword", "", { headers: { "email": tempThis.$store.state.user } })
                .then(function (response) {
                    if (response.status == 200) {
                        tempThis.$store.commit("setOTP", response.data);
                    }
                })
                .catch(function (err) {
                    console.log("Error on Server")
                });
            tempThis.resentOTP = true;
        }
    },
};
</script>
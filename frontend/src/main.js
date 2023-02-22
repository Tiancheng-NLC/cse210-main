import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import App from './App.vue'
import router from './router'
import vuex from 'vuex'

import './scss/main.css'


const store = new vuex.Store({
    state:{
        user:null,
        isLoggedIn:null,
        otp:null,
        password: null,
        profile:[],
    },
    mutations:{
        setUser(state,user){
            state.user=user;
        },
        setOTP(state, otp){
            state.otp = otp;
        },
        setPassword(state, password){
            state.password = password;
        },
        setLoggedIn(state, status){
            state.isLoggedIn = status;
        },
        setProfile(state,profile){
            state.profile=profile;
            // for(var i=0;i<profile.length;i++){
            //     console.log("123123");
            //     state.profile.push(profile[i]);
            // }
        }
    },
    getters:{
        isLoggedIn(state){
            return state.isLoggedIn !== null;
        },
        getOTP(state){
            return state.otp;
        },
        getPassword(state){
            return state.password;
        },
        getUser(state){
            return state.user;
        },
        getProfile(state){
            return state.profile;
        },
    }
})

var app=createApp(App);
app.use(store)
app.use(router).mount('#app')


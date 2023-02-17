import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
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
        }
    }
})

var app=createApp(App);
app.use(store)
app.use(router).mount('#app')

// createApp(App).use(router).mount('#app')

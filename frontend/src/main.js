import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import vuex from 'vuex'

import './scss/main.css'


const store = new vuex.Store({
    state:{
        user:null,
    },
    mutations:{
        setUser(state,user){
            state.user=user;
        },
    },
    getters:{
        isLoggedIn(state){
            return state.user!==null;
        },
    }
})

var app=createApp(App);
app.use(store)
app.use(router).mount('#app')

// createApp(App).use(router).mount('#app')

import {createWebHistory,createRouter} from "vue-router";
import Login from "../components/login.vue";
import Home from "../components/homepage.vue";
import Signup from "../components/signup.vue";
const routes=[
    {
        path: "/login",
        name: "login",
        component:Login,
    },
    {
        path: "/",
        name: "home",
        component:Home,
    },
    {
        path: "/signup",
        name: "signup",
        component:Signup,
    },
];
const router=createRouter({
    history:createWebHistory(),
    routes,
});
export default router;
import {createWebHistory,createRouter} from "vue-router";
import Login from "../components/login.vue";
import Home from "../components/homepage.vue";
import Signup from "../components/signup.vue";
import Forget from "../components/forget_password.vue";
import Reset from "../components/reset_password.vue";
import OTP from "../components/otp.vue";

const routes=[
    {
        path: "/login",
        name: "login",
        component:Login,
    },
    {
        path: "/otp",
        name: "otp",
        component:OTP,
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
    {
        path: "/forget",
        name: "forget-password",
        component:Forget,
    },
    {
        path: "/reset",
        name: "reset-password",
        component:Reset,
    },
];
const router=createRouter({
    history:createWebHistory(),
    routes,
});
export default router;
import {createWebHistory,createRouter} from "vue-router";
import Login from "../components/login.vue";
import Home from "../components/homepage.vue";
import Signup from "../components/signup.vue";
import Forgot from "../components/forgot_password.vue";
import Reset from "../components/reset_password.vue";
import Profile from "../components/profile.vue";
import OTPSignup from "../components/otp_signup.vue";
import OTPForgotPassword from "../components/otp_forgot_password.vue";

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
        path: "/otp_signup",
        name: "otp_signup",
        component:OTPSignup,
    },
    {
        path: "/otp_forgot_password",
        name: "otp_forgot_password",
        component:OTPForgotPassword,
    },
    {
        path: "/signup",
        name: "signup",
        component:Signup,
    },
    {
        path: "/forgot",
        name: "forgot-password",
        component:Forgot,
    },
    {
        path: "/reset",
        name: "reset-password",
        component:Reset,
    },
    {
        path: "/profile",
        name: "profile",
        component:Profile,
    },
];
const router=createRouter({
    history:createWebHistory(),
    routes,
});
export default router;
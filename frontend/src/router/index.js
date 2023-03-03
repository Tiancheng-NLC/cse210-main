import {createWebHistory,createRouter} from "vue-router";
import Login from "../components/login.vue";
import Home from "../components/homepage.vue";
import Signup from "../components/signup.vue";
import Forgot from "../components/forgot_password.vue";
import Reset from "../components/reset_password.vue";
import Profile from "../components/profile.vue";
import OTPSignup from "../components/otp_signup.vue";
import OTPForgotPassword from "../components/otp_forgot_password.vue";
import TempSearchResults from "../components/temp_search_results.vue";
import Connections from "../components/connections.vue";
import AboutUs from "../components/about_us.vue";
import ContactUs from "../components/contact_us.vue";
import PrivacyPolicy from "../components/privacy_policy.vue";
import TermsConditions from "../components/terms_conditions.vue";

const routes=[
    {
        path: "/login",
        name: "login",
        component:Login,
    },
    {
        path: "/connections",
        name: "connections",
        component:Connections,
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
    {
        path: "/temp",
        name: "temp",
        component:TempSearchResults,
    },
    {
        path: "/about_us",
        name:"about_us",
        component:AboutUs,
    }, 
    {
        path: "/contact_us",
        name:"contact_us",
        component:ContactUs,
    },
    {
        path: "/privacy_policy",
        name:"privacy_policy",
        component:PrivacyPolicy,
    },
    {
        path: "/terms_conditions",
        name:"terms_conditions",
        component:TermsConditions,
    },
];
const router=createRouter({
    history:createWebHistory(),
    routes,
});
export default router;
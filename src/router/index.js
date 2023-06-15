import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Homepage from "@/views/homepage.vue";
import Register from "@/views/register/register.vue";

const routers = [
    {
        path: '/',
        name: 'homeEmptyPage',
        component: Homepage
    },
    {
        path: '/register',
        name: 'registerPage',
        component: Register
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})

export default router
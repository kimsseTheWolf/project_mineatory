import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Homepage from "@/views/homepage.vue";

const routers = [
    {
        path: '/',
        name: 'homeEmptyPage',
        component: Homepage
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})

export default router
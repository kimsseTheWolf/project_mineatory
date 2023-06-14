import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue";
import TheWelcome from "@/components/TheWelcome.vue";

const routers = [
    {
        path: '/',
        name: 'homeEmptyPage',
        component: HelloWorld
    },
    {
        path: '/welcome',
        name: 'homeEmptyPage',
        component: TheWelcome
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

export default router
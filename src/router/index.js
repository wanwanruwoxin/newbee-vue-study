import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/introduce'
        },
        {
            path: '/introduce',
            name: 'introduce',
            component: () => import('../views/Introduce.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import( '../views/Login.vue')
        },
    ]
})

export default router

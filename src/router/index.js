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
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../views/Dashboard.vue')
        },
        {
            path: '/add',
            name: 'add',
            component: () => import('../views/AddGood.vue')
        },
        {
            path: '/swiper',
            name: 'swiper',
            component: () => import('../views/Swiper.vue')
        }
    ]
})

export default router

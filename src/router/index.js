import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomePage.vue')
    },
    {
        path: '/about-page',
        name: 'about-page',
        component: () => import('@/views/AboutPage.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

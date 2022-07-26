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
    {
        path: '/excursion-page',
        name: 'excursion-page',
        component: () => import('@/views/ExcursionPage.vue')
    },
    {
        path: '/tracking-page',
        name: 'tracking-page',
        component: () => import('@/views/TrackingPage.vue')
    },
    {
        path: '/crimea-page',
        name: 'crimea-page',
        component: () => import('@/views/CrimeaPage.vue')
    },
    {
        path: '/ural-page',
        name: 'ural-page',
        component: () => import('@/views/UralPage.vue')
    },
    {
        path: '/photosession-page',
        name: 'photosession-page',
        component: () => import('@/views/PhotosessionPage.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

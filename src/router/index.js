import { createRouter, createWebHistory } from 'vue-router'
import Store from '../store'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomePage.vue')
    },
    {
        path: '/post-list-page',
        name: 'post-list-page',
        component: () => import('@/views/PostListPage.vue')
    },
    {
        path: '/post-page/:id',
        name: 'post-page',
        component: () => import('@/views/PostPage.vue')
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
    {
        path: '/helen-ruls',
        name: 'helen-ruls',
        component: () => import('@/views/AdminPage.vue'),
        meta: { authRequired: true }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginPage.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/RegisterPage.vue'),
      },       
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {

    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0


    Store.dispatch('initAuth')
    .then(user => {
        if(to.matched.some(route => route.meta.authRequired)) {
            if(user) {
                next();
            } else {
                next('/signin');
            }
        } else {
            next();
        }
    })
})

export default router

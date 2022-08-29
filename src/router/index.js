import { createRouter, createWebHistory } from 'vue-router'
import Store from '../store'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomePage.vue')
    },
    {
        path: '/plan-page',
        name: 'plan-page',
        meta: {
            authRequired: true
        },
        component: () => import('@/views/PlanPage.vue')
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
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginPage.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/RegisterPage.vue'),
      },       
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/NotFoundPage.vue'),
      },       
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/NotFoundPage.vue'),
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
                next('/404');
            }
        } else {
            next();
        }
    })
})

export default router

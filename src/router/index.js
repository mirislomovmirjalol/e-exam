import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Exam from '../views/Exam.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/exams/:id',
        name: 'exams',
        component: Exam
    },
    {
        path: '/2',
        name: 'test1',
        component: Home
    },
    {
        path: '/3',
        name: 'test2',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

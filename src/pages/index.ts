import {createRouter, createMemoryHistory, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./HomePage.vue')
    },
]

export default createRouter({
    routes,
    history: createMemoryHistory(),
})
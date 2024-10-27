import {createRouter, createMemoryHistory, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./HomePage.vue')
    },
    {
        path: '/components',
        name: 'Components',
        component: () => import('./ComponentsPage.vue')
    },
]

export default createRouter({
    routes,
    history: createMemoryHistory(),
})
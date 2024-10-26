import {createMemoryHistory, createRouter} from 'vue-router'


const routes = [
    {
        path: '/',
        component: () => import('./HomePage.vue') ,
    },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
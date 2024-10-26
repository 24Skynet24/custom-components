import { createApp } from 'vue'
import {router} from "./pages/router.ts"
import { createPinia } from 'pinia'
import './styles/global.scss'
import App from './App.vue'

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

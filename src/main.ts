import { createApp } from 'vue'
import {router} from "./pages/router.ts"
import './styles/global.scss'
import App from './App.vue'

createApp(App)
    .use(router)
    .mount('#app')

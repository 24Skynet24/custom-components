import { createApp } from 'vue'
import router from "@/pages/index.ts"
import { createPinia } from 'pinia'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import '@/styles/global.scss'
import App from './App.vue'

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

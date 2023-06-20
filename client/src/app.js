import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from '@/components/App.vue'
import routes from '@/router'
import store from './store'
import './config/validators'
import './config/axios'

const app = createApp(App)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

app.use(router)

app.use(store)

app.mount('#app')

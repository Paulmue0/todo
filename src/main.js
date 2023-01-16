import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'

import '@picocss/pico'
// import './assets/main.css'

const app = createApp(App)

app.provide("store", store)
app.mount('#app')

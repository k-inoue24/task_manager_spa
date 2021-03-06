import { createApp } from 'vue';
import App from './App.vue'
import router from './router.js'
import VCalendar from 'v-calendar';

const app = createApp(App)
app.use(router)
app.use(VCalendar)
app.mount('#app')
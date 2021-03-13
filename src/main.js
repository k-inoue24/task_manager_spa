import { createApp } from 'vue';
import App from './App.vue'
import router from './router.js'
import VCalendar from 'v-calendar';
import Common from '@/components/Common.vue'
require('@/scss/destyle.scss');
require('@/scss/style.scss');




const app = createApp(App)
app.mixin(Common)
app.use(router)
app.use(VCalendar)
app.mount('#app')
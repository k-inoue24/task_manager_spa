import { createRouter, createWebHistory } from 'vue-router'
import Top from './components/Top'
import Add from './components/Add'
import Download from './components/Download'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: Top
        },
        {
            path: '/Add',
            component: Add
        },
        {
            path: '/Download',
            component: Download
        }
    ]
})

export default router
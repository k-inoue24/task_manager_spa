import { createRouter, createWebHistory } from 'vue-router'
import Top from './components/Top'
import Add from './components/Add'
import Download from './components/Download'

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes: [{
            path: '/task_manager_spa',
            component: Top
        },
        {
            path: '/task_manager_spa/add',
            component: Add
        },
        {
            path: '/task_manager_spa/download',
            component: Download
        }
    ]
})

export default router
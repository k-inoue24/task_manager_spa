import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Add from '@/components/Add'
import Download from '@/components/Download'

Vue.use(Router)

const router = new Router({
  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    {
      path: '/',
      component:Top
    },
    {
      path: '/Add',
      component:Add
    },
    {
      path: '/Download',
      component:Download
    }
  ]
})
// 生成したVueRouterインスタンスをエクスポート
export default router
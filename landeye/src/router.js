import { createRouter, createWebHistory } from 'vue-router'
const routes= [
    {
      path: '/',
      component: () => import('./components/MainContent.vue') ,
      redirect:'/menu/firstpage',
      children:[
        { path: '/menu/firstpage', name:'主页',component: () => import('./components/FirstPage.vue') },
        { path: '/menu/camera', name:'摄像头列表',component: () => import('./components/CameraList.vue') },
        { path: '/menu/statistics', name:'数据可视化',component: () => import('./components/StatisticsTable.vue') },
        { path: '/menu/mypage', name:'我的',component: () => import('./components/MyPage.vue') }
      ]
    }
  ]
  
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import http from './http'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import * as echarts from 'echarts'
import 'ant-design-vue/dist/reset.css'
import Antd from 'ant-design-vue';
const app = createApp(App)
app.config.globalProperties.$echarts = echarts


app.use(ElementPlus)
app.use(Antd)
app.use(router) 
app.config.globalProperties.$http = http 
Object.keys(ElementPlusIconsVue).forEach(key => {
  app.component(key, ElementPlusIconsVue[key]);
});
app.mount('#app')



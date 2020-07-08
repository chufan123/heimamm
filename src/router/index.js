//导入
import VueRouter from 'vue-router'
import Vue from 'vue'
//导入登录组件
import login from '@/views/login/login.vue'
//注册
Vue.use(VueRouter)
//实例化
const router = new VueRouter({
    routes:[
        {
            path: '/',
            component: login
        }
    ]
})

export default router
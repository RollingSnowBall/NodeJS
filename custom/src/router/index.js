/**
 * Created by wp on 2017/3/27.
 */
import  Vue from 'vue'
import Router from 'vue-router'

import Login from '../page/Login.vue'

Vue.use(Router)

export default new Router({
    routers: [
        {
            path: '/',
            name: 'Login',
            component: Login
        }
    ]
})
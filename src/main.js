/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2022-05-02 18:20:38
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2022-05-06 20:04:52
 * @FilePath: \mimall\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { env } from './pathUrl/env'


//根据前端的跨域方式做调整
//通过代理方式，不需要走env.js
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

//通过jsonp和cors进行axios地址环境配置
axios.defaults.baseURL = env

//错误接口拦截
axios.interceptors.response.use(function(response) {
    let res = response.data
    if (res.state == 0) {
        return res.data
    } else if (res.state == 10) {
        window.location.href = '/#/login'
    } else {
        alert(res.msg)
    }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
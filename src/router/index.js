/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2022-05-02 18:20:38
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2022-05-04 20:48:50
 * @FilePath: \mimall\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Index from '../views/index.vue'
import Product from '../views/product.vue'
import Detail from '../views/detail.vue'
import Cart from '../views/cart.vue'
import Order from '../views/order.vue'
import OrderConfirm from '../views/orderConfirm.vue'
import OrderList from '../views/orderList.vue'
import OrderPay from '../views/orderPay.vue'
import AliPay from '../views/aliPay.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/index',
        children: [{
            path: 'index',
            name: 'index',
            component: Index
        }, {
            path: 'product/:id',
            name: 'product',
            component: Product
        }, {
            path: 'detail/:id',
            name: 'detail',
            component: Detail
        }]
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/order',
        name: 'order',
        component: Order,
        children: [{
            path: 'orderConfirm',
            name: 'orderConfirm',
            component: OrderConfirm
        }, {
            path: 'orderList',
            name: 'orderList',
            component: OrderList
        }, {
            path: 'orderPay',
            name: 'orderPay',
            component: OrderPay
        }, {
            path: 'aliPay',
            name: 'aliPay',
            component: AliPay
        }]
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
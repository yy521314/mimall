<!--
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2022-05-04 20:00:12
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2022-05-04 20:41:11
 * @FilePath: \mimall\src\views\order.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
      <order-header></order-header>
      <router-view></router-view>
      <order-footer></order-footer>
  </div>
</template>

<script>
import OrderFooter from '../components/OrderFooter.vue'
import OrderHeader from '../components/OrderHeader.vue'
export default {
	components: { 
        OrderHeader,
        OrderFooter 
    },
}
OrderFooter
</script>

<style>

</style>
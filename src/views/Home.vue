<!--
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2022-05-04 18:29:11
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2022-05-04 20:27:28
 * @FilePath: \mimall\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'

export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

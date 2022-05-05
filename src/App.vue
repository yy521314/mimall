<!--
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2022-05-02 18:20:38
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2022-05-05 21:29:19
 * @FilePath: \mimall\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Storage from './storage/index'

export default {
  name:"app",
  components:{
  },
  mounted(){
    console.log(Storage.getItem('name','user'));
  }
}
</script>


/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2022-05-04 20:03:46
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2022-05-06 19:43:59
 * @FilePath: \mimall\src\storage\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//Storage封装
const STORAGE_KEY = 'mall'

//mall的分类
//mall = {user:{"name":"zhangsan","age":18}} mall下面分的有模块user，user下面还有几个小模块属性


export default {
    setItem(key, value, module_name) {
        //判断module_name是否存在，然后在模块中的模块进行操作
        if (module_name) {
            let temp = this.getItem(module_name)
            temp[key] = value
            this.setItem(module_name, temp)
        } else {
            //再在mall的内部设置一个和user同级的存储内容
            let mall = this.getStorage(key)
            mall[key] = value
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(mall))
        }
    },
    getItem(key, module_name) {
        let mall = this.getStorage()
        if (module_name) { //需要获取mall下的一个模块中的一个属性
            let val = mall[module_name] //再次调用，跟外层获取keyvlaue一样
            if (val) return val[key]
        } else {
            return mall[key] //直接获取mall模块下的一个模块
        }
    },
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    clear(key, module_name) {
        let mall = this.getStorage()
        if (module_name) {
            delete mall[module_name][key]
        } else {
            delete mall[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(mall))
    }


}
/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2022-05-06 19:42:41
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2022-05-06 20:03:52
 * @FilePath: \mimall\src\pathUrl\env.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let baseUrl;

switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl = 'http://dev-mall-springboot.cn/api'
        break;
    case 'test':
        baseUrl = 'http://test-mall-springboot.cn/api'
        break;
    case 'prod':
        baseUrl = 'http://mall-springboot.cn/api'
        break;
    default:
        baseUrl = 'http://mall-springboot.cn/api'
        break;
}

export default {
    baseUrl
}
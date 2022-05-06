/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2022-05-06 19:25:38
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2022-05-06 19:28:15
 * @FilePath: \mimall\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.imooc.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    'api': ''
                }
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}
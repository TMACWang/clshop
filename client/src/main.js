// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入Vue核心
import Vue from 'vue'
// 引入路由
import router from '@/router'
// 引入Vuex
import store from '@/store'
// 引入Axios，http请求库
import axios from 'axios'
// 引入Vue对于Axios的插件，其实就是给vue的原型上面添加了一个$http变量，以及一个axios变量
import VueAxios from 'vue-axios'
// 引入懒加载插件
import VueLazyload from 'vue-lazyload'
// 引入无限滚动插件
import VueInfiniteScroll from 'vue-infinite-scroll'
// 引入处理金钱的库，按3位加一个逗号
import { currency } from '@/util/currency'
// 引入App组件
import App from '@/App'

import apiConfig from '../config/api.config'
// 引入基础的CSS样式
import '@/assets/css/base.css'
// 引入结算的CSS样式
import '@/assets/css/checkout.css'
// 引入产品的CSS样式
import '@/assets/css/product.css'
// 使用Axios库，实际上就是给vue的实例原型上面添加一个$http和axios属性
Vue.use(VueAxios, axios)

axios.defaults.baseURL = apiConfig.baseUrl
// 使用无限滚动插件
Vue.use(VueInfiniteScroll)
// 使用懒加载插件，配置加载时的图片
Vue.use(VueLazyload, {
  loading: 'static/loading-svg/loading-bars.svg',
  attempt: 3
})

// 注册全局的过滤器currency
Vue.filter('currency', currency)
// 关闭产品提示，现在在开发环境中
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // 挂载到index.html中的id为app的元素上
  store, // 将vuex给注入到整个Vue实例中，这样在所有的子组件中都可以使用this.$store来访问vuex的实例
  router, // 注入router选项，后面可以使用this.$route访问到路由对象，可以使用this.$router访问到路由器对象
  template: '<App/>', // 使用App组件作为根组件的子组件
  components: { App } // 注册App为根组件的子组件
})

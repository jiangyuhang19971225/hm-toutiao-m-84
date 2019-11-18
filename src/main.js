import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入设置基准值创建
import 'amfe-flexible'
// 导入vant移动端组件库
import vant, {
  Lazyload
} from 'vant'
import 'vant/lib/index.less'
// 自己的样式
import '@/styles/index.less'
// 自己的插件
import plugin from '@/utils/plugin'
// 注册好了 支持v-lazy指令
Vue.use(Lazyload)
Vue.use(plugin)

Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

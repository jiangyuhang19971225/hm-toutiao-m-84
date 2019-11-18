import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
dayjs.extend(relativeTime)
// 新建plugin作为 Vue插件

// 作用:注册全局组件  注册原型方法  注册自定义指令 注册过滤器

// 延时函数
const sleep = () => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve()
    }, 10)
  })
}

// 过滤器
// 获取相对时间
// value  是使用过滤器管道符之前的js表达式执行结果
const relTime = (time) => {
  // 依赖一个dayjs 的插件 RelativeTime
  // dayjs() 获取当前时间
  // .from(time) 获取相对时间
  const datestr = dayjs().locale('zh-cn').from(time)
  return datestr
}
export default {
  install (Vue) {
    // 原型挂载
    Vue.prototype.$sleep = sleep
    // 过滤器
    Vue.filter('relTime', relTime)
  }
}

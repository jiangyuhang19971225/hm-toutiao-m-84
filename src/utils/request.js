// 提供一个配置好的axios请求的函数
import axios from 'axios'
import JSONBIGINT from 'json-bigint'
import store from '@/store'

// 创建一个新的axios实例  另个名字不能相同  所以写为instance//实例
const instance = axios.create({
  // 基准值
  baseURL: 'http://ttapi.research.itcast.cn/',
  // 转换相响应数据格式
  transformResponse: [(data) => {
    // data是原始数据格式
    // try catch捕捉异常
    try {
      return JSONBIGINT.parse(data)
    } catch (e) {
      return data
    }
  }]
})

// 请求拦截器   追加token到请求头
instance.interceptors.request.use(config => {
  // 拦截成功
  // 获取token(token来自vuex中的user中token)
  if (store.state.user.token) {
    //  如果token存在  则追加token
    config.headers.Authorization = `Bearer ${store.state.user.token}`
  }
  return config
}, err => Promise.reject(err))
//* *Promise.reject(reason)**方法返回一个带有拒绝原因reason参数的Promise对象

// 调用接口 (接口地址，请求方式，传参)
export default (url, method, data) => {
  // params 选项是 get传参s
  // data 选项是 其他请求方式的传参
  instance({
    url,
    method,
    // js表达式运行的结果必须是字符串（params|data）
    // 严谨处理  get Get GET 都认为是get
    [method.toLowerCase() === 'get' ? 'params' : 'data']: data
  })
}

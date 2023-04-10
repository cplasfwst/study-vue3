import { createApp } from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import App from './App.vue'

// 关于配置axios
// 替换 baseURL
axios.defaults.baseURL = 'http://apis.imooc.com/api/'
// 下面的 icode 值是从慕课网获取的 token 值，可以在课程右侧的项目接口校验码找到
axios.interceptors.request.use(config => {
  // ... 其他代码
  // get 请求，添加到 url 中
  config.params = { ...config.params, icode: '607FDDF7ECFAD9FC' }
  // 其他请求，添加到 body 中
  // 如果是上传文件，添加到 FormData 中
  if (config.data instanceof FormData) {
    config.data.append('icode', '607FDDF7ECFAD9FC')
  } else {
  // 普通的 body 对象，添加到 data 中
    config.data = { ...config.data, icode: '607FDDF7ECFAD9FC' }
  }
  return config
})

axios.get('columns').then(resp => {
  console.log(resp.data, '这里是什么')
})
// 发送请求时
axios.interceptors.request.use(config => {
  store.commit('setLoading', true)
  return config
})
// 接受完毕（响应了）
axios.interceptors.response.use(config => {
  store.commit('setLoading', false)
  return config
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

import axios from 'axios'
import qs from 'qs'
export default function request(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: '/api',
      headers: options.headers || { 'X-Requested-With': 'XMLHttpRequest' },
      url: options.url,
      method: options.method,
      data: /json/gi.test(JSON.stringify(options.headers)) ? JSON.stringify(options.data) : qs.stringify(options.data),
      params: options.params,
      responseType: options.responseType || 'json',
      transformResponse: [
        function (data) {
          return data
        },
      ],
    })
    instance.interceptors.request.use(
      (config) => {
        let uuid = sessionStorage.getItem('uuid')
        config.headers.uuid = uuid
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return Promise.reject(error) // 返回接口返回的错误信息
      }
    )

    // 请求处理
    instance(options)
      .then((res) => {
        resolve(res.data)
        return false
      })
      .catch((error) => {
        reject(error)
      })
  })
}

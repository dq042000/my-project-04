import axios, { Method, AxiosInstance, AxiosRequestConfig } from 'axios'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import qs from 'qs'
import { ElMessage } from 'element-plus'

export const FORM_METHOD: Method[] = ['POST', 'post', 'PUT', 'put']
export const QUERY_METHOD: Method[] = ['GET', 'get', 'DELETE', 'delete']

let http: AxiosInstance = axios.create({
  baseURL: '/'
})

http.interceptors.request.use(
  (request) => {
    if (request.method && FORM_METHOD.includes(request.method as Method)) {
      request.data = qs.stringify(request.data)
    } else if (
      request.method &&
      QUERY_METHOD.includes(request.method as Method)
    ) {
      request.params = qs.parse(request.data)
      request.data = undefined
    }

    return request
  },
  (error) => {
    return error
  }
)

http.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data)
  },
  (error) => {
    const { response } = error
    if (response && response.status && response.data) {
      switch (response.status) {
        case 500:
          ElMessage({
            message: '系統發生錯誤，請稍後再重試或聯繫管理員',
            type: 'error',
            duration: 3000
          })
          break
        default:
          ElMessage({
            message: response.data,
            type: 'error',
            duration: 3000
          })
          break
      }
    } else {
      if (!window.navigator.onLine) {
        ElMessage({
          message: error?.message,
          type: 'error',
          duration: 3000
        })
      } else {
        return Promise.reject(error)
      }
    }

    return error
  }
)

export default <T>(obj: AxiosRequestConfig) => {
  return new Promise<T>((resolve, reject) => {
    http({
      url: obj.url,
      data: obj.data,
      method: obj.method || 'GET',
      responseType: obj.responseType || 'json'
    })
      .then((res) => {
        // 後端回傳型別為 json，資料結構為 data: {}，所以這邊只取 res.data 裏面的資料回傳
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

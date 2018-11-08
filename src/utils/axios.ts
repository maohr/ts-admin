import Axios from 'axios'
// import Cookies from 'js-cookie'
Axios.defaults.withCredentials = true
Axios.defaults.headers = {
  'Content-Type': 'application/json; charset=utf-8',
  'Accept':'application/json'
}

class HttpRequest {
  private baseUrl: string
  constructor (baseUrl: string) {
    this.baseUrl = baseUrl
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl
    }
    return config
  }
  interceptors (instance: any, url: string) {
    // 请求拦截
    instance.interceptors.request.use((config: any) => {
      // 添加全局的loading...
      return config
    }, (error: any) => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use((res: any) => {
      let msg: string = res.data.message
      if(msg && msg.includes("oauth2/authorize")) {
        // window.location.href = msg
        const _s_i: number = msg.indexOf('FredirectFrontURI')
        const _e_i: number = msg.indexOf('&response_type')
        const _s: string = msg.substring(0, _s_i + 20)
        const _e: string = msg.substring(_e_i, msg.length)
        let url: string = `${_s}${encodeURIComponent(window.location.href)}${_e}`
        window.location.href = url
      }else {
        let { data } = res
        return data
      }
    }, (error: any) => {
      return Promise.reject(error)
    })
  }
  request (options: any) {
    const instance = Axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
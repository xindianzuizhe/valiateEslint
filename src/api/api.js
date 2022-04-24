import request from './index'
import user from './modules/user'
const Login = (params) => {
  return request({
    url: '/login',
    params: params,
    method: 'get',
  })
}
export default {
  Login,
  user,
}
